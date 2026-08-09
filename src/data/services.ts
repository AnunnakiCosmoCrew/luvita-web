/**
 * Service catalogue, one entry per offering with copy for both locales.
 * A plain TS module (not a content collection): four entries × two locales
 * doesn't warrant collection machinery. Revisit if services grow markdown
 * bodies or per-service pages.
 */
import type { Locale } from '../i18n';

export interface ServiceCopy {
  title: string;
  summary: string;
  points: string[];
}

export interface Service {
  key: string;
  copy: Record<Locale, ServiceCopy>;
}

export const services: Service[] = [
  {
    key: 'custom-software',
    copy: {
      tr: {
        title: 'Özel Yazılım Geliştirme',
        summary:
          'İş süreçlerinize göre tasarlanan, üretim kalitesinde arka uç ve mobil uygulamalar.',
        points: [
          'Java / Spring Boot ile kurumsal arka uç servisleri',
          'Flutter ile iOS, Android ve masaüstü uygulamaları',
          'Bulut mimarileri (GCP) ve konteyner tabanlı dağıtım',
        ],
      },
      en: {
        title: 'Custom Software Development',
        summary:
          'Production-grade backend services and mobile applications, designed around your business processes.',
        points: [
          'Enterprise backend services with Java / Spring Boot',
          'iOS, Android and desktop apps with Flutter',
          'Cloud architectures (GCP) and container-based delivery',
        ],
      },
    },
  },
  {
    key: 'integration',
    copy: {
      tr: {
        title: 'Sistem Entegrasyonu',
        summary:
          'Mevcut kurumsal sistemlerinizi güvenli ve sürdürülebilir API katmanlarıyla birbirine bağlıyoruz.',
        points: [
          'REST API tasarımı ve sözleşme öncelikli geliştirme',
          'Eski sistemlerle (legacy) entegrasyon ve veri taşıma',
          'Kimlik doğrulama ve yetkilendirme entegrasyonları',
        ],
      },
      en: {
        title: 'System Integration',
        summary:
          'We connect your existing enterprise systems through secure, maintainable API layers.',
        points: [
          'REST API design and contract-first development',
          'Legacy system integration and data migration',
          'Authentication and authorization integrations',
        ],
      },
    },
  },
  {
    key: 'consulting',
    copy: {
      tr: {
        title: 'Teknik Danışmanlık',
        summary:
          'Mimari kararlardan kod kalitesine, yazılım yatırımlarınızın doğru kurulmasına eşlik ediyoruz.',
        points: [
          'Yazılım mimarisi değerlendirme ve tasarım',
          'Kod kalitesi, test stratejisi ve CI/CD kurulumu',
          'Teknoloji seçimi ve yol haritası danışmanlığı',
        ],
      },
      en: {
        title: 'Technical Consulting',
        summary:
          'From architecture decisions to code quality, we help you set up your software investments right.',
        points: [
          'Software architecture assessment and design',
          'Code quality, test strategy and CI/CD setup',
          'Technology selection and roadmap advisory',
        ],
      },
    },
  },
  {
    key: 'support',
    copy: {
      tr: {
        title: 'Bakım ve Destek',
        summary:
          'Teslimattan sonra da yanınızdayız: izleme, sürüm yönetimi ve anlaşmalı destek süreçleri.',
        points: [
          'SLA tabanlı bakım ve destek anlaşmaları',
          'İzleme, günlükleme ve olay müdahalesi',
          'Sürüm yönetimi ve güvenlik güncellemeleri',
        ],
      },
      en: {
        title: 'Maintenance & Support',
        summary:
          'We stay with you after delivery: monitoring, release management and contracted support.',
        points: [
          'SLA-based maintenance and support agreements',
          'Monitoring, logging and incident response',
          'Release management and security updates',
        ],
      },
    },
  },
];
