import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import csurf from 'csurf';

import { env } from './config/env.js';
import authRouter from './routes/authRoute.js';
import walletRouter from './routes/walletRoute.js';
import paymentRouter from './routes/paymentRoute.js';
import webhookRouter from './routes/webhookRoute.js';
import adminRouter from './routes/adminRoute.js';
import notificationRouter from './routes/notificationRoute.js';
import adminNotificationRouter from './routes/adminNotificationRoute.js';
import { registerNotificationHandlers } from './services/notificationEvents.js';
import { ensurePlansSeeded } from './services/planService.js';
import { ensureCommissionSettingsSeeded } from './services/commissionService.js';
import mlmRouter from './routes/mlmRoute.js';
import tempClearRouter from './routes/tempClearRoute.js';
// import tempClearRouter from './routes/tempClearRoute.js';
// …



registerNotificationHandlers();

const app = express();
// app.use('/temp', tempClearRouter);
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: env.APP_URL, credentials: true }));
// Capture raw body for webhook signature verification
app.use(express.json({ verify: (req, _res, buf) => { try { req.rawBody = buf.toString('utf8'); } catch (_) {} } }));
app.use(cookieParser());
app.use(xss());
app.use(morgan('dev'));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200
  })
);

app.get('/', (_req, res) => {
  res.json({ status: 'ok', name: env.APP_NAME, message: 'Service alive' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', name: env.APP_NAME, env: env.NODE_ENV });
});

// Seed plans from env at startup (idempotent)
ensurePlansSeeded().catch((e) => {
  console.error('Plan seeding failed:', e?.message || e);
});
ensureCommissionSettingsSeeded().catch((e) => {
  console.error('Commission seeding failed:', e?.message || e);
});

// Optional CSRF protection (enable with CSRF_PROTECTION=true)
if (env.CSRF_PROTECTION) {
  const csrfProtection = csurf({
    cookie: {
      key: env.CSRF_COOKIE_NAME,
      httpOnly: true,
      sameSite: 'lax',
      secure: env.NODE_ENV === 'production'
    }
  });
  app.use(csrfProtection);
  app.get('/csrf', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  });
}

// Mount auth routes
app.use('/auth', authRouter);
app.use('/wallet', walletRouter);
app.use('/payments', paymentRouter);
app.use('/webhooks', webhookRouter);
app.use('/admin', adminRouter);
app.use('/api/notifications', notificationRouter);
app.use('/mlm',mlmRouter);
app.use('/api/admin/notifications', adminNotificationRouter);
app.use(express.json());
// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const payload = {
    ok: false,
    error: err.message || 'Internal Server Error'
  };
  if (env.NODE_ENV !== 'production' && err.stack) {
    payload.stack = err.stack;
  }
  res.status(status).json(payload);
});

const port = Number(env.PORT) || 3000;
app.listen(port, () => {
  console.log(`${env.APP_NAME} listening on port ${port}`);
});
