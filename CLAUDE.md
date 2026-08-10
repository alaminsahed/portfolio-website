# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server on port 3003 (`next dev -p 3003`)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint via ESLint flat config (`eslint.config.mjs`, extends `eslint-config-next/core-web-vitals`)

No test suite exists in this repo.

## Architecture

This is a single-page personal portfolio site built on the Next.js App Router — there is exactly one route (`/`), defined by the route group `app/(homePage)/page.tsx`. There are no API routes, no dynamic routes, and no data fetching from external services; all content is static.

**Content is data-driven.** Each homepage section pulls its copy from a plain TS file in `utils/data/*.ts` (e.g. `experience.ts`, `projects.ts`, `skills.ts`, `blogs.ts`, `recommendation.ts`, `contacts.ts`, `headerContactList.ts`). To change site copy, edit the data file, not the component — components are just render logic over these fixed arrays/objects.

**Section components** live in `app/components/` (`Navbar`, `HeaderMain`, `ImpactNumbers`, `About`, `Skills`, `Experience`, `Recommendation`, `ThinkingProcess`, `Projects`, `Blogs`, `Collaborate`, `Contact`, `Footer`), each rendered once, in order, from `page.tsx`. Shared/presentational pieces (modals, sliders, tag chips, theme toggle, back-to-top button) live in `app/components/ui/`.

**Server vs. client split matters here.** Only components with real interactivity (state, effects, browser APIs, third-party client libs like `react-scroll`, `react-hook-form`, `next-themes`) should carry `"use client"`. Purely data-mapped, non-interactive sections should stay Server Components — this is the main lever for keeping the page's shipped JS small on a content-heavy single-page site. When adding or editing a section, default to no directive and only add `"use client"` if you actually need hooks/browser APIs.

**Two providers wrap the app** in `app/layout.tsx`: `providers/themeProviders.tsx` (wraps `next-themes` for the dark/light toggle, `class` strategy on `<html>`) and `providers/toasterProvider.tsx` (wraps `react-toastify`, used by the Contact form).

**Styling**: Tailwind CSS, dark mode via the `class` strategy (`darkMode: 'class'`, toggled by `next-themes`). The `cn()` helper in `libs/utils.ts` (clsx + tailwind-merge) is the standard way to conditionally compose class names — use it instead of manual string concatenation.

**Path alias**: `@/*` maps to the repo root (see `tsconfig.json`).

**Images/media**: `next/image` is used throughout for images; the About section's circular avatar is a raw `<video>` tag (`public/video/`), not an image. Remote images are restricted via `images.remotePatterns` in `next.config.js` (currently only `github.com`).

**Live deployment**: https://alamin-sahed-portfolio.vercel.app/ (Vercel).

## Security & optimization checks

When touching `next.config.js`, dependencies, or the component tree, verify before considering the work done:

- `npm audit` is clean (or any findings are triaged, not silently left).
- `next.config.js`'s `images.remotePatterns` stays scoped to actual sources in use — don't broaden it speculatively.
- Security headers configured in `next.config.js` (`headers()`) still apply to all routes after a config change.
- New components default to Server Components; `"use client"` is only added when a hook, browser API, or client-only library actually requires it (see the server/client note above) — this is the main lever keeping shipped JS small on this content-heavy single-page site.
- After a dependency bump, `npm run lint` and `npm run build` both pass before calling the change complete.
