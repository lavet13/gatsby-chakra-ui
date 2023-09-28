import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme: Partial<Theme> = {
  config,
};

export default extendTheme(theme);
