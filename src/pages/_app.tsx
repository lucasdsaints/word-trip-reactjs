import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme';
import { makeServer } from '../config/mirage';

import '../styles/swiper.scss';

if (process.env.NODE_ENV === 'development') {
  makeServer({ enviroment: 'development' });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
