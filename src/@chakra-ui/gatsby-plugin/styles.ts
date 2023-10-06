import { defineStyle } from '@chakra-ui/react';

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
