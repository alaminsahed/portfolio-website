# Next.js 14 → 16 Upgrade + Mobile/Desktop Optimization

## Context

The portfolio site (`/home/alamin/Desktop/web-dev/portfolio-website`, single route `/`, App Router) runs Next 14.2 / React 18 / Tailwind 3 / TS target `es5`. Beyond staying current, the biggest concrete problem found during research: `app/(homePage)/page.tsx` is a `"use client"` component that wraps all 13 section components in `React.lazy()` with **no `<Suspense>` boundary anywhere** — meaning a ~90%-static one-page site is fully client-rendered, hurting first paint/LCP especially on mobile. Fixing that (server-render static sections, keep only genuinely interactive pieces client-side) is the highest-leverage change here, ahead of the version bumps themselves. Secondary wins: modern TS target, Tailwind v4's smaller/faster engine, dropping 3 dead dependencies, real SEO metadata files, and removing `react-parallax` (continuous scroll-linked JS, barely visible on mobile, real battery/jank cost).

Confirmed via grep: **no usage of `cookies()`, `headers()`, `searchParams`, or dynamic route `params`** anywhere — so the Next 15/16 breaking change around these becoming `Promise`-based doesn't apply. This de-risks the upgrade significantly.

Live domain confirmed from README: `https://alamin-sahed-portfolio.vercel.app/` — use this for `metadataBase`/sitemap/robots instead of a placeholder. Manifest will stay minimal (favicon.ico only, no new icon assets generated).

### Rendering strategy: SSG shell + CSR islands, no SSR/ISR

The single route has zero external/per-request data (no CMS, no DB — all content is `utils/data/*.ts`), so the correct rendering mode is **static generation (SSG)**: Next prerenders the page to static HTML at build time and serves it with no server work per request.
- **SSR** is not used — there's no per-request data that would justify recomputing identical output on every hit.
- **ISR** is not used — ISR exists to revalidate content that changes on the server over time (CMS edits, DB rows); nothing here changes outside of a redeploy.
- **CSR** is scoped to the interactive islands only (Navbar, ThemeChangeBtn, About tabs, Experience/Projects modals, Recommendation carousel, Contact form, BackToTop) via `"use client"`, hydrated on top of the static shell — this is exactly what the Phase 5 server/client split produces.
- Verify after `npm run build`: the `/` route should be listed with the **○ (Static)** marker in the build output route summary, confirming full prerendering.



## Phase 0 — Baseline safety
- `git status` clean check, work on branch `upgrade/next-16`.
- `.nvmrc`: `v16.14.0` → `20.9.0` (matches Next 16 minimum; local Node is 22.16.0). Bump `package.json` `engines.node` to `>=20.9.0`.

## Phase 1 — Dependency upgrade via codemods
1. `npx @next/codemod@canary upgrade latest` — bumps `next`, `react`, `react-dom`, `eslint-config-next`.
2. Verify/fix manually in `package.json`: `next@^16`, `react`/`react-dom@^19`, `@types/react`/`@types/react-dom@^19`, `eslint-config-next` matching.
3. If not auto-migrated, convert `.eslintrc.json` → `eslint.config.mjs` (flat config, `extends: "next/core-web-vitals"`), delete `.eslintrc.json`.
4. `npm install`, then `npx next build` once to surface compile errors before any refactor. Fix only what's broken.
5. `npm audit fix` for any transitive vulnerabilities pulled in by the upgrade.

## Phase 2 — `next.config.js`
- Keep existing `images.remotePatterns` (github.com).
- Add `images.formats: ["image/avif", "image/webp"]`.
- Add security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) via the `headers()` config.
- No speculative `experimental` flags — only add if Phase 8 bundle inspection justifies it.

## Phase 3 — `tsconfig.json`
- `"target": "es5"` → `"target": "es2017"`. Re-run `tsc --noEmit` to confirm clean.

## Phase 4 — Tailwind v3 → v4 migration
Files: `tailwind.config.js`, `postcss.config.js`, `app/globals.css`, `package.json`
1. `npx @tailwindcss/upgrade@latest`.
2. Verify manually: `app/globals.css` uses `@import "tailwindcss";` (not the old `@tailwind base/components/utilities`); `theme.extend.fontFamily.sans` and `backgroundImage` gradients migrated into an `@theme` block; existing `@layer base { body {...} }` still applies (no `@apply` usage found, so no further porting needed there).
3. `darkMode: 'class'` → add v4's custom dark variant in `globals.css` (`@custom-variant dark (&:where(.dark, .dark *));`) since `next-themes` toggles `class="dark"` on `<html>`.
4. Drop `minify: true` from `tailwind.config.js` if not already removed; delete the config file only if the tool leaves it empty.
5. Remove `autoprefixer` from `package.json` (v4 bundles it) if the upgrade tool didn't already.
6. `npm run dev`, visually confirm dark/light toggle, gradients, spacing before moving on.

