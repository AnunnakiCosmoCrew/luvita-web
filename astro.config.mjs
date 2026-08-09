// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- Deployment target -------------------------------------------------------
// Deployed as a GitHub *project* Pages site (repo: AnunnakiCosmoCrew/luvita-web),
// served from a sub-path:
//   https://anunnakicosmocrew.github.io/luvita-web/
//
// To move to the custom domain luvita.com.tr later, change two lines:
//   site: 'https://luvita.com.tr',
//   base: '/',
// then add `public/CNAME` containing `luvita.com.tr` and update the sitemap URL
// in `public/robots.txt`. Every internal link is built with `withBase()`
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
