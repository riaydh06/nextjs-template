import Router from 'next/router';

export const getParsedSearch = (url?: any) =>
  (url || window.location.search)
    .replace('?', '')
    .split('&')
    .reduce((res: any, param = '') => {
      const [prop, value] = param.split('=');
      if (prop && value) {
        res[prop] = decodeURIComponent(value);
      }

      return res;
    }, {});

export const addQueryString = (newString: any) => {
  const urlToSet = `${window.location.pathname}${newString}`;
  Router.push(urlToSet, undefined, { shallow: true });
};

export const changeQueryString = (changedValues: any) => {
  const router = Router;

  let values = Object.keys(router.query).length
    ? router.query
    : getParsedSearch();

  values = Object.keys(changedValues).length
    ? {
        ...values,
        ...changedValues,
      }
    : {};

  const crateUrlValues: any = [];
  Object.keys(values).forEach((key) => {
    if (typeof values[key] === 'object' && values[key].length === 0) {
      return;
    }
    if (values[key]) {
      crateUrlValues.push(`&${key}=${values[key]}`);
    }
  });

  const url = `?${crateUrlValues.join('')}`;
  addQueryString(url);
};
