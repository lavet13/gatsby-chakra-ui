import { theme, ComponentStyleConfig } from '@chakra-ui/react';

const Link: ComponentStyleConfig = {
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
};

export default Link;
