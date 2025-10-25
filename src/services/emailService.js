import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

function buildTransport() {
  if (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS }
    });
  }
  return null;
}

const transport = buildTransport();

export async function sendOtpEmail(email, code) {
  const subject = `${env.APP_NAME} - Your verification code`;
  const text = `Your verification code is: ${code}`;
  if (transport) {
    await transport.sendMail({
      from: env.SMTP_FROM_EMAIL,
      to: email,
      subject,
      text
    });
    return { id: 'email-sent' };
  }
  console.log(`[EMAIL:DEV] to=${email} subject="${subject}" text="${text}"`);
  return { id: 'dev-email' };
}

