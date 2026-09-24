# ADR 0002: TR-default bilingual routing via parallel page trees with localized slugs

- Status: accepted
- Date: 2026-08-09

## Context

The audience is Turkish banks and enterprises (TR is mandatory and primary)
plus potential international work (EN). Astro's built-in i18n supports
prefixed locale routing, but its `getRelativeLocaleUrl` helpers assume shared
slugs across locales, while we want localized slugs (`/tr/hizmetler/` ↔
`/en/services/`) — better for Turkish SEO and reads professionally.

## Decision

- Astro built-in i18n config: `defaultLocale: 'tr'`, `locales: ['tr','en']`,
  `prefixDefaultLocale: true`, `redirectToDefaultLocale: true` (so `/`
  redirects to `/tr/`).
- Parallel page trees `src/pages/tr/` and `src/pages/en/` with inline copy —
  no translation-key indirection for page bodies. Only shared chrome strings
  (nav, footer, 404) live in dictionaries (`src/i18n/tr.ts`, `en.ts`).
- Each page declares its slug pair via the layout `paths` prop; that single
  declaration drives the `hreflang` alternates, canonical URL, and the
  language switcher target. A custom `localizedPath()` helper (base-aware)
  replaces `getRelativeLocaleUrl`.

## Consequences

- Adding a page means writing it twice — deliberate: the corporate copy
  should be authored per language, not machine-mapped.
- The `paths` prop is the invariant to maintain: a page without a correct
  pair gets a wrong language-switcher link and wrong hreflang.
- One shared 404 (GitHub Pages serves a single `/404.html`), rendered TR-first
  with an EN line.

## Update 2026-09-24 — the root URL is a page, not a redirect

`redirectToDefaultLocale` is now `false`: `/` serves a real bilingual entry
page instead of redirecting to `/tr/`, because the redirect stub Astro emitted
could not name the company to anything that did not execute a meta-refresh.
See adr/0005. Everything else in this decision — parallel trees, localized
slugs, the `paths` pair driving hreflang and the switcher — is unchanged; the
root page simply sits outside the locale structure and is its own canonical.
