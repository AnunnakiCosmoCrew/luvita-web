# luvita-web

Corporate website for **Luvita** (Luvita Teknoloji Enerji Yazılım Sanayi ve
Ticaret Limited Şirketi) — a software company based in Bodrum, Türkiye,
building custom software for banking and enterprise clients.

Live at: <https://luvita.tr>

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
  `src/pages/en/`. Slugs are localized (`urunler` ↔ `products`); each page
  declares its slug pair via the layout's `paths` prop, which drives both the
  language switcher and `hreflang` alternates.
- Shared chrome strings (nav, footer, 404): `src/i18n/tr.ts` + `en.ts`.
- Product data: `src/data/products.ts`.
- Company identity constants (legal name, location, e-mail, MERSİS):
  `src/lib/site.ts` — **update `MERSIS_NO` / `TRADE_REGISTRY_NO` there once
  registration completes**, and swap `CONTACT_EMAIL` when
  `info@luvita.com.tr` is live. `LOCATION` is city-level on purpose: the
  registered office is a home address and is not published here.

## Editorial rule

The site presents the company **exclusively as a software house**. The
solar/GES line of business is deliberately absent from all body copy (see
`adr/0003`); the full trade name (which contains "Enerji") appears only in
the footer legal-identity block, as legally required.

## Custom domain

**`luvita.tr`** — registered 2026-08-09 through Natro. `luvita.com.tr` was
already taken by a third party (parked, no DNS records), as were `luvita.com`
(since 2006) and `luvita.dev`. Since TRABİS went live (14.09.2022), direct
`.tr` and `.com.tr` need **no company documents** — first come, first served
through any accredited TR registrar.

The domain is configured in three places: `site` + `base: '/'` in
`astro.config.mjs`, `public/CNAME`, and the Sitemap URL in `public/robots.txt`.
All internal links go through `withBase()` / `localizedPath()`, so the base
change needs no template edits.

### DNS

Nameservers are delegated to Cloudflare; records point at GitHub Pages with the
Cloudflare proxy **off** (grey cloud) so Pages can issue and renew its
Let's Encrypt certificate:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `anunnakicosmocrew.github.io` |
