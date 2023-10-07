import { ComponentStyleConfig } from '@chakra-ui/react';
import InnerContainerStyles from './container';
import {
  percentageWidths,
  variantSolid,
  variantGhost,
  variantGhostOuter,
  variantGradient,
} from '../utils';

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
      outer: variantSolid(props),
    }),

    ghost: props => ({
      outer: {
        ...variantGhostOuter(props),
        py: [8, 10],
      },

      inner: variantGhost(props),
    }),

    gradient: props => ({
      outer: variantGradient(props),
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
