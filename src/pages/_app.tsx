import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme';

import '../styles/swiper.scss';

import '../config/mirage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
