import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <Head>
          <title>Metha Digital</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CookiesProvider>
    </>
  );
}
