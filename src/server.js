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

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: env.APP_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(xss());
app.use(morgan('dev'));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200
  })
);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', name: env.APP_NAME, env: env.NODE_ENV });
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
