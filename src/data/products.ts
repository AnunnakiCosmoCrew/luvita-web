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
import { TRIAL_DAYS } from '../lib/pelerin-plans';
import umayIcon from '../assets/icons/umay.png';
import cosmocrewIcon from '../assets/icons/cosmocrew.svg';
import pelerinIcon from '../assets/icons/pelerin.svg';

export type ProductStatus = 'live' | 'in-development';

export interface ProductCopy {
  tagline: string;
  description: string;
}

/** A real screen of the product (DESIGN.md section 5). Never invented. */
export interface ProductScreen {
  src: ImageMetadata;
  /** What the screen shows, per locale. */
  alt: Record<Locale, string>;
}

export interface Product {
  key: string;
  name: string;
  status: ProductStatus;
  /**
   * The state shown in the product's state line on the home page
   * (DESIGN.md section 6). Must agree with `status`: an in-development
   * product says so here too. The release date is added from
   * src/data/releases.json, never written here.
   */
  state: Record<Locale, string>;
  /**
   * A real screen for the home page board. Absent until one exists: the board
   * then shows the product's mark large in its place, never an empty frame.
   */
  screen?: ProductScreen;
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
    state: {
      en: 'In development · demo on request',
      tr: 'Geliştirme aşamasında · demo istenebilir',
    },
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
    state: {
      en: 'Three apps live',
      tr: 'Üç uygulama yayında',
    },
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
  // Nesili Desktop (formerly Pelerin Desktop) is in pilot, so the card says what it does and that it is
  // still in development (status stays 'in-development'; only a general
  // release makes it 'live'). The claim floor binds every word: raw identifiers
  // stay on the user's computer and the risk in what is sent drops materially;
  // the customer's own KVKK Art. 9 basis is still required. No speed figures.
  // HELD (luvita-web#39, Pelerin-docs#251): do not merge before the founder
  // releases the plans page; the card and the plans page go live together.
  {
    key: 'pelerin',
    name: 'Nesili',
    status: 'in-development',
    state: {
      en: 'In pilot on Windows',
      tr: "Windows'ta pilot aşamasında",
    },
    icon: pelerinIcon,
    copy: {
      tr: {
        tagline: 'Türkçe kişisel verileri bilgisayarınızda maskeler',
        description:
          `Nesili Masaüstü, yapay zekâ aracına yapıştıracağınız metindeki TC Kimlik numarası, IBAN, telefon ve adres gibi bilgileri kendi bilgisayarınızda maskeler; cevabı geri yapıştırdığınızda gerçek değerleri yerine koyar. Ham kimlik bilgileri bilgisayarınızda kalır, gönderdiğiniz metindeki risk belirgin biçimde azalır; KVKK 9. madde kapsamındaki hukuki dayanağınız yine sizindir. Windows için pilot aşamasında; ${TRIAL_DAYS} günlük denemeyle başlar.`,
      },
      en: {
        tagline: 'Masks Turkish personal data on your own computer',
        description:
          `Nesili Desktop masks identifiers such as TC Kimlik numbers, IBANs, phone numbers and addresses in text you paste, on your own computer, before you use an AI tool, and restores the real values when you paste the answer back. Raw identifiers stay on your computer and the risk in the text you send drops materially; your own legal basis under KVKK Article 9 remains yours. In pilot on Windows; starts with a ${TRIAL_DAYS}-day trial.`,
      },
    },
  },
];
