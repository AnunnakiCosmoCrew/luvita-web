/**
 * In-house products shown as delivery-capability proof.
 *
 * `status` is load-bearing honesty: only 'live' products may claim to be
 * shipped. Anything still in development says so on the card — this site is
 * read by enterprise prospects, so no product may be implied to exist before
 * it does.
 *
 * Every product carries a mark: the real brand mark where one exists,
 * otherwise a simple house-designed placeholder mark (full-bleed colored tile,
 * like Umay's). Icons live in src/assets/icons (astro:assets); ProductCard
 * still falls back to a letter monogram if `icon` is omitted.
 */
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';
import { COSMOCREW_URL, UMAY_URL } from '../lib/site';
import umayIcon from '../assets/icons/umay.png';
import cosmocrewIcon from '../assets/icons/cosmocrew.svg';
import luviEngineIcon from '../assets/icons/luvi-engine.svg';
import pelerinIcon from '../assets/icons/pelerin.svg';

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
 * platform bet, followed by the CosmoCrew card — the apps brand whose shipped
 * products evidence delivery — then in-development work.
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
    key: 'cosmocrew',
    name: 'CosmoCrew',
    status: 'live',
    icon: cosmocrewIcon,
    url: COSMOCREW_URL,
    copy: {
      tr: {
        tagline: 'Uygulama markamız',
        description:
          'Uygulamalarımız CosmoCrew markası altında yayınlanır: SliceFocus, LexiPower ve With Handlebars. Fikirden yayına taşınmış ve yıllardır yaşatılan ürünler.',
      },
      en: {
        tagline: 'Our apps brand',
        description:
          'Our apps ship under the CosmoCrew brand: SliceFocus, LexiPower and With Handlebars. Products taken from idea to launch — and kept alive for years.',
      },
    },
  },
  {
    key: 'luvi-engine',
    name: 'Luvi Engine',
    status: 'in-development',
    icon: luviEngineIcon,
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
  // Deliberately a teaser: what Pelerin does is not public yet, so the card
  // names it and nothing more. Do not add domain hints anywhere on the site.
  {
    key: 'pelerin',
    name: 'Pelerin',
    status: 'in-development',
    icon: pelerinIcon,
    copy: {
      tr: {
        tagline: 'Yeni bir kurumsal ürün',
        description:
          'Henüz duyurmadığımız yeni bir kurumsal ürün üzerinde çalışıyoruz. Geliştirme aşamasında; detaylar yakında.',
      },
      en: {
        tagline: 'A new enterprise product',
        description:
          'We are working on a new enterprise product we have not announced yet. Currently in development; details soon.',
      },
    },
  },
];
