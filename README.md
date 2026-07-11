# MyBeSix Website

A production-ready Next.js starter for `mybesix.com`.

## Included

- White, responsive public website
- No gradients and no purple palette
- People-search form with responsible-use confirmation
- Information-removal form requiring name, email, and phone
- Separate random 40–90 second processing experiences
- Separate people-search and removal-report ZIP downloads
- Desktop/laptop-only enforcement on both form submissions
- Mobile warning shown after a mobile user completes a form and clicks search
- Optional USDT support card and QR code
- How it works, about, contact, permitted use, privacy, terms, abuse, and removal pages
- Security headers, robots, sitemap, metadata, and responsive navigation

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure USDT support

Copy `.env.example` to `.env.local` and add the official wallet address:

```env
NEXT_PUBLIC_USDT_NETWORK="TRON (TRC20)"
NEXT_PUBLIC_USDT_WALLET_ADDRESS="YOUR_OFFICIAL_WALLET_ADDRESS"
```

Restart the development server after changing environment variables.

## Replace the two test ZIP files

People-search software:

```text
public/download/mybesix-search-tool.zip
```

Information-removal report package:

```text
public/download/mybesix-removal-report.zip
```

Keep the filenames unchanged, or update both `src/lib/site.ts` and `next.config.ts`.

## Desktop-only behavior

Both forms remain visible and fillable on phones. When a mobile user clicks the submit button after entering valid details, the site shows a desktop/laptop-only warning and does not begin the processing sequence. The entered form details remain in place.

## Production notes

- Replace both placeholder ZIP files before launch.
- Have qualified counsel review privacy, permitted-use, terms, and removal language.
- Code-sign distributed Windows executables before public release.
- Scan final ZIP files and publish checksums.
- Use only an official company USDT wallet address.
