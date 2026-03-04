# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ben Yoo (Senior Product Manager). Static-export Next.js site — no backend, no database, no API routes. Content is hardcoded in components.

## Commands

```bash
npm run dev      # Local dev server (hot reload)
npm run build    # Static site generation → out/
npm run start    # Serve production build
npm run lint     # ESLint (Next.js core-web-vitals + typescript)
```

No test framework is configured.

## Tech Stack

- **Next.js 16** with App Router, static export (`output: 'export'`)
- **React 19**, TypeScript (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` (not legacy config file)
- **shadcn/ui** (new-york style, RSC-enabled) for UI primitives in `src/components/ui/`
- **Framer Motion** for scroll-triggered and stagger animations
- **Radix UI** headless primitives underneath shadcn components

## Architecture

Single-page app composed in `src/app/page.tsx` from section components:

```
src/app/page.tsx          ← Composes all sections
src/app/layout.tsx        ← Root layout, metadata, fonts
src/app/globals.css       ← Theme variables (oklch), dark/light mode

src/components/
  nav.tsx                 ← Mobile-responsive navigation
  hero.tsx                ← Hero section with CTA
  strategy-impact.tsx     ← Case studies/highlights
  experience.tsx          ← Professional timeline
  governance-security.tsx ← Certifications (PMP, CISM)
  tech-stack.tsx          ← Knowledge domains
  contact.tsx             ← Contact links
  ui/                     ← shadcn/ui primitives (don't edit manually)

src/lib/utils.ts          ← cn() helper (clsx + tailwind-merge)
```

All section components are client components (`"use client"`). Data (experience entries, case studies, skills, contact links) lives as arrays/objects within each component file.

## Key Conventions

- **Path alias:** `@/*` maps to `./src/*`
- **Styling:** Tailwind utilities only — no custom CSS classes. Theme uses CSS variables with oklch color space in `globals.css`
- **Dark mode:** Default theme. Light mode via `.light` class toggle
- **Animations:** Framer Motion `whileInView` with `viewport={{ once: true }}`, stagger via `delay: idx * 0.1`
- **Images:** `next/image` with `unoptimized: true` (required for static export)
- **shadcn components:** Added via `npx shadcn@latest add <component>` — managed by `components.json` config
- **File naming:** kebab-case for files, PascalCase for component exports

## Static Export Constraints

Since `output: 'export'` is set in `next.config.ts`:
- No API routes (`app/api/`)
- No server-side rendering or `getServerSideProps`
- No `next/image` optimization (images must be `unoptimized: true`)
- No middleware
- No dynamic routes without `generateStaticParams`
