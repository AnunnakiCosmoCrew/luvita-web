// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -------------------------------------------------------
// Deployed as a GitHub *project* Pages site (repo: AnunnakiCosmoCrew/luvita-web),
// served from a sub-path:
//   https://anunnakicosmocrew.github.io/luvita-web/
//
// The custom domain is still undecided: luvita.com.tr is already registered by
// a third party (checked 2026-08-09, parked — no DNS records). Candidates are
// luvita.tr (unregistered; direct .tr may still be in its priority phase) and
// luvitateknoloji.com.tr. See README for the shortlist.
//
// To move to whichever domain is registered, change two lines:
//   site: 'https://<domain>',
//   base: '/',
// then add `public/CNAME` containing that domain and update the sitemap URL in
// `public/robots.txt`. Every internal link is built with `withBase()`
// (src/lib/url.ts), so nothing else needs to change.
// -----------------------------------------------------------------------------
export default defineConfig({
  site: 'https://anunnakicosmocrew.github.io',
  base: '/luvita-web',
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
