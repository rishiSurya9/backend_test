import { Router } from 'express';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { createAddFundsOrder, withdrawFunds, paymentTransactions, approveWithdrawal, rejectWithdrawal } from '../controller/paymentController.js';

const router = Router();

router.post('/add-funds/order', requireAuth, createAddFundsOrder);
router.post('/withdraw', requireAuth, withdrawFunds);
router.get('/transactions', requireAuth, paymentTransactions);
router.post('/withdrawals/:id/approve', requireAuth, requireAdmin, approveWithdrawal);
router.post('/withdrawals/:id/reject', requireAuth, requireAdmin, rejectWithdrawal);

export default router;
