import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr/common.json";
import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    lng: "fr",
    rtlLanguages: ["ar"],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export default i18n;
