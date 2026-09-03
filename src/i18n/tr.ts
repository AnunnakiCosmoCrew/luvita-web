export interface Dictionary {
  siteName: string;
  skipToContent: string;
  nav: {
    products: string;
    about: string;
    contact: string;
    home: string;
    primary: string;
    switchLocale: string;
    switchLocaleLabel: string;
  };
  products: {
    live: string;
    inDevelopment: string;
  };
  footer: {
    tagline: string;
    nav: string;
    products: string;
    about: string;
    contact: string;
    privacy: string;
    kvkk: string;
    rights: string;
    mersis: string;
    tradeRegistry: string;
  };
  notFound: {
    title: string;
    lead: string;
    back: string;
  };
}

export const tr: Dictionary = {
  siteName: 'Luvita',
  skipToContent: 'İçeriğe geç',
  nav: {
    products: 'Ürünler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    home: 'Luvita — ana sayfa',
    primary: 'Ana gezinme',
    switchLocale: 'English',
    switchLocaleLabel: 'Bu sayfayı İngilizce görüntüle',
  },
  products: {
    live: 'Yayında',
    inDevelopment: 'Geliştiriliyor',
  },
  footer: {
    tagline: 'Kendi yazılım ürünlerini geliştiren bağımsız bir şirket.',
    nav: 'Alt gezinme',
    products: 'Ürünler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    privacy: 'Gizlilik',
    kvkk: 'KVKK Aydınlatma Metni',
    rights: 'Tüm hakları saklıdır.',
    mersis: 'MERSİS No',
    tradeRegistry: 'Ticaret Sicil No',
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    lead: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.',
    back: 'Ana sayfaya dön',
  },
};