## Phase 5 — Component-level Server/Client refactor

**`app/(homePage)/page.tsx`**: remove `"use client"` and all `React.lazy()` calls; use plain static `import` for all 13 sections (always render, no conditional — static imports let this fully prerender). No `<Suspense>` needed since no async data fetching is introduced.

**Client vs Server decisions:**

| Component | Decision | Why |
|---|---|---|
| `Navbar.tsx` | stays client | scroll state, mobile menu, `react-scroll` |
| `HeaderMain.tsx` | stays client, but drop `react-parallax` | copy-button state + `typewriter-effect` still need client; parallax removed (see below) |
| `ImpactNumbers.tsx` | stays client | scroll-triggered count-up (`useState`/`useEffect`/`useRef`) |
| `About.tsx` | stays client as-is | `useState` tab index gates almost the whole render tree; splitting into server shell + client island isn't worth it for one component on a one-route site |
| `Skills.tsx` | **Server Component** | no hooks, pure static map — just remove from old lazy-import list |
| `Experience.tsx` | stays client | modal + per-entry accordion + toggles threaded throughout |
| `Recommendation.tsx` | stays client | carousel auto-rotation |
| `ThinkingProcess.tsx` | stays client | scroll-in-view animation |
| `Projects.tsx` | stays client | category tab + modal state |
| `Blogs.tsx` | **Server Component** | no hooks, static map |
| `Collaborate.tsx` | stays client | `react-scroll` `<Link>` |
| `Contact.tsx` | stays client | `react-hook-form`/`yup`/`@formspree/react` |
| `Footer.tsx` | **convert to Server Component** | has `"use client"` but zero hooks — just delete the directive line |
| `ui/BackToTop.tsx`, `ui/ThemeChangeBtn.tsx` | stay client | scroll listener / `useTheme()` |
| `ui/ImageSlider.tsx`, `ui/ProjectModal.tsx` | stay client (rendered only from client parents) | interval state / click handlers |
| `ui/SkillTags.tsx`, `ui/BlogCardVariants.tsx` | already server-safe, no change needed | purely presentational |

