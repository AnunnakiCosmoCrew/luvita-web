# luvita-web

Public corporate site for **Luvita** (legal: Luvita Teknoloji Enerji Yazılım
Sanayi ve Ticaret Limited Şirketi, Bodrum). Astro 7 static, TR/EN bilingual,
GitHub Pages, served from **luvita.tr**. See README.md for stack, the domain
configuration and the DNS records.

## Hard rules

- **No GES/solar content in the site body.** The company's solar business is
  presented under a separate brand elsewhere. Never add solar services,
  imagery, or copy here (adr/0003).
- **The full trade name (contains "Enerji") is legal identity, never copy**
  (adr/0003, amended by adr/0005). `LEGAL_NAME` (`src/lib/site.ts`) may appear
  only where it identifies the legal entity: the footer legal block, the root
  entry page's identity block, and `legalName` in the Organization JSON-LD.
  It must never appear in copy that positions the company — headlines, leads,
  product or service text, or a `<meta name="description">`, which is the
  snippet a search result shows. The short brand "Luvita" carries those.
- **Never publish the registered street address.** It is a residential
  address; the site shows city-level `LOCATION` only (`src/lib/site.ts`).
  Restore a full address only when the company has an office or virtual-office
  address.
- **Product status must be truthful.** `src/data/products.ts` carries a
  `status` field; only shipped products may be marked `'live'`, and
  in-development ones must say so in the copy too. Never imply a product
  exists before it does — banks read this page.
- **No services/consultancy surface.** The site presents Luvita as a product
  company only (adr/0004). Never add a services page, a service menu, an
  engagement-process band, or copy soliciting client projects — that framing
  is what got the company misclassified as an agency. Turnkey work can still
  be accepted; it is simply never advertised here.
- **Zero client-side JS, no external requests.** No analytics, no fonts, no
  CDN embeds. Privacy pages promise "no cookies, no tracking" — keep it true.
- **The root URL answers for itself** (adr/0005). `https://luvita.tr/` is a
  real page — the bilingual identity card in `src/pages/index.astro` — and
  never a redirect again. It carries the registered trade name,
  `contact@luvita.tr`, the city, the registry numbers and Organization JSON-LD
  **in the HTML the server sends**, because the reader it exists for is a
  verifier running `curl`, not a browser: the previous stub bounced browsers
  to `/tr/` and showed everything else a blank page, which is the failure mode
  that cost a credit-programme round. Never set `redirectToDefaultLocale: true`
  again — it makes Astro generate the root itself and silently ignore that
  page. The JSON-LD ships from `BaseHead` on every page, since we do not get
  to choose where a verifier lands.
- Every internal link goes through `withBase()` (`src/lib/url.ts`) or
  `localizedPath()` (`src/i18n/index.ts`). Never hardcode `/luvita-web/` or a
  locale prefix in templates.
- Every page passes its localized slug pair via the layout `paths` prop
  (e.g. `{ tr: 'urunler', en: 'products' }`) — this drives hreflang and the
  language switcher. When adding a page, add BOTH locale variants.

## Conventions

- Node ≥24 (`nvm use`), npm. `npm run check` + `npm run build` must pass
  before pushing. `ci.yml` runs both on every pull request and `deploy.yml`
  runs them again on `main` before publishing; both read the version from
  `.nvmrc`. `main` is unprotected, so the PR run informs — read it.
- Branch naming: `feature/lw-N-slug`; trunk-based, PRs to `main`; deploy on
  merge to main.
- ADRs live in `adr/` in this repo (site-scoped decisions only).
- Company identity constants (address, e-mail, MERSİS) live in
  `src/lib/site.ts` — single source of truth for the footer and contact page.
