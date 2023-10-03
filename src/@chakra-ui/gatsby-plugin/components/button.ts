import { Theme, defineStyleConfig, theme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
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
    toggleMode: props => {
      return {
        borderRadius: theme.radii.md,

        bg: 'whiteAlpha.50',
        color: mode('yellow.100', 'purple.50')(props),

        _hover: {
          bg: 'whiteAlpha.100',
        },

        _active: {
          bg: 'whiteAlpha.200',
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'toggleMode',
  },
});
