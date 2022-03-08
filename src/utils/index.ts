import i18n from 'i18next';
import { IMAGE } from '@constants/fields';

export const isOddNumber = (num: any) => num % 2 === 0;

export const getAssetUrl = (name: any) =>
  `${process.env.PUBLIC_URL}/assets/${name}`;

export const performImage = (item: any) => {
  if (!item) {
    return null;
  }

  return {
    alt: item[IMAGE.ALT],
    title: item[IMAGE.TITLE],
    url: item[IMAGE.URL],
  };
};

export const performType = (tid: any) => i18n.t(tid);
