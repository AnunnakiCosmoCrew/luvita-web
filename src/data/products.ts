/**
 * In-house products shown as delivery-capability proof. Icons live in
 * src/assets/icons and go through astro:assets in ProductCard.
 */
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';
import { APP_STORE } from '../lib/site';
import slicefocusIcon from '../assets/icons/slicefocus.png';
import lexipowerIcon from '../assets/icons/lexipower.png';

export interface ProductCopy {
  tagline: string;
  description: string;
}

export interface Product {
  key: string;
  name: string;
  icon: ImageMetadata;
  appStoreUrl: string;
  copy: Record<Locale, ProductCopy>;
}

export const products: Product[] = [
  {
    key: 'slicefocus',
    name: 'SliceFocus',
    icon: slicefocusIcon,
    appStoreUrl: APP_STORE.slicefocus,
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
    icon: lexipowerIcon,
    appStoreUrl: APP_STORE.lexipower,
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
];
