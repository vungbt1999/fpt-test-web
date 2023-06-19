import { ApiClientProvider } from '@/utils/graphql-api/provider';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SEOMeta from '@/components/seo/SEOMeta';
import { Fragment } from 'react';

type MyAppProps = {
  pageProps: AppProps['pageProps'];
} & AppProps;

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ApiClientProvider>
      <Fragment>
        <SEOMeta title="Test System" />
        <Component {...pageProps} />
      </Fragment>
    </ApiClientProvider>
  );
}

export default MyApp;
