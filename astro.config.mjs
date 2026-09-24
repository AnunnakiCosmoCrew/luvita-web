// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -------------------------------------------------------
// GitHub Pages (repo: AnunnakiCosmoCrew/luvita-web), served from the custom
// domain https://luvita.tr — registered 2026-08-09 through Natro, because
// luvita.com.tr was already taken by a third party. `public/CNAME` carries the
// domain into the Pages artifact; DNS points at GitHub Pages via Cloudflare.
//
// Because the domain replaces the project sub-path, `base` is '/' here. The
// old https://anunnakicosmocrew.github.io/luvita-web/ URL redirects to the
// custom domain once Pages has it configured.
//
// Every internal link is built with `withBase()` (src/lib/url.ts) and
// `localizedPath()` (src/i18n), so the base change needs no template edits.
// -----------------------------------------------------------------------------
export default defineConfig({
  site: 'https://luvita.tr',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  // Localized content lives under /tr/ and /en/ (adr/0002); the root URL is a
  // page of its own, NOT a redirect. `redirectToDefaultLocale: false` is what lets
  // `src/pages/index.astro` exist as a real home page outside the locale
  // structure. With it set to true, Astro emits a `noindex` meta-refresh stub
  // at `/` and silently ignores that page — which left the bare domain unable
  // to name the company to anything that does not run a refresh (adr/0005).
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  // Retired routes (LW-12). The Services page was removed when the site moved
  // to a pure product positioning (adr/0004); the old URLs still redirect so
  // nothing that linked them 404s. In `output: 'static'` Astro emits a no-JS
  // meta-refresh stub at dist/<from>/index.html and ignores status codes, so
  // the plain-string form is used. Destinations keep the trailing slash to
  // match `withBase()` output and save a second GitHub Pages 301 hop.
  redirects: {
    '/en/services': '/en/products/',
    '/tr/hizmetler': '/tr/urunler/',
  },
  integrations: [sitemap()],
});
