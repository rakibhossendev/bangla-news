<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — dev server (Next 16 App Router)
- `npm run lint` — ESLint flat config (`eslint-config-next`). Exits 0; currently reports 5 pre-existing unused-var warnings — warnings don't fail the build.
- `npx tsc --noEmit` — typecheck (there is **no** `typecheck` script in package.json)
- `npm run build` — production build
- **No test suite, no CI workflows, no pre-commit hooks exist.** Don't hunt for `npm test` or invent tests.

Verify changes with: `npm run lint && npx tsc --noEmit`

## Architecture

- Single Next.js app in `src/` (not a monorepo). Routes: `/`, `/article/[articleId]`, `/categories/[categoriesId]`, route group `(auth)` → `/sign-in`, `/sign-up`.
- **All news content is fetched at request time from a hardcoded external API**: `https://news-api-v2.vercel.app` (in `src/app/page.tsx`, `article/[articleId]/page.tsx`, `categories/[categoriesId]/page.tsx`, `components/Navbar/Navbar.tsx`, `components/Navbar/MarqueText.tsx`). There is no local news DB and no caching configured — if content looks wrong, check the API response shape against the types in `src/app/TypeScript/`.
- **MongoDB holds auth + view counts, nothing else**: better-auth + `@better-auth/mongo-adapter`, db name `bangla-news` (`src/lib/auth.ts`, shared client in `src/lib/mongo.ts`). Auth handler: `src/app/api/auth/[...all]/route.ts`; browser client: `src/lib/auth-client.ts`. View counts live in the `article_views` collection via `src/lib/views.ts` — incremented with `after()` in the article page, batch-read once per page (`getViews`) and passed to cards as a `views` map. Both operations swallow DB errors (log + return 0) so pages still render if Mongo is down.
- The home page picks sections **positionally** (`newsData[0]`, `[3]`, `[5]`… in `src/app/page.tsx`) — section order from the API is assumed, not keyed by name. Don't reorder those indexes casually.

## Environment

`.env` is gitignored and required for auth. Names are read verbatim in `src/lib/auth.ts`; several are misspelled **on purpose** (the code expects the typos — do not "fix" them):

- `BETTER_AUTH_MONGODB_URL`, `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`
- `BETTER_AUTH_GOOGLE_CLIENT_ID`, `BETTER_AUTH_GOOGLE_SECERET_KEY` (sic)
- `BETTER_AUTH_GITHUB_AUTH_CLINET_ID` (sic), `BETTER_AUTH_GITHUB_AUTH_SECRET_KEY`

Next.js only inlines `NEXT_PUBLIC_*` vars into client bundles: `src/lib/auth-client.ts` reads `BETTER_AUTH_URL` client-side, so it is `undefined` in the browser and better-auth falls back to same-origin. That's the intended behavior — don't expose it as `NEXT_PUBLIC_` without a reason.

## Conventions & quirks

- Path alias `@/*` → `./src/*` (tsconfig).
- Response types live in `src/app/TypeScript/` — a plain folder inside `app/` (not a route), imported as `@/app/TypeScript/...`.
- Next 16: `params` and `searchParams` are Promises — `await` them in server components (see existing pages).
- Tailwind v4, CSS-first: `@import "tailwindcss"` in `src/app/globals.css`; there is no `tailwind.config.*`. PostCSS via `@tailwindcss/postcss`.
- `next.config.ts` allows **all** remote https images, so `next/image` works with any API host.
- UI copy is Bengali; dates formatted `bn-BD` + `Asia/Dhaka`. Keep new user-facing strings in Bengali.
- Components under `src/app/components/` add `'use client'` only when they need hooks/handlers (`AuthButton`, `NavCategories`); data fetching stays in server components (`Navbar` fetches categories server-side). Keep that split.
