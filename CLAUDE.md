# luvita-web

Public corporate site for **Luvita** (legal: Luvita Teknoloji Enerji Yazılım
Sanayi ve Ticaret Limited Şirketi, Bodrum). Astro 7 static, TR/EN bilingual,
GitHub Pages. See README.md for stack and the luvita.com.tr migration steps.

## Hard rules

- **No GES/solar content in the site body.** The company's solar business is
  presented under a separate brand elsewhere. The full trade name (contains
  "Enerji") may appear ONLY in the footer legal block (`src/lib/site.ts` →
  `LEGAL_NAME`). Never add solar services, imagery, or copy here (adr/0003).
- **Never publish the registered street address.** It is a residential
  address; the site shows city-level `LOCATION` only (`src/lib/site.ts`).
  Restore a full address only when the company has an office or virtual-office
  address.
- **Product status must be truthful.** `src/data/products.ts` carries a
  `status` field; only shipped products may be marked `'live'`, and
  in-development ones must say so in the copy too. Never imply a product
  exists before it does — banks read this page.
- **Zero client-side JS, no external requests.** No analytics, no fonts, no
  CDN embeds. Privacy pages promise "no cookies, no tracking" — keep it true.
- Every internal link goes through `withBase()` (`src/lib/url.ts`) or
  `localizedPath()` (`src/i18n/index.ts`). Never hardcode `/luvita-web/` or a
  locale prefix in templates.
- Every page passes its localized slug pair via the layout `paths` prop
  (e.g. `{ tr: 'hizmetler', en: 'services' }`) — this drives hreflang and the
  language switcher. When adding a page, add BOTH locale variants.

## Conventions

- Node ≥24 (`nvm use`), npm. `npm run check` + `npm run build` must pass
  before pushing (CI runs both).
- Branch naming: `feature/lw-N-slug`; trunk-based, PRs to `main`; deploy on
  merge to main.
- ADRs live in `adr/` in this repo (site-scoped decisions only).
- Company identity constants (address, e-mail, MERSİS) live in
  `src/lib/site.ts` — single source of truth for the footer and contact page.
