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

- GET `http://localhost:5000/wallet` — Get wallet balances (auth)
- POST `http://localhost:5000/wallet/transfer` — Referral → Main
  - Body: `{ "amount": 50 }`
- (Removed) Wallet-level withdraw route deprecated; use payments withdraw.
- GET `http://localhost:5000/wallet/transactions` — Transaction history (auth)

- POST `http://localhost:5000/payments/add-funds/order` — Create add-funds order (Razorpay only)
  - Body: `{ "amount": 500, "currency": "INR" }`
  - Returns order/id; webhook will credit on success.

- POST `http://localhost:5000/payments/withdraw` — Withdraw from main wallet (Razorpay payouts semantics)
  - Body: `{ "amount": 1200, "method": "UPI"|"BANK", "details": { ... } }`
  - Enforces min (₹100 default) and admin approval if amount > `WITHDRAW_ADMIN_THRESHOLD`.

- GET `http://localhost:5000/payments/transactions` — List payment transactions (add-funds + withdrawals)
  - Query: `?limit=20&cursor=<id>&type=ADD_FUNDS|WITHDRAW&status=PENDING|SUCCESS|FAILED`

- Admin endpoints
  - POST `http://localhost:5000/payments/withdrawals/:id/approve` — mark pending withdrawal SUCCESS (requires admin)
  - POST `http://localhost:5000/payments/withdrawals/:id/reject` — mark pending withdrawal FAILED and refund (requires admin)
  - Configure admins via `ADMIN_USER_IDS` and/or `ADMIN_EMAILS` (comma-separated)

- POST `http://localhost:5000/webhooks/razorpay` — Razorpay webhook (configure secret)
- POST `http://localhost:5000/webhooks/stripe` — Stripe webhook (configure secret)

Environment keys in `.env`:
- `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`
- `STRIPE_WEBHOOK_SECRET` (only for webhook verification; payments use Razorpay)
- `MIN_WITHDRAW_AMOUNT` (default 100)
- `WITHDRAW_ADMIN_THRESHOLD` (default 5000)
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
