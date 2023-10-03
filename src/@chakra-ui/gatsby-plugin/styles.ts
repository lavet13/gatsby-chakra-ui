import { defineStyle } from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: defineStyle(props => ({
    '.active-link': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      bg: 'whiteAlpha.100',
      color: 'white !important',
    },
  })),
};

export default styles;
