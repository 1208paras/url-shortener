# Paras.ly – URL Shortener

A simple bit.ly-style URL shortener where users can create short links, track click counts, and manage their URLs.

**Live:** https://url-shortener-silk-kappa.vercel.app  

## Tech Stack

- **Frontend & Backend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL on Neon
- **Hosting:** Vercel
- **Language:** TypeScript / React

## Features

- Shorten any valid URL into a compact short link
- Redirect from short link to original URL
- Track number of clicks for each link
- See list of all links with:
  - Short URL
  - Original URL
  - Click count
  - Created time
- Delete links from the dashboard
- Responsive, dark themed UI

## Architecture

- Next.js App Router with:
  - `app/page.tsx` – main dashboard UI
  - `app/[code]/route.ts` – dynamic redirect route (`/{short_code}`)
  - `app/api/links/route.ts` – REST API:
    - `POST /api/links` → create a short link
    - `GET /api/links` → list all links
  - `app/api/links/[id]/route.ts`:
    - `DELETE /api/links/:id` → delete a link
- Database access via a tiny wrapper in `lib/db.ts` using `pg` and `DATABASE_URL` env variable.

### Database schema

```sql
CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  short_code VARCHAR(16) UNIQUE NOT NULL,
  original_url TEXT NOT NULL,
  click_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_clicked_at TIMESTAMPTZ,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);
