import crypto from 'crypto';
import { prisma } from '../prisma/client.js';
import { env } from '../config/env.js';

async function creditWalletForTransaction(tx, trx) {
  if (trx.status === 'SUCCESS' && trx.type === 'ADD_FUNDS' && trx.walletTo === 'MAIN') {
    await tx.wallet.update({ where: { userId: trx.userId }, data: { mainBalance: { increment: Number(trx.amount) } } });
  }
}

export async function razorpayWebhook(req, res) {
  try {
    const signature = req.headers['x-razorpay-signature'];
    const secret = env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) return res.status(500).json({ ok: false, error: 'Webhook secret not configured' });

    const payload = req.rawBody || JSON.stringify(req.body || {});
    const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
    if (expected !== signature) return res.status(400).json({ ok: false, error: 'Invalid signature' });

    const event = typeof req.body === 'object' && req.body ? req.body : JSON.parse(payload);
    const eventType = event.event;

    let orderId = null;
    let amountPaise = null;
    if (eventType === 'order.paid' && event.payload?.order?.entity) {
      orderId = event.payload.order.entity.id;
      amountPaise = event.payload.order.entity.amount_paid;
    } else if (eventType === 'payment.captured' && event.payload?.payment?.entity) {
      orderId = event.payload.payment.entity.order_id;
      amountPaise = event.payload.payment.entity.amount;
    }

    if (orderId) {
      await prisma.$transaction(async (tx) => {
        let trx = await tx.transaction.findFirst({ where: { referenceId: orderId } });
        if (!trx) {
          // Unknown order, create a record bound to a user is not possible; ignore gracefully
          return;
        }
        const newStatus = (eventType === 'order.paid' || eventType === 'payment.captured') ? 'SUCCESS' : 'FAILED';
        trx = await tx.transaction.update({ where: { id: trx.id }, data: { status: newStatus, meta: event } });
        if (newStatus === 'SUCCESS') {
          await creditWalletForTransaction(tx, trx);
        }
      });
    }

    return res.json({ ok: true });
  } catch (e) {
    return res.status(200).json({ ok: true }); // prevent retries storm
  }
}

export async function stripeWebhook(req, res) {
  try {
    const secret = env.STRIPE_WEBHOOK_SECRET;
    if (!secret) return res.status(500).json({ ok: false, error: 'Webhook secret not configured' });

    const sig = req.headers['stripe-signature'];
    if (!sig) return res.status(400).json({ ok: false, error: 'Missing signature' });

    const payload = req.rawBody || JSON.stringify(req.body || {});

    // Stripe signature format: t=timestamp,v1=signature,... ; signature is HMAC-SHA256 of `${t}.${payload}`
    const parts = String(sig).split(',').reduce((acc, kv) => { const [k, v] = kv.split('='); acc[k] = v; return acc; }, {});
    const signedPayload = `${parts.t}.${payload}`;
    const expected = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');
    if (expected !== parts.v1) return res.status(400).json({ ok: false, error: 'Invalid signature' });

    const event = typeof req.body === 'object' && req.body ? req.body : JSON.parse(payload);
    const type = event.type;

    let referenceId = null;
    if (type === 'payment_intent.succeeded' && event.data?.object) {
      referenceId = event.data.object.id;
    } else if (type === 'charge.succeeded' && event.data?.object?.payment_intent) {
      referenceId = event.data.object.payment_intent;
    }

    if (referenceId) {
      await prisma.$transaction(async (tx) => {
        let trx = await tx.transaction.findFirst({ where: { referenceId } });
        if (!trx) return;
        const newStatus = (type === 'payment_intent.succeeded' || type === 'charge.succeeded') ? 'SUCCESS' : 'FAILED';
        trx = await tx.transaction.update({ where: { id: trx.id }, data: { status: newStatus, meta: event } });
        if (newStatus === 'SUCCESS') {
          await creditWalletForTransaction(tx, trx);
        }
      });
    }

    return res.json({ ok: true });
  } catch (e) {
    return res.status(200).json({ ok: true });
  }
}

