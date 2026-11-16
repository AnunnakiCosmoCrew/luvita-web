/**
 * Home page copy, both locales (DESIGN.md section 9).
 *
 * English is the settled wording. Turkish is the draft from DESIGN.md for the
 * founder to correct in review (LW-67); "atölye" is the proposed word for
 * "workshop".
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
 *   user's own computer. No speed figures; the example uses invented data
 *   (a TC Kimlik number with a failing checksum, an IBAN with check digits 00).
 * - CosmoCrew: "made by people who use them every day" is left out until the
 *   founder confirms it of all three apps (DESIGN.md section 12, point 5).
 */
import type { Locale } from '../i18n';

export interface HomeLink {
  text: string;
  /** A locale-relative internal slug (`internal`) or an absolute URL. */
  internal?: string;
  href?: string;
}

export interface HomeProductCopy {
  problem: string;
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
    heading: string;
    paragraph: string;
    identityLabel: string;
    founded: string;
    contact: string;
    registry: string;
  };
}

/** The masked example: one Turkish sentence, before and after (invented data). */
export const NESILI_EXAMPLE = {
  before:
    'Selin Arıkan (T.C. 12345678901) iadesinin TR00 0001 2345 6789 0123 4567 89 numaralı hesaba yatırılmasını istiyor.',
  after:
    '[AD_1] (T.C. [TCKN_1]) iadesinin [IBAN_1] numaralı hesaba yatırılmasını istiyor.',
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
      tr: 'Gitar akorları ve gamları için klavye gezgini.',
    },
  },
];

export const home: Record<Locale, HomeCopy> = {
  en: {
    title: 'Luvita — Software product company',
    description:
      'Luvita makes three products, Umay, Nesili and the CosmoCrew apps, and keeps them running long after they ship.',
    heading:
      'Three products, made, tested and kept running by the same workshop.',
    boardLabel: 'Our products',
    jumpLabel: 'Products on this page',
    products: {
      umay: {
        problem:
          'Your callers wait for a person, because the bot cannot finish the job.',
        link: { text: 'Ask for a demo', internal: 'contact' },
      },
      pelerin: {
        problem: 'You want to use AI on customer data, and you were told no.',
        link: { text: 'Start a trial', internal: 'plans' },
      },
      cosmocrew: {
        problem:
          'You open your phone without deciding to, and the day is gone.',
        link: { text: 'Visit cosmocrew.dev', href: 'https://cosmocrew.dev/' },
      },
    },
    umay: {
      description:
        'Umay is in development: AI customer service built to be ready on day one. It is being built to answer every call, speak natural Turkish, and resolve what your current bot hands to a person. When you need it changed, you will call us. It will never pretend to be a person. A demo is available on request.',
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
        'Nesili runs on your own computer and replaces names, ID numbers, IBANs and addresses in Turkish text before it reaches the AI model. The raw personal identifiers stay with you. Your legal duties for sending data abroad remain, and Nesili makes them easier to meet.',
      exampleLabels: ['What your colleague writes', 'What the AI model receives'],
    },
    cosmocrew: {
      description: 'Our apps for people working on themselves.',
      appState: 'Live on the App Store',
    },
    company: {
      heading: 'Software for the next decade.',
      paragraph:
        'We make a few products and stay with them. Each one is built for a problem someone has today, and each one is still looked after long after the day it ships.',
      identityLabel: 'Company details',
      founded: 'Founded',
      contact: 'Contact',
      registry: 'Registry details',
    },
  },
  tr: {
    title: 'Luvita — Yazılım ürünleri şirketi',
    description:
      'Luvita üç ürün yapıyor (Umay, Nesili ve CosmoCrew uygulamaları) ve onları yayından çok sonra da çalışır durumda tutuyor.',
    heading:
      'Üç ürün. Hepsini aynı atölye yapıyor, sınıyor ve çalışır durumda tutuyor.',
    boardLabel: 'Ürünlerimiz',
    jumpLabel: 'Bu sayfadaki ürünler',
    products: {
      umay: {
        problem:
          'Arayan müşteriniz yine bir insanı bekliyor, çünkü bot işi bitiremiyor.',
        link: { text: 'Demo isteyin', internal: 'iletisim' },
      },
      pelerin: {
        problem:
          'Müşteri verisiyle yapay zekâ kullanmak istediniz, size "olmaz" dendi.',
        link: { text: 'Denemeye başlayın', internal: 'planlar' },
      },
      cosmocrew: {
        problem:
          'Telefonu, karar vermeden elinize alıyorsunuz; gün de öyle geçip gidiyor.',
        link: { text: "cosmocrew.dev'e gidin", href: 'https://cosmocrew.dev/' },
      },
    },
    umay: {
      description:
        'Umay geliştirme aşamasında: ilk günden hazır olacak biçimde tasarlanan yapay zekâ müşteri hizmeti. Her çağrıyı yanıtlamak, doğal Türkçe konuşmak ve bugünkü botunuzun insana devrettiği işi kendisi sonuçlandırmak üzere geliştiriliyor. Bir şeyin değişmesi gerektiğinde bizi arayacaksınız. Kendini asla insan gibi tanıtmayacak. Demo talep edebilirsiniz.',
      rowsHeading: 'Hizmet neleri kapsayacak',
      rows: [
        {
          label: 'Düzeltmeler',
          text: 'Her zaman ücretsiz. Umay bir şeyi yanlış yaparsa nedenini bulup düzelteceğiz.',
        },
        {
          label: 'Değişiklikler',
          text: "Umay'ın yürüttüğü işlerdeki değişiklikler, planınızın sınırı içinde ücrete dahil olacak.",
        },
        {
          label: 'Yeni işler',
          text: 'Yeni bir bölüm, dil ya da sistem bağlantısı ayrıca fiyatlandırılacak; fiyatı işe başlamadan önce söyleyeceğiz.',
        },
      ],
    },
    nesili: {
      description:
        "Nesili kendi bilgisayarınızda çalışır; Türkçe metindeki adları, kimlik numaralarını, IBAN'ları ve adresleri, metin yapay zekâ modeline ulaşmadan önce değiştirir. Ham kişisel bilgiler sizde kalır. Yurt dışına veri aktarımına ilişkin yasal yükümlülükleriniz sürer; Nesili bunları yerine getirmeyi kolaylaştırır.",
      exampleLabels: ['Çalışanınızın yazdığı', 'Yapay zekâ modeline giden'],
    },
    cosmocrew: {
      description: 'Kendileri üzerinde çalışan insanlar için uygulamalarımız.',
      appState: "App Store'da yayında",
    },
    company: {
      heading: 'Sıradaki on yıl için yazılım.',
      paragraph:
        'Az sayıda ürün yapıyor ve onların başında kalıyoruz. Her biri, birinin bugün yaşadığı bir sorun için yapıldı; her birine, yayınlandığı günden çok sonra da bakılıyor.',
      identityLabel: 'Şirket bilgileri',
      founded: 'Kuruluş',
      contact: 'İletişim',
      registry: 'Sicil bilgileri',
    },
  },
};
