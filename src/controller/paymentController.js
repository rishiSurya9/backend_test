import crypto from 'crypto';
import { prisma } from '../prisma/client.js';
import { env } from '../config/env.js';

function assert(condition, message = 'Bad Request', code = 400) {
  if (!condition) {
    const err = new Error(message);
    err.status = code;
    throw err;
  }
}

// Create an add-funds order via Razorpay only.
// If SDK/keys are missing, return a placeholder order id and keep a PENDING transaction.
export async function createAddFundsOrder(req, res, next) {
  try {
    const { amount, currency = 'INR' } = req.body || {};
    const amt = Number(amount);
    assert(Number.isFinite(amt) && amt > 0, 'amount must be > 0');

    const userId = req.user.id;
    const haveKeys = env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_SECRET;

    if (haveKeys) {
      try {
        const { default: Razorpay } = await import('razorpay');
        const instance = new Razorpay({ key_id: env.RAZORPAY_KEY_ID, key_secret: env.RAZORPAY_KEY_SECRET });
        const order = await instance.orders.create({ amount: Math.round(amt * 100), currency, receipt: `rcpt_${userId}_${Date.now()}` });

        await prisma.transaction.create({
          data: {
            userId,
            type: 'ADD_FUNDS',
            status: 'PENDING',
            amount: amt,
            currency,
            walletTo: 'MAIN',
            provider: 'RAZORPAY',
            referenceId: order.id,
            description: 'Add funds via Razorpay',
            meta: order
          }
        });

        return res.json({ ok: true, provider: 'RAZORPAY', order });
      } catch (_) {
        // Fall through to placeholder path
      }
    }

    const orderId = `local_order_${crypto.randomUUID()}`;
    await prisma.transaction.create({
      data: {
        userId,
        type: 'ADD_FUNDS',
        status: 'PENDING',
        amount: amt,
        currency,
        walletTo: 'MAIN',
        provider: 'RAZORPAY',
        referenceId: orderId,
        description: 'Add funds (placeholder order)'
      }
    });
    return res.status(202).json({ ok: true, provider: 'RAZORPAY', order: { id: orderId, amount: Math.round(amt * 100), currency } });
  } catch (err) { next(err); }
}

// Withdraw funds from main wallet using Razorpay semantics.
// If amount exceeds WITHDRAW_ADMIN_THRESHOLD, leave as PENDING awaiting admin approval.
export async function withdrawFunds(req, res, next) {
  try {
    const { amount, method = 'UPI', details } = req.body || {};
    const amt = Number(amount);
    assert(Number.isFinite(amt) && amt > 0, 'amount must be > 0');
    assert(method === 'UPI' || method === 'BANK', 'method must be UPI or BANK');

    const min = Number(env.MIN_WITHDRAW_AMOUNT || 100);
    assert(amt >= min, `Minimum withdrawal is ₹${min}`, 400);

    const threshold = Number(env.WITHDRAW_ADMIN_THRESHOLD || 5000);
    const requiresApproval = amt > threshold;

    const userId = req.user.id;

    const result = await prisma.$transaction(async (tx) => {
      const wallet = await tx.wallet.upsert({ where: { userId }, update: {}, create: { userId } });
      assert(Number(wallet.mainBalance) >= amt, 'Insufficient balance', 400);

      const updatedWallet = await tx.wallet.update({ where: { userId }, data: { mainBalance: { decrement: amt } } });

      // Create payout placeholder (actual Razorpay X payout requires different setup)
      let payoutRef = null;
      let description = `Withdrawal via ${method}`;
      if (requiresApproval) description += ' (awaiting admin approval)';

      if (!requiresApproval) {
        const haveKeys = env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_SECRET;
        if (haveKeys) {
          // Placeholder payout reference; real integration would call Razorpay Payouts API
          payoutRef = `local_payout_${crypto.randomUUID()}`;
        } else {
          payoutRef = `local_payout_${crypto.randomUUID()}`;
        }
      }

      const trx = await tx.transaction.create({
        data: {
          userId,
          type: 'WITHDRAW',
          status: 'PENDING',
          amount: amt,
          currency: updatedWallet.currency,
          walletFrom: 'MAIN',
          provider: 'RAZORPAY',
          referenceId: payoutRef,
          description,
          meta: { method, details: details || null, requiresApproval }
        }
      });

      return { wallet: updatedWallet, transaction: trx };
    });

    res.status(202).json({ ok: true, ...result });
  } catch (err) { next(err); }
}

// List payment-related transactions (add funds + withdraw)
export async function paymentTransactions(req, res, next) {
  try {
    const { limit = 20, cursor, status, type } = req.query || {};
    const take = Math.min(Math.max(Number(limit) || 20, 1), 100);
    const where = { userId: req.user.id };

    const typeFilter = String(type || '').toUpperCase();
    if (typeFilter === 'ADD_FUNDS' || typeFilter === 'WITHDRAW') where.type = typeFilter;
    else where.type = { in: ['ADD_FUNDS', 'WITHDRAW'] };

    const statusFilter = String(status || '').toUpperCase();
    if (['PENDING', 'SUCCESS', 'FAILED'].includes(statusFilter)) where.status = statusFilter;

    const items = await prisma.transaction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: String(cursor) } : undefined
    });
    const nextCursor = items.length === take ? items[items.length - 1].id : null;
    res.json({ ok: true, items, nextCursor });
  } catch (err) { next(err); }
}

// Admin: approve a pending withdrawal (keep funds debited, mark SUCCESS)
export async function approveWithdrawal(req, res, next) {
  try {
    const { id } = req.params;
    const result = await prisma.$transaction(async (tx) => {
      let trx = await tx.transaction.findUnique({ where: { id } });
      if (!trx || trx.type !== 'WITHDRAW' || trx.status !== 'PENDING') {
        const err = new Error('Withdrawal not found or not pending'); err.status = 404; throw err;
      }
      trx = await tx.transaction.update({
        where: { id },
        data: { status: 'SUCCESS', description: (trx.description || '') + ' (approved)', meta: { ...(trx.meta || {}), admin: { approvedBy: req.user.id, at: new Date().toISOString() } } }
      });
      return trx;
    });
    res.json({ ok: true, transaction: result });
  } catch (err) { next(err); }
}

// Admin: reject a pending withdrawal (refund to main wallet, mark FAILED)
export async function rejectWithdrawal(req, res, next) {
  try {
    const { id } = req.params;
    const result = await prisma.$transaction(async (tx) => {
      let trx = await tx.transaction.findUnique({ where: { id } });
      if (!trx || trx.type !== 'WITHDRAW' || trx.status !== 'PENDING') {
        const err = new Error('Withdrawal not found or not pending'); err.status = 404; throw err;
      }
      // Refund main wallet
      await tx.wallet.update({ where: { userId: trx.userId }, data: { mainBalance: { increment: Number(trx.amount) } } });
      trx = await tx.transaction.update({
        where: { id },
        data: { status: 'FAILED', description: (trx.description || '') + ' (rejected)', meta: { ...(trx.meta || {}), admin: { rejectedBy: req.user.id, at: new Date().toISOString() } } }
      });
      return trx;
    });
    res.json({ ok: true, transaction: result });
  } catch (err) { next(err); }
}
