# Project: Mlm_Backend

## End-point: http://localhost:5000/health
checkup
### Method: GET
>```
>http://localhost:5000/health
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/signup
signup
### Method: POST
>```
>http://localhost:5000/auth/signup
>```
### Body (**raw**)

```json
{"username":"rhi","email":"rishisurya1320@gmail.com","phone":"+919600421982","password":"StrongPiis987!"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/verify-phone-otp
verify Otp
### Method: POST
>```
>http://localhost:5000/auth/verify-phone-otp
>```
### Body (**raw**)

```json
 {"phone":"+919600421982","code":"395658"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/login
login
### Method: POST
>```
>http://localhost:5000/auth/login
>```
### Body (**raw**)

```json
{"identifier":"+919600421622","password":"StrongPass987!"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/set-pin
Set 4-digit Transaction pin
### Method: POST
>```
>http://localhost:5000/auth/set-pin
>```
### Body (**raw**)

```json
 {"pin":"9887"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/login
Login
### Method: POST
>```
>http://localhost:5000/auth/login
>```
### Body (**raw**)

```json
{"identifier":"rishisurya1320@gmail.com","password":"StrongPiis987!"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/login/request-otp
login request otp
### Method: POST
>```
>http://localhost:5000/auth/login/request-otp
>```
### Body (**raw**)

```json
{"identifier":"rishisurya1320@gmail.com"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/verify-otp
verify login using otp
### Method: POST
>```
>http://localhost:5000/auth/verify-otp
>```
### Body (**raw**)

```json
{"jhgj":"jhjhjh","type":"EMAIL","identifier":"rishisurya1320@gmail.com","code":"402139"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/forgot-password/request-otp
request otp for forgot password

### Method: POST
>```
>http://localhost:5000/auth/forgot-password/request-otp
>```
### Body (**raw**)

```json
{"identifier":"rishisurya1320@gmail.com"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/forgot-password/reset
Change password
### Method: POST
>```
>http://localhost:5000/auth/forgot-password/reset
>```
### Body (**raw**)

```json
{"type":"EMAIL","identifier":"rishisurya2024@gmail.com","code":"395741","newPassword":"ksjhiuSDF4839@"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/forgot-password/reset
### Method: POST
>```
>http://localhost:5000/auth/forgot-password/reset
>```
### Body (**raw**)

```json
{"identifier":"rishisurya1320@gmail.com","code":"614804","newPassword":"ksjhiuSDF4839@"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/forgot-pin/request-otp
Request otp for pin reset
### Method: POST
>```
>http://localhost:5000/auth/forgot-pin/request-otp
>```
### Body (**raw**)

```json
{"identifier":"+919600421982"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/forgot-pin/reset
Change pin
### Method: POST
>```
>http://localhost:5000/auth/forgot-pin/reset
>```
### Body (**raw**)

```json
{"identifier":"+919600421982","code":"876280","newPin":"0986"}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: http://localhost:5000/auth/logout
logout
### Method: POST
>```
>http://localhost:5000/auth/logout
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
## Wallet & Payments

- Auth uses the HTTP-only `access_token` cookie that login/OTP endpoints set. Ensure your API client sends cookies (`credentials: 'include'` in fetch/Axios `withCredentials: true`).

- GET `http://localhost:5000/wallet` — Get wallet balances (auth)
- POST `http://localhost:5000/wallet/transfer` — Referral → Main
  - Body: `{ "amount": 50 }`
- (Removed) Wallet-level withdraw route deprecated; use payments withdraw.
- GET `http://localhost:5000/wallet/transactions` — Transaction history (auth)

- POST `http://localhost:5000/payments/add-funds/order` — Create Razorpay order (live REST call)
  - Body: `{ "amount": 500, "currency": "INR" }`
  - Returns Razorpay order payload; `/webhooks/razorpay` credits wallet on success.

- POST `http://localhost:5000/payments/withdraw` — Withdraw from main wallet (Razorpay payouts semantics)
  - Body (UPI): `{ "amount": 1200, "method": "UPI", "details": { "vpa": "user@bank", "contact": { "name": "John", "email": "john@example.com", "phone": "+9199..." } } }`
  - Body (BANK): `{ "amount": 1200, "method": "BANK", "details": { "ifsc": "HDFC0001", "accountNumber": "1234567890", "accountName": "John Doe", "mode": "IMPS", "contact": { ... } } }`
  - Enforces min (₹100 default). Amounts above `WITHDRAW_ADMIN_THRESHOLD` stay pending until an admin approves (which triggers the Razorpay payout).
  - Requires Razorpay payout creds (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_ACCOUNT_NUMBER`).
  - Optional: pass existing Razorpay identifiers (`details.contactId`, `details.fundAccountId`) to reuse stored payout destinations.

- GET `http://localhost:5000/payments/transactions` - List payment transactions (add-funds + withdrawals)
  - Query: `?limit=20&cursor=<id>&type=ADD_FUNDS|WITHDRAW&status=PENDING|SUCCESS|FAILED`

- GET `http://localhost:5000/payments/plans` - List active token sale plans with computed INR price and token quantity.

- POST `http://localhost:5000/payments/token/purchase` - Buy tokens using main wallet balance (alias: `/payments/token/order`).
  - Body: `{ "planId": "<plan-id>" }` or `{ "planName": "Starter" }`
  - Debits main balance, credits token balance, creates `Transaction`, `TokenPurchase`, and PDF invoice. Response includes `{ tokenPurchaseId, transactionId, tokens, amountInr, invoiceId, wallet }`.

- GET `http://localhost:5000/payments/token/purchases` - Paginated token purchase history for the authenticated user.
  - Query: `?limit=20&cursor=<id>`
  - Returns plan info, tokens, prices, transaction summary, and invoice metadata.

- GET `http://localhost:5000/payments/token/purchases/:id/invoice` - Download the PDF invoice for a specific purchase (auth + ownership required).

- Admin endpoints
  - POST `http://localhost:5000/payments/withdrawals/:id/approve` — mark pending withdrawal SUCCESS (requires admin)
  - POST `http://localhost:5000/payments/withdrawals/:id/reject` — mark pending withdrawal FAILED and refund (requires admin)
  - Configure admins via `ADMIN_USER_IDS` and/or `ADMIN_EMAILS` (comma-separated)

- POST `http://localhost:5000/webhooks/razorpay` — Razorpay webhook (configure secret)
- POST `http://localhost:5000/webhooks/stripe` — Stripe webhook (configure secret)

Environment keys in `.env`:
- `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, `RAZORPAY_ACCOUNT_NUMBER`
- `STRIPE_WEBHOOK_SECRET` (only for webhook verification; payments use Razorpay)
- `MIN_WITHDRAW_AMOUNT` (default 100)
- `WITHDRAW_ADMIN_THRESHOLD` (default 5000)
- `USD_INR_RATE`, `TOKEN_PRICE_USD`, `PLAN_STARTER_USD`, `PLAN_GROWTH_USD`, `PLAN_PRO_USD`, `PLAN_ELITE_USD`
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
