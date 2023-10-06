import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

import Container from './components/container';
import CustomContainer from './components/custom-container';
import Button from './components/button';
import Header from './components/header';
import Link from './components/link';

import styles from './styles';
import breakpoints from './breakpoints';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles,
  breakpoints,
  config,
  components: {
    Button,
    Header,
    Link,
    Container,
    CustomContainer,
  },
  semanticTokens: {
    colors: {
      headerText: {
        default: 'purple.100',
      },
    },
  },
});

export default theme;
