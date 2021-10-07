import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: "ta",
    supportedLngs: ["en", "ta"],
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    // Options for language detector
    detection: {
      order: ["htmlTag", "path", "cookie"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18next;
