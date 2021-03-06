import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import { useStore } from '../helpers/store';
import { RoutingLoader } from '@components';

import '../helpers/i18n';
import '../styles/styles.scss';

const AppMain: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <RoutingLoader />
      <Component {...pageProps} />
    </Provider>
  );
};

export default AppMain;
