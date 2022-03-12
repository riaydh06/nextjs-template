import React from 'react';
import { Text } from '@components';
import Page from '@containers/Page';

const Home = () => {
  return (
    <Page className="d-flex justify-content-center">
      <Text tid="HOME.WELCOME" />
    </Page>
  );
};

export default Home;
