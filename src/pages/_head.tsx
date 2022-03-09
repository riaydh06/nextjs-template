import React from 'react';
import Head from 'next/head';

import { useTranslation } from 'react-i18next';

const getTitleId = (id: string) => `META_TITLES.${id}`;
const getDescriptionId = (id: string) => `META_DESCRIPTIONS.${id}`;

const ServiceHead = ({ id, content }: { id: string; content: string }) => {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{t(getTitleId(id), { content })}</title>
      <meta name="description" content={t(getDescriptionId(id), { content })} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default ServiceHead;
