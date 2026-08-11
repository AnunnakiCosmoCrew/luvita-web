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
