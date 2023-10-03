import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

import Button from './components/button';
import Header from './components/header';
import Link from './components/link';

import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export default extendTheme({
  styles,
  config,
  components: {
    Button,
    Header,
    Link,
  },
  semanticTokens: {
    colors: {
      headerText: {
        default: 'purple.100',
      },
    },
  },
});
