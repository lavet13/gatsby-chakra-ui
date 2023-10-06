import { ComponentStyleConfig } from '@chakra-ui/react';
import InnerContainerStyles from './container';
import { percentageWidths } from '../utils';

const CustomContainer: ComponentStyleConfig = {
  parts: ['outer', 'inner'],
  baseStyle: {
    outer: {
      w: '100%',
      margin: 0,
    },
    inner: {
      ...InnerContainerStyles.baseStyle,
    },
  },

  variants: {
    solid: props => ({
      outer: {},
    }),

    ghost: props => ({
      outer: {
        py: [8, 10],
      },
      inner: {},
    }),

    gradient: props => ({
      outer: {},
    }),
  },

  sizes: {
    prose: {
      inner: {
        maxW: '65ch',
      },
    },

    ...percentageWidths(4, 'inner'),
  },

  defaultProps: {
    colorScheme: 'gray',
  },
};

export default CustomContainer;
