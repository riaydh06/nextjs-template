import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { useTranslation } from 'react-i18next';

const getTitleId = (id) => `META_TITLES.${id}`;
const getDescriptionId = (id) => `META_DESCRIPTIONS.${id}`;

const ServiceHead = ({ id, content }) => {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{t(getTitleId(id), { content })}</title>
      <meta name="description" content={t(getDescriptionId(id), { content })} />

      <link
        href="https://fonts.googleapis.com/css2?family=Baskervville&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

ServiceHead.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
};

export default ServiceHead;
