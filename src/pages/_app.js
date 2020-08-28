import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';

import { useStore } from '../helpers/store';
import { RoutingLoader } from '@components';

import '../helpers/i18n';
import '../styles/styles.scss';

const AppMain = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <RoutingLoader />
      <Component {...pageProps} />
    </Provider>
  );
};

AppMain.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default AppMain;