**`HeaderMain.tsx` hero**: remove `react-parallax` entirely. Replace `<Parallax>/<Background>` with a `relative` wrapper containing a `next/image` using `fill`, `priority` (it's the LCP element), `sizes="100vw"`; overlay content via `absolute inset-0 flex flex-col justify-center items-center`, replacing the current `mt-96` magic-number offset. Also fixes the current mismatched `width={100} height={600}` props.

## Phase 6 — SEO / metadata files
- `app/sitemap.ts` — single entry for `/`, using `https://alamin-sahed-portfolio.vercel.app`.
- `app/robots.ts` — allow all, point to `/sitemap.xml`.
- `app/manifest.ts` — minimal, `favicon.ico` only (per user decision — no new icon assets).
- `app/layout.tsx` `metadata` — add `metadataBase`, `openGraph`, `twitter`, `icons`, `alternates.canonical`, reusing `public/images/logo.png` as the share image.

## Phase 7 — Dead dependency removal
- Remove `@emotion/react`, `@emotion/styled`, `react-reveal` (zero usage confirmed).
- Find the single import site of legacy `react-fontawesome@1.7.1`, switch it to `@fortawesome/react-fontawesome`, then remove the old package.
- `npm install` to refresh lockfile.

## Phase 8 — Image/video/font polish
- `About.tsx` `<video>`: add `preload="metadata"` and `playsInline` (missing today — likely blocks iOS Safari autoplay) alongside existing `muted autoPlay loop`.
- `HeaderMain.tsx` hero image: `priority` + `fill` (done in Phase 5).
- Font loading (`next/font/google`, `display: swap`) already correct — no change.
- Spot-check `sizes` on other `next/image` usages (Navbar logo, Blogs, Skills, Recommendation, ImageSlider) — adjust only if obviously missing.
- Leave `logo.png` as PNG (no lossless conversion source available) — not in scope.

## Phase 9 — Verification
1. `npm run lint` clean under new `eslint-config-next` 16.
2. `npm run build` — zero errors; compare `/` route's First Load JS before/after (expect a real drop from server-componentizing Skills/Blogs/Footer + removing parallax).
3. `npm run start`, manually check:
   - Content renders with JS disabled (proves SSR actually works now).
   - Dark/light toggle, no flash-of-wrong-theme.
   - Mobile widths (~375px, ~768px): Navbar menu, About tabs, Experience accordions, Projects modal, Contact submit, BackToTop.
   - Desktop (1440px+): hero without parallax, Recommendation carousel, ThinkingProcess animation.
   - Video `playsInline` fix on iOS Safari/BrowserStack if available.
4. Lighthouse (mobile + desktop) against the production build vs. a pre-upgrade baseline — expect LCP/TBT improvement.
5. `git diff --stat` — confirm `utils/data/*.ts` untouched, no unrelated files changed.

## Files touched (summary)
`package.json`, `package-lock.json`, `.nvmrc`, `next.config.js`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `app/globals.css`, `.eslintrc.json`→`eslint.config.mjs`, `app/(homePage)/page.tsx`, `app/components/Footer.tsx`, `app/components/HeaderMain.tsx`, `app/layout.tsx`, new `app/sitemap.ts` / `app/robots.ts` / `app/manifest.ts`, one file importing legacy `react-fontawesome`.

## Progress log
- Phase 0: done (branch `upgrade/next-16`, `.nvmrc`/`engines` bumped).
- Phase 1: done. `eslint-plugin-react` 7.37.5 (pulled in by `eslint-config-next` 16.3.0) is incompatible with ESLint 10's flat-config context API (`react/display-name` threw `contextOrFilename.getFilename is not a function`) — resolved by pinning `eslint` to `9.39.5` (still satisfies `eslint-config-next`'s `>=9.0.0` peer range). `eslint.config.mjs` created (flat config via `eslint-config-next/core-web-vitals` export), `.eslintrc.json` deleted, `lint` script changed to `eslint .` (`next lint` is deprecated in v16). `npm audit fix` → 0 vulnerabilities. Fixed one real lint finding: `ThemeChangeBtn.tsx`'s mount-detection effect (standard next-themes hydration-mismatch guard) is flagged by the new `react-hooks/set-state-in-effect` rule — suppressed with a targeted, commented `eslint-disable-next-line` since it's an intentional, correct pattern, not a bug.
- Phase 2: done. `next.config.js` now sets `images.formats: ["image/avif", "image/webp"]`, adds a `headers()` block applying CSP + `X-Frame-Options` + `X-Content-Type-Options` + `Referrer-Policy` + `Permissions-Policy` + `Strict-Transport-Security` to all routes, and pins `turbopack.root` to the project dir (silences a false-positive workspace-root warning caused by an unrelated `package-lock.json` in the parent folder). CSP is scoped from an actual audit of external calls in the codebase: `connect-src`/`form-action` allow `https://formspree.io` (the only runtime fetch, from the Contact form), `img-src` allows `https://github.com` (matches existing `images.remotePatterns`, currently unused but reserved), everything else external in the app is plain `<a href>` navigation (LinkedIn, GitHub, Hashnode, certificate links) which CSP doesn't gate. `script-src`/`style-src` need `'unsafe-inline'` because headers-based CSP (no middleware/nonce) can't cover Next's inline hydration bootstrap or React's `style=""` attributes (used once, in `About.tsx`'s `animationDelay`) — a nonce-based CSP would require middleware, which conflicts with keeping this a pure static/SSG build. Verified via `next build` (clean, `/` still `○ (Static)`) and `next start` + `curl -I` (all headers present, `x-nextjs-prerender: 1` confirms the static page is what's served).

### Rendering-strategy verification
`next build` output confirms the intended strategy is in effect:
```
Route (app)
┌ ○ /
└ ○ /_not-found
○  (Static)  prerendered as static content
```
No SSR, no ISR (no revalidate config anywhere) — this holds automatically as long as Phase 5 keeps interactivity scoped to `"use client"` islands and no server-side data fetching (`fetch`, `cookies()`, `headers()` in a Server Component, DB calls) is introduced.

