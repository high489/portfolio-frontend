import i18n from 'i18next';
//import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import engTranslation from 'app/providers/translations/locales/eng/translation.json';
import { ReactComponent as EngFlag } from './locales/eng/eng.svg';
import espTranslation from 'app/providers/translations/locales/esp/translation.json';
import { ReactComponent as EspFlag } from './locales/esp/esp.svg';
import rusTranslation from 'app/providers/translations/locales/rus/translation.json';
import { ReactComponent as RusFlag } from './locales/rus/rus.svg';

i18n
  //.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'eng',
    resources: {
      eng: {
        name: "English",
        flag: EngFlag,
        translation: engTranslation,
      },
      esp: {
        name: "Español",
        flag: EspFlag,
        translation: espTranslation,
      },
      rus: {
        name: "Русский",
        flag: RusFlag,
        translation: rusTranslation,
      },
    },
  })

  export default i18n;