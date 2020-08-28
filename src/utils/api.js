import sanitizeHtml from 'xss';

const ALLOWED_ATTRS = ['class'];
const WHITE_LIST = { ...sanitizeHtml.whiteList };
Object.keys(WHITE_LIST).forEach((key) => {
  WHITE_LIST[key] = WHITE_LIST[key].concat(ALLOWED_ATTRS);
});

const CONFIG = {
  whiteList: WHITE_LIST,
};
export const escapeStr = (str) => sanitizeHtml(str, CONFIG);

export const performResponseData = (data) => {
  if (!data) {
    return data;
  }

  if (typeof data === 'string') {
    return escapeStr(data);
  }

  if (Array.isArray(data)) {
    return data.map((item) => performResponseData(item));
  }

  if (typeof data === 'object') {
    const res = {};

    Object.keys(data).forEach((key) => {
      res[key] = performResponseData(data[key]);
    });

    return res;
  }

  return data;
};
