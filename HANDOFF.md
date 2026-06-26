# LAMAR Website — Handover Notes

This is the full source code. Full technical detail (admin overview, scripts,
etc.) is in `README.md` — this file is just the quick-start for getting it
live under your own accounts.

## 1. Accounts you'll need (all have free tiers)

| Service | What it's for | Sign up |
| --- | --- | --- |
| Hosting (any host that runs Node.js) | Running the site — Vercel, Railway, Render, your own server, etc. | your pick |
| Neon (or any Postgres host) | Database | neon.tech |
| Cloudinary | Project photo uploads in the admin | cloudinary.com |
| Resend | Contact-form email notifications | resend.com — verify your own domain here |

## 2. Set up your environment variables

Copy `.env.example` → `.env.local` and fill it in. Every value is explained
with a comment in that file. Two you create yourself rather than copy from a
dashboard:

- `NEXTAUTH_SECRET` — run `openssl rand -base64 32`, paste the output
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_NAME` — your own first admin login

## 3. First-time setup (run once, locally)

```bash
npm install
npx prisma db push     # creates the database tables
npx prisma db seed     # creates your admin account
npm run dev             # http://localhost:3000  and  /admin
```

## 4. Going live

This runs on any host that supports Node.js — pick whichever you prefer.
On that host:

1. Set the same environment variables there as in `.env.local`.
2. Build with `npm run build`, run with `npm run start`.
3. Run `npx prisma db push` and `npx prisma db seed` once against your
   **production** database (easiest done locally by pointing `DATABASE_URL`
   / `DATABASE_URL_UNPOOLED` in `.env.local` at the production database).

## 5. After it's live

- Log into `/admin` and change your password.
- Send a test enquiry through the contact form to confirm the email arrives.

Questions or anything unclear — just ask.
