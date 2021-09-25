import { extendTheme, Theme } from '@chakra-ui/react';

const colors = {
  gray: {
    '900': '#2F3738',
    '800': '#3A484A',
    '700': '#47585B',
    '600': '#828A8F',
    '500': '#999999',
    '400': '#9DA6AB',
    '300': '#C7C8C9',
    '200': '#CCCECF',
    '100': '#DADADA',
    '50': '#F5F8FA',
  },
  yellow: {
    '900': '#332500',
    '800': '#664A00',
    '700': '#996E00',
    '600': '#CC9300',
    '500': '#FFBA08',
    '400': '#FFC52E',
    '300': '#FCCD51',
    '200': '#FFDE8A',
    '100': '#FDE6A8',
    '50': '#FFF8E5',
  }
};

const fonts = {
  body: "Poppins",
  heading: "Poppins",
  barlow: "Barlow",
};

export const theme = extendTheme<Theme>({
  colors,
  fonts,
  sizes: {
    container: {
      lg: '1160px',
      xl: '1240px'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
});
