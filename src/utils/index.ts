import i18n from 'i18next';
import { IMAGE } from '@constants/fields';

export const isOddNumber = (num: number) => num % 2 === 0;

export const getAssetUrl = (name: string) =>
  `${process.env.PUBLIC_URL}/assets/${name}`;

type IPerformImage = {
  alt: string;
  title: string;
  url: string;
};

export const performImage = (item: IPerformImage) => {
  if (!item) {
    return null;
  }

  return {
    alt: item[IMAGE.ALT],
    title: item[IMAGE.TITLE],
    url: item[IMAGE.URL],
  };
};

export const performType = (tid: string) => i18n.t(tid);
