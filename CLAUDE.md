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
- **No company address in visible copy — not even the city** (LW-17). The
  registered office is a residential address, and as of LW-17 the city is kept
  out of all rendered page text too (root eyebrow and identity block, the
  KVKK/privacy "data controller" line). `LOCATION` (`src/lib/site.ts`) survives
  only in the machine-readable JSON-LD (`OrganizationSchema.astro`), where a
  bank/Google verifier reads it (adr/0005). Never render `LOCATION` in visible
  copy; revisit only when the company has an office or virtual-office address.
- **Product status must be truthful.** `src/data/products.ts` carries a
  `status` field; only shipped products may be marked `'live'`, and
  in-development ones must say so in the copy too. Never imply a product
  exists before it does — banks read this page.
- **No services/consultancy surface.** The site presents Luvita as a product
  company only (adr/0004). Never add a services page, a service menu, an
  engagement-process band, or copy soliciting client projects — that framing
  is what got the company misclassified as an agency. Turnkey work can still
  be accepted; it is simply never advertised here.
- **Zero client-side JS, no external requests.** No client-side analytics,
  no fonts, no CDN embeds. The privacy pages promise no cookies and no
  analytics or tracking scripts in the browser — keep it true. Visits are
  counted only server-side, from Cloudflare's zone HTTP analytics on the
  proxied luvita.tr records (aggregate counts by path, referrer and country;
  founder, 2026-10-26, LW-54), and the privacy and KVKK pages say so. Adding
  any client-side analytics still needs a privacy-copy change first.
  The **one** sanctioned exception is the root page's inline locale-redirect
  script (`src/pages/index.astro`, adr/0006): it sets no cookie, makes no
  external request and loads no library. Every other page stays zero-JS — a
  `<script>` emitted on any other page is a regression.
- **The root URL answers for itself** (adr/0005, adr/0006). `https://luvita.tr/`
  is a real page — the bilingual identity card in `src/pages/index.astro` — and
  never a server-side redirect again. It carries the registered trade name,
  `contact@luvita.tr`, the registry numbers and Organization JSON-LD **in the
  HTML the server sends**, because the reader it exists for is a verifier
  running `curl`, not a browser: the previous stub bounced browsers to `/tr/`
  and showed everything else a blank page, which is the failure mode that cost a
  credit-programme round. Never set `redirectToDefaultLocale: true` again — it
  makes Astro generate the root itself and silently ignore that page. On top of
  that served content, one inline script (adr/0006) forwards **JS browsers** to
  their language (Turkish → `/tr/`, else → `/en/`); no-JS clients and crawlers
  keep the identity card, so verification is untouched. The JSON-LD ships from
  `BaseHead` on every page, since we do not get to choose where a verifier lands.
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

## Design brief

Read before changing any visible UI (the `frontend-design` skill in
`.claude/skills/` applies; this brief and the hard rules above win over it).
The source of truth is `src/styles/tokens.css` — use its variables, never raw
values in components.

- **Character:** calm, near-monochrome, one restrained corporate accent. A
  bank officer or a verifier is the reader: sober and trustworthy, not
  decorative.
- **Colour:** accent deep teal `--c-accent` (`#0f7b6c`; `#3cb8a4` in dark);
  warm off-white `--c-bg` (`#fafaf8`), charcoal ink `--c-ink` (`#1a1b20`);
  surfaces `--c-surface`/`--c-surface-2`; muted status dot `--c-ok`. Light by
  default, dark via `prefers-color-scheme` only (no toggle, no JS).
- **Type:** system stacks only — `--font-sans` for body, `--font-display`
  (Iowan Old Style / Palatino / Georgia serif) for headings, `--font-mono`.
  Scale `--fs-300`…`--fs-900` (~1.2 modular) plus fluid `--fs-hero`; line
  heights `--lh-tight` / `--lh-body`. **No web fonts, no font CDN.**
- **Layout:** spacing `--sp-1`…`--sp-9`, radii `--radius-sm/--radius/--radius-lg`,
  widths `--maxw` (64rem) and `--maxw-prose` (42rem), `--shadow-card`, motion
  `--ease`/`--dur`. Keep it responsive down to 390 px with no horizontal scroll.
- **Hard rules apply to design too:** no external requests (images, icons,
  fonts, embeds), no client-side JS beyond the root redirect script, no solar
  imagery, no services-style sections, no address or city in visible copy.
- Design changes need a founder look (`Founder check: product` or `public`).

## Brand and copy

Brand names, attribution strings, claims and voice rules live in
`AnunnakiCosmoCrew/project-templates/brand/BRAND.md`. Read it live, from the
repository, before writing or changing any copy
(`https://github.com/AnunnakiCosmoCrew/project-templates/blob/main/brand/BRAND.md`);
do not copy its rules here. This file's hard rules win where they are stricter.

## Cloud preview notes

For the `preview-check` skill (`.claude/skills/preview-check/`) after any
visible UI change. `npm run dev` may be refused in auto mode, so build and
serve the static output yourself:

1. `npm run build` (output in `dist/`; `base` is `/`, so no sub-path).
2. Start `npm run preview -- --host 127.0.0.1` in the background, log to the
   scratchpad. Astro's default port is **4321**; read the real port from the
   log, as it moves up if 4321 is taken.
3. Routes: `/` (root identity card — the only page with a script), `/tr/`,
   `/en/`, and the localized pairs `/tr/urunler/` ↔ `/en/products/`,
   `/tr/planlar/` ↔ `/en/plans/`, `/tr/hakkimizda/` ↔ `/en/about/`,
   `/tr/iletisim/` ↔ `/en/contact/`, `/tr/gizlilik/` ↔ `/en/privacy/`,
   `/tr/kvkk-aydinlatma/`, `/tr/nesili-gizlilik/` ↔ `/en/nesili-privacy/`,
   and `/404.html`.
4. Expect zero failed requests and zero console errors; any external request
   is a regression. Stop the server when done.
