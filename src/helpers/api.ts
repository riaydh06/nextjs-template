import axios from 'axios';
import { performResponseData } from '@utils/api';

import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig();

const api = axios.create({
  baseURL: `${publicRuntimeConfig.REACT_APP_BASE_URL}/v2`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const onResponseSuccess = (response) => {
  const { data } = response;

  return Promise.resolve({
    ...response,
    data: performResponseData(data),
  });
};

api.interceptors.response.use(onResponseSuccess);

export default api;
