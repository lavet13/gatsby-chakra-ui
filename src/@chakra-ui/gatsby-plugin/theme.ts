import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

import Button from './components/button';
import Header from './components/header';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = {
  config,
  components: {
    Button,
    Header,
  },
  semanticTokens: {
    colors: {
      headerText: {
        default: 'purple.900',
        _dark: 'gray.100',
      },
    },
  },
};

export default extendTheme(theme);
