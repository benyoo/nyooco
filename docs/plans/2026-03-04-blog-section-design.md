# Blog Section Design

**Date:** 2026-03-04
**Status:** Approved

## Context

Add a blog/writing section to the nyooco portfolio site. Purpose: thought leadership articles and project case studies on product management, federal modernization, and strategy. Starting with 1-2 posts, tags/categories for organization.

## Approach

Markdown files with YAML frontmatter, processed at build time via `gray-matter` + `remark`/`remark-html`. Compatible with the existing static export (`output: 'export'`) configuration.

## Content Structure

```
src/content/blog/
  ├── example-post.md
  └── another-post.md
```

Frontmatter schema:
```yaml
---
title: string        # Post title
date: string         # YYYY-MM-DD
description: string  # Short summary for cards/SEO
tags: string[]       # e.g., ["Federal IT", "Product Management"]
published: boolean   # false = draft, not built
---
```

Slug derived from filename.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/blog` | `src/app/blog/page.tsx` | Listing page with tag filtering |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Individual post page |

Both use `generateStaticParams()` for static export.

## New Files

### `src/lib/blog.ts`
- `getAllPosts()` — read all `.md` files, parse frontmatter, sort by date desc
- `getPostBySlug(slug)` — read single post, return metadata + HTML content
- `getAllTags()` — extract unique tags across all posts
- `getPostsByTag(tag)` — filter posts by tag

Uses `fs` (build-time only) + `gray-matter` + `remark` + `remark-html`.

### `src/components/blog-card.tsx`
Post preview card for listing page. Reuses shadcn `Card` and `Badge`. Framer Motion animations (`whileInView`, stagger delay).

### `src/components/blog-post.tsx`
Full article renderer. HTML content styled with `@tailwindcss/typography` prose classes.

### `src/components/tag-filter.tsx`
Tag pills on listing page for filtering posts. Reuses shadcn `Badge`.

## Modified Files

### `src/components/nav.tsx`
Add "Blog" link as a standard Next.js `Link` (not anchor scroll). Active state when on `/blog/*` routes.

## New Dependencies

```
gray-matter               — YAML frontmatter parsing
remark                    — Markdown processing
remark-html               — Markdown → HTML
@tailwindcss/typography   — Prose styling for articles
```

## Design Continuity

- Same dark theme (oklch CSS variables)
- Same Framer Motion animation patterns
- Same shadcn Card/Badge/Separator components
- Responsive grid layout matching existing sections
- Back navigation on post detail pages
