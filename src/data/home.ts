/**
 * Home page copy, both locales (DESIGN.md section 9).
 *
 * The founder settled every line in both languages on 2026-11-17 (LW-67). The
 * two languages are written separately: the Turkish is not a translation of
 * the English, and in a few places they say different things on purpose (the
 * Umay line, the company block). Do not "align" one to the other.
 *
 * Product states come from src/data/products.ts and release dates from
 * src/data/releases.json; neither is written here.
 *
 * Copy floors that bind this file:
 * - Umay is written as a product in development, in the description and the
 *   rows, not only in the state line. When it ships, the copy moves to the
 *   present tense together with its `status`, in the same change.
 * - Nesili: never state or imply that no personal data crosses a border or
 *   that the customer's KVKK Article 9 duties go away (BRAND.md, claim floor).
 *   The wording follows what the product does today: Nesili Desktop, on the
 *   user's own computer, and it names only the identifiers the live product
 *   card names (products.ts). "Makes them easier to meet" is BRAND.md's own
 *   wording of the claim floor. No speed figures; the example uses invented data
 *   (a TC Kimlik number with a failing checksum, an IBAN with check digits 00,
 *   an unassigned phone number).
 * - CosmoCrew: no sentence says that we use the apps ourselves (founder, LW-67).
 * - No sentence counts the products ("three products") or criticises what a
 *   company does today (founder, LW-67).
 */
import type { Locale } from '../i18n';

export interface HomeLink {
  text: string;
  /** A locale-relative internal slug (`internal`) or an absolute URL. */
  internal?: string;
  href?: string;
}

export interface HomeProductCopy {
  /**
   * The line under the state on the board. CosmoCrew has none: its column
   * shows the three app names there instead.
   */
  problem?: string;
  link: HomeLink;
}

export interface CosmoCrewApp {
  name: string;
  url: string;
  line: Record<Locale, string>;
}

export interface HomeCopy {
  title: string;
  description: string;
  /**
   * The page's one `h1`. It is a label for screen readers and search, never
   * shown: the page has no heading sentence (founder, LW-67).
   */
  heading: string;
  boardLabel: string;
  jumpLabel: string;
  products: Record<'umay' | 'pelerin' | 'cosmocrew', HomeProductCopy>;
  umay: {
    description: string;
    rowsHeading: string;
    rows: { label: string; text: string }[];
  };
  nesili: {
    description: string;
    exampleLabels: [string, string];
  };
  cosmocrew: {
    description: string;
    appState: string;
  };
  company: {
    /** Read to screen readers when the block has no visible heading. */
    sectionLabel: string;
    /** The visible heading, or null: the Turkish block has none. */
    heading: string | null;
    paragraph: string;
    identityLabel: string;
    founded: string;
    contact: string;
    registry: string;
  };
}

/**
 * The masked example: one Turkish sentence, before and after (invented data).
 * The labels are written the way the app writes them (see its screenshot on
 * the board): a type and a number.
 */
export const NESILI_EXAMPLE = {
  before:
    'Müşteri (T.C. 12345678901) iadesinin TR00 0001 2345 6789 0123 4567 89 numaralı hesaba yatırılmasını istiyor; telefonu 0555 000 00 00.',
  after:
    'Müşteri (T.C. [TCKN_6197]) iadesinin [IBAN_3736] numaralı hesaba yatırılmasını istiyor; telefonu [PHONE_5846].',
} as const;

/** CosmoCrew's three apps (names and lines as in BRAND.md). */
export const COSMOCREW_APPS: CosmoCrewApp[] = [
  {
    name: 'SliceFocus',
    url: 'https://slicefocus.app/',
    line: {
      en: 'A 24-hour radial planner with a focus timer.',
      tr: 'Odak sayaçlı, 24 saatlik dairesel planlayıcı.',
    },
  },
  {
    name: 'LexiPower',
    url: 'https://lexipower.app/',
    line: {
      en: 'A vocabulary notebook with spaced repetition.',
      tr: 'Aralıklı tekrarla çalışan kelime defteri.',
    },
  },
  {
    name: 'With Handlebars',
    url: 'https://withhandlebars.com/',
    line: {
      en: 'A fretboard explorer for guitar chords and scales.',
      tr: 'Gitar perdelerinde akorları ve gamları gösteren uygulama.',
    },
  },
];

