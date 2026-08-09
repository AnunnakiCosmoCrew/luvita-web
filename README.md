# luvita-web

Corporate website for **Luvita** (Luvita Teknoloji Enerji Yazılım Sanayi ve
Ticaret Limited Şirketi) — a software company based in Bodrum, Türkiye,
building custom software for banking and enterprise clients.

Live at: <https://anunnakicosmocrew.github.io/luvita-web/>

## Stack

- [Astro 7](https://astro.build) static site — zero client JS, hand-written CSS
- Bilingual (TR default + EN) via Astro's built-in i18n routing
  (`/tr/…`, `/en/…`; `/` redirects to `/tr/`)
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`
- Node ≥ 24 (`.nvmrc` — run `nvm use`)

## Development

```bash
nvm use
npm install
npm run dev      # http://localhost:4321/luvita-web/tr/
npm run check    # astro check (types)
npm run build    # static build to dist/
```

## Content model

- Page copy lives inline in the parallel page trees `src/pages/tr/` and
  `src/pages/en/`. Slugs are localized (`hizmetler` ↔ `services`); each page
  declares its slug pair via the layout's `paths` prop, which drives both the
  language switcher and `hreflang` alternates.
- Shared chrome strings (nav, footer, 404): `src/i18n/tr.ts` + `en.ts`.
- Services and products data: `src/data/services.ts`, `src/data/products.ts`.
- Company identity constants (legal name, address, e-mail, MERSİS):
  `src/lib/site.ts` — **update `MERSIS_NO` / `TRADE_REGISTRY_NO` there once
  registration completes**, and swap `CONTACT_EMAIL` when
  `info@luvita.com.tr` is live.

## Editorial rule

The site presents the company **exclusively as a software house**. The
solar/GES line of business is deliberately absent from all body copy (see
`adr/0003`); the full trade name (which contains "Enerji") appears only in
the footer legal-identity block, as legally required.

## Moving to luvita.com.tr

When the domain is registered, change in `astro.config.mjs`:

```js
site: 'https://luvita.com.tr',
base: '/',
```

then add `public/CNAME` containing `luvita.com.tr`, update the Sitemap URL in
`public/robots.txt`, and point DNS at GitHub Pages. All internal links go
through `withBase()` / `localizedPath()`, so no template edits are needed.
