// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -------------------------------------------------------
// Deployed as a GitHub *project* Pages site (repo: AnunnakiCosmoCrew/luvita-web),
// served from a sub-path:
//   https://anunnakicosmocrew.github.io/luvita-web/
//
// Served from the custom domain luvita.tr (registered 2026-08; luvita.com.tr
// was already taken by a third party). `public/CNAME` carries the domain into
// the Pages artifact; DNS points at GitHub Pages through Cloudflare.
//
// Every internal link is built with `withBase()` (src/lib/url.ts) and
// `localizedPath()` (src/i18n), so the base change needs no template edits.
// -----------------------------------------------------------------------------
export default defineConfig({
  site: 'https://luvita.tr',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [sitemap()],
});
