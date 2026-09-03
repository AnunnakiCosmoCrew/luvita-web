/**
 * Minimal i18n layer for the shared chrome (nav, footer, 404, meta).
 *
 * Page copy itself lives inline in the parallel page trees under
 * `src/pages/tr/` and `src/pages/en/` — only strings shared across pages are
 * extracted here. Each page declares its own path pair (see `PagePaths` in
 * BaseLayout) so the language switcher and hreflang alternates always point at
 * the true sibling page, even when slugs differ (urunler ↔ products).
 */
import { tr, type Dictionary } from './tr';
import { en } from './en';
import { withBase } from '../lib/url';

export const LOCALES = ['tr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'tr';

const dictionaries = { tr, en } as const;
export type { Dictionary } from './tr';

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/**
 * Base-aware URL for a locale-prefixed internal path.
 * `localizedPath('tr', 'urunler')` → `<base>/tr/urunler/`;
 * an empty path returns the locale home.
 */
export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return withBase(clean === '' ? locale : `${locale}/${clean}`);
}

/** BCP 47 tag for hreflang/og:locale. */
export function bcp47(locale: Locale): string {
  return locale === 'tr' ? 'tr-TR' : 'en-US';
}
