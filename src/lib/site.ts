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

/**
 * Public location, city level only.
 *
 * The registered office is currently a residential address, so the street
 * detail is deliberately NOT published: on a site read by banks it reads as
 * unprofessional, and it exposes a home. This is presentation, not secrecy —
 * the registered address remains publicly available through the trade
 * registry (Ticaret Sicil Gazetesi / MERSİS). Replace this with the full
 * address once the company has an office or a virtual-office address.
 */
export const LOCATION = 'Bodrum, Muğla / Türkiye';

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
