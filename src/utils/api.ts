import sanitizeHtml from 'xss';

// const ALLOWED_ATTRS = ['class'];

// const WHITE_LIST = { ...sanitizeHtml?.whiteList  };
// Object.keys(WHITE_LIST).forEach((key) => {
//   WHITE_LIST[key] = WHITE_LIST[key].concat(ALLOWED_ATTRS);
// });

// const CONFIG = {
//   whiteList: ALLOWED_ATTRS,
// };

export const escapeStr = (str: any) => sanitizeHtml(str, {});

export const performResponseData = (data: any): any => {
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
    let res = {};

    Object.keys(data).forEach((key: string) => {
      res = { ...res, [key]: performResponseData(data[key]) };
    });

    return res;
  }

  return data;
};
