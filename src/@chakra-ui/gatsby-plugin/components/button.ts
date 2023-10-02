import { StyleFunctionProps, defineStyleConfig } from '@chakra-ui/react';
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
        borderRadius: props.theme.radii.md,
        bg: mode('blackAlpha.50', 'whiteAlpha.50')(props),
        color: mode(
          `${props.colorScheme}.900`,
          `${props.colorScheme}.50`
        )(props),
        _hover: {
          bg: mode('blackAlpha.100', 'whiteAlpha.100')(props),
        },
        _active: {
          bg: mode('blackAlpha.200', 'whiteAlpha.200')(props),
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'toggleMode',
  },
});
