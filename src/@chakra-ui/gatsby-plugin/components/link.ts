import { theme, defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    px: 3,
    py: 3,

    _hover: {
      bg: 'whiteAlpha.100',
    },

    _active: {
      bg: 'whiteAlpha.200',
    },

    borderRadius: theme.radii.md,
  },
});
