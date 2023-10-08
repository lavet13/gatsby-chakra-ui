import { ComponentStyleConfig, theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { variantToggleMode } from '../utils';

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },

    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },

  variants: {
    toggleMode: props => variantToggleMode(props),
  },

  defaultProps: {
    size: 'md',
    variant: 'toggleMode',
  },
};

export default Button;
