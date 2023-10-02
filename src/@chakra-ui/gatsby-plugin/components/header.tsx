import React, { FC } from 'react';

import {
  HTMLChakraProps,
  ThemingProps,
  defineStyleConfig,
  useStyleConfig,
  Box,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
  baseStyle: props => ({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    py: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: mode('purple.500', 'purple.200')(props),
    bg: mode('purple.100', 'purple.500')(props),
  }),
});

export interface HeaderProps extends HTMLChakraProps<'header'>, ThemingProps {}

export const Header: FC<HeaderProps> = props => {
  const { size, variant, ...rest } = props;

  const styles = useStyleConfig('Header', { size, variant });

  return <Box as='header' __css={styles} {...rest} />;
};
