import { useState } from 'react';
import Router from 'next/router';
import Loader from './Loader';

const RoutingLoader = () => {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  Router.events.on('routeChangeError', () => {
    setLoading(false);
  });
  return loading ? <Loader /> : <></>;
};

export default RoutingLoader;
