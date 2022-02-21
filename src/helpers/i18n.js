import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en/';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  preload: ['en'],

  resources: {
    en,
  },

  interpolation: {
    defaultVariables: {
      RM_URL: 'url.com',
    },
  },

  react: {
    wait: true,
    defaultTransParent: 'span',
  },
});

export default i18n;
