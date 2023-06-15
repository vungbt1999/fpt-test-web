import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

export type SEOMetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
};

export default function SEOMeta(props: SEOMetaProps) {
  const {
    title = process.env.NEXT_PUBLIC_WEB_NAME || ' Je réserve mon bateau',
    description,
    robots,
    keywords
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="google" content="notranslate" />
      <meta name="description" content={description || title} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots || 'index, follow'} />
    </Head>
  );
}
