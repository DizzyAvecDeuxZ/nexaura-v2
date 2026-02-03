import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from "lucide-react";

const languages = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇸🇦" },
];

type Lang = 'fr' | 'en' | 'ar';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Synchroniser avec la langue i18n actuelle
  useEffect(() => {
    const currentLang = i18n.language as Lang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  const setLang = useCallback((newLang: Lang) => {
    // Changer la langue dans i18n
    i18n.changeLanguage(newLang);
    
    // Mettre à jour le DOM
    if (newLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    document.documentElement.lang = newLang;
    
    setIsOpen(false);
  }, [i18n]);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 px-0 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
        aria-label="Changer de langue"
        type="button"
      >
        <Globe className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 bottom-full mb-2 z-50 min-w-[120px] bg-black/90 border border-white/10 rounded-md shadow-lg overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => setLang(language.code as Lang)}
                className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-white/10 transition-colors ${
                  i18n.language === language.code ? "bg-white/10 text-violet-400" : "text-white"
                }`}
                type="button"
              >
                <span>{language.flag}</span>
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
