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

/** Public contact e-mail (Zoho mailbox alias on the luvita.tr domain). */
export const CONTACT_EMAIL = 'contact@luvita.tr';

/**
 * Registry numbers — filled in after trade-registry registration completes.
 * Leave empty ('') to hide the corresponding footer line.
 * (The MERSİS number is "0" + VKN + "00001", so VKN 6091474769 is
 * digits 2–11; not shown as a separate footer line by design.)
 */
export const MERSIS_NO = '0609147476900001';
export const TRADE_REGISTRY_NO = '';

export const GITHUB_URL = 'https://github.com/AnunnakiCosmoCrew';

/** Umay product site — the platform is still in development. */
export const UMAY_URL = 'https://umayconnect.org/';

/** The studio's consumer-apps brand — shipped products live under it. */
export const COSMOCREW_URL = 'https://cosmocrew.dev/';