- Phase 3: done. `tsconfig.json` target `es5` → `es2017`; `tsc --noEmit` clean. (Next 16's build also made two mandatory changes on its own: `jsx: "preserve"` → `"react-jsx"`, and added `.next/dev/types/**/*.ts` to `include` — both required for the React automatic runtime / Turbopack, left as-is.)
- Phase 4: done. Ran `npx @tailwindcss/upgrade@latest --force` (git tree was mid-upgrade, not clean — used `--force` to bypass the tool's own dirty-tree guard, not a git operation). Result: `tailwindcss@^4.3.3` + `@tailwindcss/postcss` installed, `autoprefixer` removed automatically; `postcss.config.js` now just points at `@tailwindcss/postcss`; `app/globals.css` uses `@import 'tailwindcss';` plus `@config '../tailwind.config.js';` (the tool couldn't auto-convert the JS config's `theme.extend` into a CSS `@theme` block, so it kept `tailwind.config.js` alive via the v4 compat `@config` directive rather than leaving anything broken); a new compat block pins default border-color back to `currentcolor` (v4 changed the default) so nothing shifts visually. Manually removed the now-unneeded `minify: true` from `tailwind.config.js`. Verified `darkMode: 'class'` survived correctly by inspecting the compiled CSS output directly — `dark:` utilities compile to `:is(.dark *)` selectors, not a `prefers-color-scheme` media query, so `next-themes`' class-toggle approach still works. No `@apply` usage anywhere, so nothing else needed manual porting. `next build` and `eslint .` both clean afterward.
  - **Not done**: a real browser visual check (dark/light toggle, gradients, spacing) — no `chromium-cli` or Playwright available in this environment. Structural verification (compiled CSS, clean build) stands in for it; recommend eyeballing `npm run dev` once locally before treating this phase as fully closed.
- Phase 5: done. `app/(homePage)/page.tsx` is now a Server Component with static imports (no `React.lazy`, no `"use client"`) — matches the SSG-shell strategy above. `Footer.tsx`'s `"use client"` removed (zero hooks). `Skills.tsx`/`Blogs.tsx` were already directive-free Server Components, confirmed by direct read, no change needed.
  - **Bug found and fixed**: `Projects.tsx` uses `useState` (category tab + modal) but had **no** `"use client"` directive — it only worked before because the old `page.tsx` wrapped the whole tree in a client boundary via `React.lazy`, silently making every lazy-loaded child a client component regardless of its own directive. Once `page.tsx` became a real Server Component, this would have broken (or been caught by the build/type-check). Added the missing directive.
  - `HeaderMain.tsx`: removed `react-parallax` entirely (confirmed zero remaining imports repo-wide — safe to drop from `package.json` in Phase 7). Replaced `<Parallax>/<Background>` with a `relative h-svh` wrapper containing a `next/image` using `fill priority sizes="100vw"` (was `width={100} height={600}` — a mismatched, non-functional sizing before), content overlaid via `absolute inset-0 flex flex-col justify-center items-center` (replaces the old `mt-96` magic-number offset). Dropped the dead `custom-bg` class (no CSS rule referenced it anywhere). Re-indented the moved JSX block since it inherited stale nesting depth.
  - Verified via `next build` (clean, still `○ (Static)`) and `eslint .` (clean).
- Phase 6: done. Added `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` (all use the Next file-based metadata API, all statically generated — confirmed in `next build` output as `○ /manifest.webmanifest`, `○ /robots.txt`, `○ /sitemap.xml`). Domain used: `https://alamin-sahed-portfolio.vercel.app` (from the README's `[Live]` link, not a placeholder). Manifest kept minimal per earlier decision — only references the existing `app/favicon.ico`, no new icon assets generated. `app/layout.tsx` `metadata` expanded with `metadataBase`, `alternates.canonical`, `icons`, `openGraph`, and `twitter`, reusing `public/images/logo.png` (200×200) as the share image. Verified output content directly from the build artifacts (`sitemap.xml`, `robots.txt`, `manifest.webmanifest` all correct). `eslint .` clean.
- Phase 7: done. Re-verified zero usage of all 4 candidates via repo-wide grep before removing anything (not just trusting the original research): `@emotion/react`, `@emotion/styled`, `react-reveal` — zero hits anywhere. `react-fontawesome` (legacy standalone package) — zero import sites; the only FontAwesome import in the codebase (`HeaderMain.tsx`) already uses the correct `@fortawesome/react-fontawesome`, so no import needed fixing, just the dead package removal. Also removed `react-parallax` from `package.json` here (already unused as of Phase 5's `HeaderMain.tsx` rewrite). `npm install` → 32 packages removed, 0 vulnerabilities. `next build` (still static), `eslint .`, and `tsc --noEmit` all clean afterward.
- Phase 8: done. `About.tsx`'s avatar `<video>` gets `playsInline` (was missing — blocks autoplay on iOS Safari, a real mobile bug) and `preload="metadata"` alongside the existing `muted autoPlay loop`. `HeaderMain.tsx`'s hero image `priority`/`fill`/`sizes` was already done in Phase 5. Font loading was already correct (`next/font/google`, `display: swap`) — no change. Spot-checked every other `next/image` usage (Navbar logo, Blogs, Skills, Recommendation, ImageSlider) — all use fixed `width`/`height`, not `fill`, so `sizes` doesn't apply to them; nothing to change. `logo.png` left as PNG (no lossless conversion source available, not in scope). `next build` and `eslint .` clean.
- Phase 9: done. Full pass — `eslint .`, `tsc --noEmit`, `npm audit` all clean (0 vulnerabilities); `next build` produces `/`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` all `○ (Static)`. Started the production build with `next start` and drove it with `curl` (no browser tooling available in this environment — see Phase 4's note): confirmed the homepage's actual copy ("I am Md. Al-Amin Sahed", "About Me", "My Stack") is present in the raw server-rendered HTML — this is the direct fix for the original bug (fully client-rendered blank shell, no `<Suspense>`); confirmed all 6 security headers are sent; confirmed `sitemap.xml`/`robots.txt`/`manifest.webmanifest`/`favicon.ico` all return 200; confirmed the video's `playsInline`/`preload="metadata"` and the hero image's `fill`/`sizes="100vw"`/responsive `srcSet` are present in the served markup; confirmed all OG/Twitter/canonical meta tags render with the real domain. `git diff --stat` reviewed in full: `utils/data/*.ts` has zero diff (confirmed via `git diff --stat -- utils/data/`, empty output) — no content was touched; every other changed file traces to a specific phase above. Files with diffs I hadn't directly edited (Navbar, Skills, Blogs, Collaborate, Experience, Recommendation, ThinkingProcess, Contact, and the four `ui/` components) were all migrated automatically by the Phase 4 Tailwind v4 upgrade tool (exactly the 15 files it logged) — spot-checked two (`Collaborate.tsx`: `bg-gradient-to-r` → `bg-linear-to-r`; `ui/SkillTags.tsx`: `rounded` → `rounded-sm`, both v4 utility renames) to confirm they're legitimate syntax migrations, not unintended edits.
  - **Not done / needs a human**: real-browser manual QA across breakpoints (mobile menu, About tabs, Experience accordions, Projects modal, Contact submit, BackToTop, dark/light toggle, Recommendation carousel, ThinkingProcess animation) and a Lighthouse run — no browser automation tooling in this environment. Recommend running `npm run dev` locally and working through the Phase 9 checklist above before merging.

## Phase 10 — HTTP caching (added after initial 9-phase plan closed)

Audited actual `Cache-Control` headers served by a production build (`next start` + `curl -I`) rather than assuming — found real gaps:
- `/video/image-me2.webm` (About's avatar video, served raw from `public/`) was sent with `max-age=0` — re-downloaded on every visit.
- Raw `/images/*` paths (not the `/_next/image` optimizer output — the raw file) were also `max-age=0`. These matter because `og:image`/`twitter:image` in `layout.tsx` point straight at `/images/logo.png`, so link-preview crawlers (Slack, Twitter, LinkedIn) hit the unoptimized path directly.
- The `/_next/image` optimizer endpoint itself was capped at Next's 4-hour (`14400`) default.
- Confirmed Next already handles its own hashed assets correctly with no changes needed: `/_next/static/*` JS chunks and `next/font`-served font files both already come back `max-age=31536000, immutable` out of the box.

Changes, both in `next.config.js`:
1. `images.minimumCacheTTL: 31536000` — this site has no CMS/dynamic images, content only changes on redeploy, so there's no reason to cap the optimizer cache at 4 hours.
2. New `headers()` entries for `source: "/images/:path*"` and `source: "/video/:path*"`: `Cache-Control: public, max-age=604800, stale-while-revalidate=86400`. Deliberately shorter (1 week + 1 day SWR) than the Next-hashed-asset caching above — these filenames aren't content-hashed, so a full year `immutable` would risk serving a stale asset indefinitely if a file were ever replaced under the same name without a filename change.

Verified via `next build` (clean, still fully static) + `eslint .` (clean) + `next start` and `curl -I` against `/video/image-me2.webm`, `/images/background.webp`, and the `/_next/image` optimizer endpoint, confirming the new headers actually take effect and the existing security headers on `/` are untouched.
