import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const translations = {
  fr: {
    nav: { home: "Accueil", digital: "Digital", consulting: "Consulting", about: "À propos", contact: "Contact" },
    hero: {
      title: "Nexaura",
      description: "Nexaura accompagne les entreprises dans leur transformation digitale, de la création de sites web performants à l'intégration de l'IA dans leurs processus métier."
    },
    cards: {
      digital: {
        title: "Nexaura Digital",
        tagline: "Votre présence digitale, optimisée par la data",
        description: "Sites web, applications mobiles, e-commerce",
        stats: { responsive: "100% responsive", seo: "SEO natif", support: "Maintenance & support inclus" },
        cta: "Découvrir nos solutions"
      },
      consulting: {
        title: "Nexaura Consulting",
        tagline: "L'intelligence artificielle au service de vos décisions",
        description: "Intelligence artificielle, automatisation, transformation",
        stats: { roi: "ROI mesurable", automation: "Automatisation 24/7", predictions: "Prédictions temps réel" },
        cta: "Auditer mon projet"
      }
    },
    cta: { question: "Votre projet ne rentre dans aucune case ?", button: "Parlons-en" },
    footer: { digital: "Digital", consulting: "Consulting", about: "À propos", rights: "Tous droits réservés." }
  },
  en: {
    nav: { home: "Home", digital: "Digital", consulting: "Consulting", about: "About", contact: "Contact" },
    hero: {
      title: "Nexaura",
      description: "Nexaura helps businesses in their digital transformation, from creating high-performance websites to integrating AI into their business processes."
    },
    cards: {
      digital: {
        title: "Nexaura Digital",
        tagline: "Your digital presence, optimized by data",
        description: "Websites, mobile applications, e-commerce",
        stats: { responsive: "100% responsive", seo: "Native SEO", support: "Maintenance & support included" },
        cta: "Discover our solutions"
      },
      consulting: {
        title: "Nexaura Consulting",
        tagline: "Artificial intelligence at the service of your decisions",
        description: "Artificial intelligence, automation, transformation",
        stats: { roi: "Measurable ROI", automation: "Automation 24/7", predictions: "Real-time predictions" },
        cta: "Audit my project"
      }
    },
    cta: { question: "Your project doesn't fit any category?", button: "Let's talk" },
    footer: { digital: "Digital", consulting: "Consulting", about: "About", rights: "All rights reserved." }
  },
  ar: {
    nav: { home: "الرئيسية", digital: "الرقمية", consulting: "الاستشارات", about: "من نحن", contact: "اتصل بنا" },
    hero: {
      title: "نيكسورا",
      description: "ترافق نيكسورا الشركات في تحولها الرقمي، من إنشاء مواقع ويب عالية الأداء إلى دمج الذكاء الاصطناعي في عملياتها التجارية."
    },
    cards: {
      digital: {
        title: "نيكسورا الرقمية",
        tagline: "presenceك الرقمية، محسّنة بالبيانات",
        description: "مواقع الويب، تطبيقات الجوال، التجارة الإلكترونية",
        stats: { responsive: "100% متجاوب", seo: "SEO مدمج", support: "صيانة ودعم شامل" },
        cta: "اكتشف حلولنا"
      },
      consulting: {
        title: "نيكسورا الاستشارية",
        tagline: "الذكاء الاصطناعي في خدمة قراراتك",
        description: "ذكاء اصطناعي، أتمتة، تحول رقمي",
        stats: { roi: "عائد استثمار قابل للقياس", automation: "أتمتة 24/7", predictions: "تنبؤات في الوقت الفعلي" },
        cta: "قم بتدقيق مشروعي"
      }
    },
    cta: { question: "مشروعك لا يتناسب مع أي فئة؟", button: "لنتحدث" },
    footer: { digital: "الرقمية", consulting: "الاستشارات", about: "من نحن", rights: "جميع الحقوق محفوظة." }
  }
};

type Lang = 'fr' | 'en' | 'ar';

interface TranslationContextType {
  t: (key: string) => string;
  lang: Lang;
  setLang: (lang: Lang) => void;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved && ['fr', 'en', 'ar'].includes(saved)) return saved;
    }
    return 'fr';
  });

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang, isRTL]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    return typeof value === 'string' ? value : key;
  }, [lang]);

  return (
    <TranslationContext.Provider value={{ t, lang, setLang, isRTL }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
