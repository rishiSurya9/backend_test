import dotenv from 'dotenv';
dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  APP_NAME: process.env.APP_NAME || 'MLM Auth',
  APP_URL: process.env.APP_URL || 'http://localhost:3000',
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'change-me-please',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  JWT_REAUTH_EXPIRES_IN: process.env.JWT_REAUTH_EXPIRES_IN || '10m',
  CSRF_COOKIE_NAME: process.env.CSRF_COOKIE_NAME || '_csrf',
  CSRF_PROTECTION: String(process.env.CSRF_PROTECTION || 'false') === 'true',
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_FROM_NUMBER: process.env.TWILIO_FROM_NUMBER,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: Number(process.env.SMTP_PORT || 587),
  SMTP_SECURE: String(process.env.SMTP_SECURE || 'false') === 'true',
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL || 'no-reply@example.com'
  ,
  // Payments
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  MIN_WITHDRAW_AMOUNT: Number(process.env.MIN_WITHDRAW_AMOUNT || 100),
  WITHDRAW_ADMIN_THRESHOLD: Number(process.env.WITHDRAW_ADMIN_THRESHOLD || 5000)
  ,
  // Admin guards
  ADMIN_USER_IDS: process.env.ADMIN_USER_IDS,
  ADMIN_EMAILS: process.env.ADMIN_EMAILS
};
