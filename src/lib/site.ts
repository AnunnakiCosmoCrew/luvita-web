/**
 * Company identity & shared constants.
 *
 * The full trade name (which includes "ENERJİ") appears ONLY in the footer
 * legal-identity block — a legal requirement. The site body presents the
 * company purely as a software house under the short brand "Luvita".
 */

/** Short brand used everywhere on the site. */
export const BRAND = 'Luvita';

/** Full registered trade name — footer legal block only. */
export const LEGAL_NAME =
  'Luvita Teknoloji Enerji Yazılım Sanayi ve Ticaret Limited Şirketi';

/** Registered office address. */
export const ADDRESS =
  'Gündoğan Mah. Kızılburun Cad. Yalıkent Sitesi No: 69/25 Bodrum / Muğla';

/**
 * Public contact e-mail. Interim address until luvita.com.tr is registered
 * and info@luvita.com.tr is routed (Cloudflare Email Routing) — then update
 * this single constant.
 */
export const CONTACT_EMAIL = 'contact@cosmocrew.dev';

/**
 * Registry numbers — filled in after trade-registry registration completes.
 * Leave empty ('') to hide the corresponding footer line.
 */
export const MERSIS_NO = '';
export const TRADE_REGISTRY_NO = '';

export const GITHUB_URL = 'https://github.com/AnunnakiCosmoCrew';

export const APP_STORE = {
  slicefocus: 'https://apps.apple.com/app/id6761280632',
  lexipower: 'https://apps.apple.com/app/id6766093282',
} as const;
