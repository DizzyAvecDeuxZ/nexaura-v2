import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traductions définies directement (évite les problèmes d'import JSON)
const frTranslations = {
  nav: {
    home: "Accueil",
    digital: "Digital",
    consulting: "Consulting",
    about: "À propos",
    contact: "Contact"
  },
  hero: {
    title: "Nexaura",
    description: "Nexaura accompagne les entreprises dans leur transformation digitale, du développement d'applications mobiles à l'intégration de l'IA dans leurs processus métier."
  },
  cards: {
    digital: {
      title: "Nexaura Digital",
      tagline: "Votre présence digitale, optimisée par la data",
      description: "Applications mobiles iOS & Android, maintenance & support",
      stats: {
        responsive: "100% responsive",
        seo: "SEO natif",
        support: "Maintenance & support inclus"
      },
      cta: "Découvrir nos solutions"
    },
    consulting: {
      title: "Nexaura Consulting",
      tagline: "L'intelligence artificielle au service de vos décisions",
      description: "Intelligence artificielle, automatisation, transformation",
      stats: {
        roi: "ROI mesurable",
        automation: "Automatisation 24/7",
        predictions: "Prédictions temps réel"
      },
      cta: "Auditer mon projet"
    }
  },
  cta: {
    question: "Votre projet ne rentre dans aucune case ?",
    button: "Parlons-en"
  },
  footer: {
    digital: "Digital",
    consulting: "Consulting",
    about: "À propos",
    rights: "Tous droits réservés."
  }
};

const enTranslations = {
  nav: {
    home: "Home",
    digital: "Digital",
    consulting: "Consulting",
    about: "About",
    contact: "Contact"
  },
  hero: {
    title: "Nexaura",
    description: "Nexaura helps businesses in their digital transformation, from mobile app development to integrating AI into their business processes."
  },
  cards: {
    digital: {
      title: "Nexaura Digital",
      tagline: "Your digital presence, optimized by data",
      description: "Mobile apps iOS & Android, maintenance & support",
      stats: {
        responsive: "100% responsive",
        seo: "Native SEO",
        support: "Maintenance & support included"
      },
      cta: "Discover our solutions"
    },
    consulting: {
      title: "Nexaura Consulting",
      tagline: "Artificial intelligence at the service of your decisions",
      description: "Artificial intelligence, automation, transformation",
      stats: {
        roi: "Measurable ROI",
        automation: "Automation 24/7",
        predictions: "Real-time predictions"
      },
      cta: "Audit my project"
    }
  },
  cta: {
    question: "Your project doesn't fit any category?",
    button: "Let's talk"
  },
  footer: {
    digital: "Digital",
    consulting: "Consulting",
    about: "About",
    rights: "All rights reserved."
  }
};

const arTranslations = {
  nav: {
    home: "الرئيسية",
    digital: "الرقمية",
    consulting: "الاستشارات",
    about: "من نحن",
    contact: "اتصل بنا"
  },
  hero: {
    title: "نيكسورا",
    description: "ترافق نيكسورا الشركات في تحولها الرقمي، من تطوير تطبيقات الجوال إلى دمج الذكاء الاصطناعي في عملياتها التجارية."
  },
  cards: {
    digital: {
      title: "نيكسورا الرقمية",
      tagline: "presenceك الرقمية، محسّنة بالبيانات",
      description: "تطبيقات الجوال iOS و Android، الصيانة والدعم",
      stats: {
        responsive: "100% متجاوب",
        seo: "SEO مدمج",
        support: "صيانة ودعم شامل"
      },
      cta: "اكتشف حلولنا"
    },
    consulting: {
      title: "نيكسورا الاستشارية",
      tagline: "الذكاء الاصطناعي في خدمة قراراتك",
      description: "ذكاء اصطناعي، أتمتة، تحول رقمي",
      stats: {
        roi: "عائد استثمار قابل للقياس",
        automation: "أتمتة 24/7",
        predictions: "تنبؤات في الوقت الفعلي"
      },
      cta: "قم بتدقيق مشروعي"
    }
  },
  cta: {
    question: "مشروعك لا يتناسب مع أي فئة؟",
    button: "لنتحدث"
  },
  footer: {
    digital: "الرقمية",
    consulting: "الاستشارات",
    about: "من نحن",
    rights: "جميع الحقوق محفوظة."
  }
};

const resources = {
  fr: { translation: frTranslations },
  en: { translation: enTranslations },
  ar: { translation: arTranslations }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    lng: "fr",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
