import { ApiClientProvider } from '@/config/graphql-api/provider';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

type MyAppProps = {
  pageProps: AppProps['pageProps'];
} & AppProps;

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ApiClientProvider>
      <Component {...pageProps} />
    </ApiClientProvider>
  );
}

export default MyApp;
