# ADR 0001: Astro static site on GitHub Pages, cloned from the cosmocrew-web pattern

- Status: accepted
- Date: 2026-08-09

## Context

Luvita (incorporated 2026-08, Bodrum) needs a corporate site aimed at banking
and enterprise prospects, ready before a custom domain is registered. The
organization already runs `cosmocrew-web`: Astro static, hand-written CSS,
design tokens, zero client JS, deployed to GitHub Pages — a proven, zero-cost
pattern.

## Decision

Build `luvita-web` as a standalone repo (not a workspace in the cosmocrew-web
monorepo — separate corporate identity, separate lifecycle) using the same
stack: Astro 7, `output: 'static'`, system font stack, design tokens copied
and re-accented (periwinkle → deep teal), no client JavaScript, GitHub Pages
via the hand-rolled Actions workflow. Serve initially from
`anunnakicosmocrew.github.io/luvita-web/` with `base: '/luvita-web'`; all
internal links go through `withBase()` so a later move to a custom domain is
config-only.

Plain TS data modules (`src/data/*.ts`) replace content collections: four
services and two products per locale don't warrant collection machinery.

## Consequences

- Zero hosting cost, no backend to operate; contact is mailto-only until a
  form backend is ever justified.
- Two sites now share a design-token lineage by copy, not by package — token
  fixes must be ported manually (acceptable: tokens are stable).
- The GitHub Pages project-site URL leaks the org name until the domain move;
  acceptable for the pre-domain window.

## Update 2026-08-09 — domain move to luvita.tr

`luvita.com.tr` turned out to be registered by a third party, so the site moved
to **`luvita.tr`** (direct `.tr`, registered through Natro). As designed, the
move was config-only: `site` + `base: '/'` in `astro.config.mjs`,
`public/CNAME`, and the Sitemap URL in `public/robots.txt` — no template edits.
Note that the earlier premise "a `.com.tr` registration requires company
documents" was outdated: since TRABİS went live (14.09.2022) `.com.tr` and
direct `.tr` are document-free and first-come-first-served, which is also why
the name was already gone.
