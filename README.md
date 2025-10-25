# MLM Auth API

Minimal authentication API scaffold with OTP (SMS/Email) and TOTP (2FA) support using Express and Prisma.

## Prerequisites
- Node.js 18+
- MySQL (or compatible) and a valid `DATABASE_URL`

## Setup
1. Install deps:
   - `npm install`
2. Configure environment:
   - Copy `.env.example` to `.env` and fill values (especially `DATABASE_URL` and `JWT_SECRET`).
3. Generate Prisma client:
   - `npm run prisma:generate`
4. Run migrations (creates tables):
   - `npm run prisma:migrate`
5. Start the server:
   - Dev: `npm run dev`
   - Prod: `npm start`

## Endpoints (summary)
- `GET /health` — health check
- `POST /auth/request-otp` — body: `{ type: 'EMAIL'|'PHONE', identifier: string }`
- `POST /auth/verify-otp` — body: `{ type, identifier, code }` → returns JWT
- `POST /auth/signup` — body: `{ email?, phone?, password?, pin? }` → returns JWT
- `POST /auth/login` — body: `{ identifier, password?, pin?, totpToken? }` → returns JWT
- `POST /auth/totp/setup` — auth required; returns `otpauthUrl` and `qrDataUrl`
- `POST /auth/totp/verify` — auth required; body: `{ token }`

Notes:
- In development, email/SMS sending falls back to console logs if providers are not configured.
- If a user has TOTP enabled, `totpToken` is required on `/auth/login`.

## Project Structure
- `src/server.js` — Express app and routes
- `src/config/env.js` — environment loading
- `src/prisma/client.js` — Prisma client init
- `src/services/*` — email, SMS and TOTP helpers
- `src/utils/crypto.js` — random digits, password/OTP hashing
- `src/utils/jwt.js` — sign/verify JWT
- `src/middleware/auth.js` — JWT auth middleware
- `prisma/schema.prisma` — database schema

