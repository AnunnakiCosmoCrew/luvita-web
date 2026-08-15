/**
 * In-house products shown as delivery-capability proof.
 *
 * `status` is load-bearing honesty: only 'live' products may claim to be
 * shipped. Anything still in development says so on the card — this site is
 * read by enterprise prospects, so no product may be implied to exist before
 * it does.
 *
 * `icon` is optional; ProductCard falls back to a letter monogram rather than
 * inventing a logo. Icons live in src/assets/icons (astro:assets).
 */
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';
import { APP_STORE, UMAY_URL } from '../lib/site';
import umayIcon from '../assets/icons/umay.png';
import slicefocusIcon from '../assets/icons/slicefocus.png';
import lexipowerIcon from '../assets/icons/lexipower.png';

export type ProductStatus = 'live' | 'in-development';

export interface ProductCopy {
  tagline: string;
  description: string;
}

export interface Product {
  key: string;
  name: string;
  status: ProductStatus;
  icon?: ImageMetadata;
  /**
   * Public link (App Store, product site). A link does not imply 'live' — an
   * in-development product may already have a site.
   */
  url?: string;
  copy: Record<Locale, ProductCopy>;
}

/**
 * Order is editorial, not chronological: Umay leads as the studio's flagship
 * platform bet, followed by the shipped apps that evidence delivery.
 */
export const products: Product[] = [
  {
    key: 'umay',
    name: 'Umay',
    status: 'in-development',
    icon: umayIcon,
    url: UMAY_URL,
    copy: {
      tr: {
        tagline: 'Türkçe öncelikli yapay zekâ ajanı platformu',
        description:
          'İşletmelerin müşterileriyle olan iletişimini doğal Türkçe konuşan yapay zekâ ajanlarıyla yürüten, gerektiğinde insana devreden programlanabilir bir platform. Randevu, sipariş ve talep akışları iş sistemlerinize bağlanır. Geliştirme aşamasında; demo talep edilebilir.',
      },
      en: {
        tagline: 'Turkish-first AI agent platform',
        description:
          'A programmable platform where AI agents handle your customer conversations in natural Turkish, act in your business systems for bookings, orders and tickets, and hand off to a human when needed. Currently in development; demos available on request.',
      },
    },
  },
  {
    key: 'slicefocus',
    name: 'SliceFocus',
    status: 'live',
    icon: slicefocusIcon,
    url: APP_STORE.slicefocus,
    copy: {
      tr: {
        tagline: 'Dairesel 24 saat planlayıcı',
        description:
          'Gerçek zamanlı senkronizasyon ve iOS Live Activity destekli günlük planlama ve odak uygulaması. iOS ve macOS App Store’da yayında.',
      },
      en: {
        tagline: 'Radial 24-hour day planner',
        description:
          'A daily planning and focus app with real-time sync and iOS Live Activity support. Live on the iOS and macOS App Stores.',
      },
    },
  },
  {
    key: 'lexipower',
    name: 'LexiPower',
    status: 'live',
    icon: lexipowerIcon,
    url: APP_STORE.lexipower,
    copy: {
      tr: {
        tagline: 'Kelime defteri ve aralıklı tekrar',
        description:
          'Yerel öncelikli (offline-first) mimariyle çalışan kelime öğrenme ve aralıklı tekrar uygulaması. App Store’da yayında.',
      },
      en: {
        tagline: 'Vocabulary notebook with spaced repetition',
        description:
          'A vocabulary learning app with an offline-first architecture and a spaced-repetition quiz engine. Live on the App Store.',
      },
    },
  },
  {
    key: 'luvi-engine',
    name: 'Luvi Engine',
    status: 'in-development',
    copy: {
      tr: {
        tagline: 'Saha keşif ve teklif motoru',
        description:
          'Enerji sistemleri kuran ekipler için, sahada internet olmadan çalışan bir keşif ve teklif uygulaması: saniyeler içinde aralık tahmini, dakikalar içinde iki dilli PDF teklif. Türkiye’ye özgü tarife ve teşvik kuralları hesap motoruna gömülüdür. Geliştirme aşamasında.',
      },
      en: {
        tagline: 'Field survey & quotation engine',
        description:
          'An offline-first survey and quoting app for teams that install energy systems: a ballpark range in seconds, a firmed bilingual PDF quote in minutes. Türkiye-specific tariff and incentive rules are built into the calculation engine. Currently in development.',
      },
    },
  },
];
