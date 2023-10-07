import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const MIN_WIDTH = `5rem`;

const Header: ComponentStyleConfig = {
  parts: ['outer', 'inner'],

  baseStyle: props => ({
    outer: {
      position: 'fixed',

      color: mode('purple.500', 'purple.200')(props),
      bg: mode('purple.400', 'purple.500')(props),
      height: '100vh',
    },

    inner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',

      height: '100%',
      minW: MIN_WIDTH,
      py: 2,
    },
  }),
};

export default Header;
