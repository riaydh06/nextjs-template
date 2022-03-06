import React from 'react';

import Page from '@containers/Page';

import Head from './_head';
import Home from '@containers/Home/Home';
import { PAGES } from '@constants/pages';

const HomePage = () => {
  return (
    <Page>
      <Head id={PAGES.HOME} content="This is home page" />
      <Home />
    </Page>
  );
};
export default HomePage;
