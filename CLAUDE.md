# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio + writings site for Jericho Bantiquete (deployed at https://jerichobantiquete.vercel.app). Next.js 15 App Router, React 19, TypeScript, styled-components, and Velite for MDX content.

## Commands

Use **yarn** (npm is blocked via `engines`). Node 22 (`.nvmrc`).

- `yarn dev` — Next dev server. Velite runs automatically in watch mode via the custom webpack plugin in `next.config.js` (dev mode only); `yarn dev:content` runs Velite watch standalone.
- `yarn build` — runs `build:content` (`velite --clean`) then `build:next`. Always build content first; `next build` alone fails if `.velite/` is missing.
- `yarn lint` — `next lint` (ESLint, `next/core-web-vitals` + `eslint:recommended`).
- `yarn prettier` — format everything (single quotes, semicolons, trailing commas `es5`, 2-space).

There is no test suite.

Husky hooks: `pre-commit` runs `yarn lint`, `pre-push` runs `yarn build`, `commit-msg` runs commitlint (conventional commits, lower-case type/scope, header ≤ 100 chars, no sentence-case subject). Existing history uses `feat: ...` for content updates too.

## Architecture

### Content pipeline (Velite)

All projects, testimonials, and writings are MDX under `content/`, compiled by Velite (`velite.config.ts`) into `.velite/*.json` (gitignored) with images emitted to `public/static/` (gitignored). Import paths: `#velite` / `@/.velite` alias.

- Collections: `projects`, `testimonials`, and five writing categories — `blogs`, `reflections`, `notes`, `poems`, `journal` — each matched by `writings/<category>/**/*.mdx`. Only `.mdx` files are picked up (e.g. `content/projects/it-company.md` is ignored).
- Frontmatter is schema-validated; a bad field fails the build. Projects require `coverImage` and `transitionImage` (relative paths into `content/projects/images/`, stored as WebP ≤ 2560px). `featured: true` puts a project on the home page; all projects are listed at `/projects`. Project order is ascending by `date`, which is used as a manual ordering key. Writings need `title`, `slug`, `date`, optional `excerpt` (≤ 300 chars).
- MDX is compiled to a function-body string; `components/mdx-component/mdx-components.tsx` evaluates it with `new Function` and injects shared components (e.g. `Poem`). Code blocks are highlighted by `rehype-pretty-code` (tokyo-night) at build time.

### Data access layer

- `lib/velite.ts` imports the generated JSON directly and normalizes writings: strips the `writings/` and `<category>/` prefixes from slugs and attaches `category`. **Only import it from server components** — importing it (or `lib/writings.ts`) from a `'use client'` file bundles every compiled MDX body into the browser JS. Server pages load data, strip `content` (`toSummary` in `lib/writings.ts`, `toProjectSummary` in `lib/utils.ts`) and pass props to `*Client.tsx` components.
- `lib/writing-categories.ts` holds `WRITING_CATEGORIES` and the writing types with no JSON imports, so client components can use them.
- `lib/writings.ts` is the query API used by pages (`getWritingsByCategory`, `getWriting`, etc.). Note `getWriting(slug)` searches across all categories, so writing slugs should be unique site-wide.
- Adding a new writing category requires touching `velite.config.ts`, `lib/velite.ts` (import, `processWritings`, `allWritings`), `lib/writing-categories.ts` (`WritingCategory` union, `WRITING_CATEGORIES`), `lib/writings.ts` switch, and the hardcoded category list in `app/writings/[category]/[slug]/page.tsx` `generateStaticParams` (which currently omits `notes`).

### Routes

- `/` — `app/page.tsx` (server) prepares sorted project summaries and testimonials, rendered by `app/home-client.tsx` from `components/*` sections (hero + terminal easter egg, projects, about, experience, mantra, testimonials); uses `lib/use-scroll-restoration.ts` to restore scroll when returning from a project page.
- `/projects` lists every project; `/projects/[...slug]` matches on `slugAsParams` (derived in the Velite transform).
- `/writings`, `/writings/[category]`, `/writings/[category]/[slug]` — server `page.tsx` files do the data lookup / `generateStaticParams`, then hand plain props to `*Client.tsx` components for rendering.
- Raw `<img>` tags inside MDX bypass `next/image` (and the MDX `components` map doesn't apply to literal JSX tags), so give them `loading="lazy"` and use compressed WebP files in `public/images/`.
- `/book-list` and `/gallery` — data is hardcoded in the page files, not in `content/`.

### Styling

- styled-components only (no CSS modules/Tailwind). SSR is handled by `lib/registry.tsx`, wrapped in `providers/theme-provider.tsx` along with `GlobalStyles`. Anything using styled-components must be a client component (`'use client'`).
- Theme tokens (colors, font CSS variables, breakpoints) live in `styles/theme.ts`; the `DefaultTheme` type in `types/styled.d.ts` must be updated alongside any new token.
- Fonts are local (`fonts/`), loaded with `next/font/local` in `app/layout.tsx` and exposed as CSS variables.
- Convention: each component folder has `index.tsx` plus a `*.styles.ts` file.

### Shared text

`lib/portfolio-data.ts` holds the About section paragraphs used by both `components/about` and the terminal easter egg (`components/terminal`). Paragraph 4 is duplicated as JSX in `components/about/index.tsx` — update both.
