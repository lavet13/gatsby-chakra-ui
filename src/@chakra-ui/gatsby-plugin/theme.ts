import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

import Button from './components/button';
import Header from './components/header';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export default extendTheme({
  config,
  components: {
    Button,
    Header,
  },
  semanticTokens: {
    colors: {
      headerText: {
        default: 'black',
        _dark: 'white',
      },
    },
  },
});
