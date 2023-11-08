import i18n from 'i18next';
//import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslation from 'app/providers/translations/locales/en/translation.json';
import { ReactComponent as EnFlag } from 'app/providers/translations/locales/en/en.svg';
import esTranslation from 'app/providers/translations/locales/es/translation.json';
import { ReactComponent as EsFlag } from 'app/providers/translations/locales/es/es.svg';
import ruTranslation from 'app/providers/translations/locales/ru/translation.json';
import { ReactComponent as RuFlag } from 'app/providers/translations/locales/ru/ru.svg';

i18n
  //.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    //fallbackLng: 'en',
    whitelist: ['en', 'es', 'ru'],
    resources: {
      eng: {
        name: "English",
        flag: EnFlag,
        translation: enTranslation,
      },
      esp: {
        name: "Español",
        flag: EsFlag,
        translation: esTranslation,
      },
      rus: {
        name: "Русский",
        flag: RuFlag,
        translation: ruTranslation,
      },
    },
  })

  export default i18n;