export const home: Record<Locale, HomeCopy> = {
  en: {
    title: 'Luvita',
    description:
      'Luvita makes Umay, Nesili and the CosmoCrew apps, and stays with them for years.',
    heading: 'Luvita products',
    boardLabel: 'Our products',
    jumpLabel: 'Products on this page',
    products: {
      umay: {
        problem: 'Give every caller an answer on the first call, at any hour.',
        // The live demo request form on Umay's own site.
        link: { text: 'Ask for a demo', href: 'https://umayconnect.org/en/#slotReq' },
      },
      pelerin: {
        problem: 'Protect your customers\' details when your team uses AI.',
        link: { text: 'Ask about the pilot', internal: 'contact' },
      },
      cosmocrew: {
        link: { text: 'Visit cosmocrew.dev', href: 'https://cosmocrew.dev/' },
      },
    },
    umay: {
      description:
        'Umay is in development: AI customer service built to be ready on day one. It is being built to answer every call, speak natural Turkish, and settle the caller\'s request in the same call. When you need it changed, you will call us. It will never pretend to be a person. You can try the demo in your own time.',
      rowsHeading: 'What the service will include',
      rows: [
        {
          label: 'Fixes',
          text: 'Always free. If Umay gets something wrong, we will find the cause and correct it.',
        },
        {
          label: 'Changes',
          text: 'Changes to what Umay already handles will be included in your plan, up to its limit.',
        },
        {
          label: 'New work',
          text: 'A new department, language or system connection will be priced separately, before we start.',
        },
      ],
    },
    nesili: {
      description:
        'Nesili runs on your own computer and masks TC Kimlik numbers, IBANs, phone numbers and addresses in Turkish text before it reaches the AI model. The raw personal identifiers stay with you. Your legal duties for sending data abroad remain, and Nesili makes them easier to meet.',
      exampleLabels: ['What your team writes', 'What the AI model receives'],
    },
    cosmocrew: {
      description: 'Our apps for people working on themselves.',
      appState: 'Live on the App Store',
    },
    company: {
      sectionLabel: 'Company',
      heading: 'Software built to run for decades.',
      paragraph:
        'We make software for real problems, and we stay with it for years. Each product is built for a problem someone has today, and each one is still looked after long after the day it ships.',
      identityLabel: 'Company details',
      founded: 'Founded',
      contact: 'Contact',
      registry: 'Registry details',
    },
  },
  tr: {
    title: 'Luvita',
    description:
      "Luvita; Umay'ı, Nesili'yi ve CosmoCrew uygulamalarını yapıyor ve yıllarca arkasında duruyor.",
    heading: 'Luvita ürünleri',
    boardLabel: 'Ürünlerimiz',
    jumpLabel: 'Bu sayfadaki ürünler',
    products: {
      umay: {
        problem:
          'Her çağrı günün her saatinde, doğal bir Türkçeyle yanıtlansın.',
        link: { text: 'Demo isteyin', href: 'https://umayconnect.org/#slotReq' },
      },
      pelerin: {
        problem:
          'Ekibiniz yapay zekâ kullanırken müşteri bilgilerini koruyun.',
        link: { text: 'Pilot hakkında sorun', internal: 'iletisim' },
      },
      cosmocrew: {
        link: { text: "cosmocrew.dev'e gidin", href: 'https://cosmocrew.dev/' },
      },
    },
    umay: {
      description:
        'Umay geliştirme aşamasında: ilk günden hazır olacak biçimde tasarlanan yapay zekâ müşteri hizmeti. Her çağrıyı yanıtlamak, doğal Türkçe konuşmak ve arayanın işini aynı görüşmede sonuçlandırmak üzere geliştiriliyor. Bir şeyin değişmesi gerektiğinde bizi arayacaksınız. Kendini hiçbir zaman insan olarak tanıtmayacak. Demoyu kendi zamanınızda deneyebilirsiniz.',
      rowsHeading: 'Hizmet neleri kapsayacak',
      rows: [
        {
          label: 'Düzeltmeler',
          text: 'Her zaman ücretsiz. Umay bir şeyi yanlış yaparsa nedenini bulup düzelteceğiz.',
        },
        {
          label: 'Değişiklikler',
          text: "Umay'ın zaten yaptığı işlerdeki değişiklikler planınıza dahil olacak; üst sınırı planınız belirleyecek.",
        },
        {
          label: 'Yeni işler',
          text: 'Yeni bir bölüm, dil ya da sistem bağlantısı ayrıca fiyatlandırılacak; fiyatı işe başlamadan önce söyleyeceğiz.',
        },
      ],
    },
    nesili: {
      description:
        "Nesili kendi bilgisayarınızda çalışır; Türkçe metindeki TC Kimlik numaralarını, IBAN'ları, telefon numaralarını ve adresleri, metin yapay zekâ modeline ulaşmadan önce maskeler. Ham kimlik bilgileri bilgisayarınızda kalır. Yurt dışına veri aktarımına ilişkin yasal yükümlülükleriniz devam eder; Nesili bunları yerine getirmeyi kolaylaştırır.",
      exampleLabels: ['Ekibinizin yazdığı metin', 'Yapay zekâ modeline giden metin'],
    },
    cosmocrew: {
      description: 'Kendini geliştirmek isteyenler için uygulamalarımız.',
      appState: "App Store'da yayında",
    },
    company: {
      sectionLabel: 'Şirket',
      // No visible heading in Turkish, and one sentence (founder, LW-67).
      heading: null,
      paragraph:
        'Ürünlerin her biri gerçek bir ihtiyaçtan doğdu; hepsinin yıllarca arkasındayız.',
      identityLabel: 'Şirket bilgileri',
      founded: 'Kuruluş',
      contact: 'İletişim',
      registry: 'Sicil bilgileri',
    },
  },
};
