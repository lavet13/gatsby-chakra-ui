import { defineStyleConfig } from '@chakra-ui/react';

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
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },

    solid: {
      bg: 'purple.500',
      color: 'white',
    },

    toggleMode: ({ colorMode, theme: { radii } }) => ({
      borderRadius: radii.full,
      bg: colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50',
      color: colorMode === 'dark' ? 'purple.100' : 'black.500',

      _hover: {
        bg: colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100',
      },

      _active: {
        bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200',
      },
    }),
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
