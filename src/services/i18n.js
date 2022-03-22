import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
