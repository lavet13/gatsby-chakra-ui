import React from 'react';

import {
  HTMLChakraProps,
  ThemingProps,
  defineStyleConfig,
  forwardRef,
  useStyleConfig,
  chakra,
} from '@chakra-ui/react';

export default defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    py: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: colorMode === 'dark' ? 'purple.600' : 'purple.50',
    color: colorMode === 'dark' ? 'gray.100' : 'gray.800',
  }),
});

export interface HeaderProps extends HTMLChakraProps<'header'>, ThemingProps {}

export const Header = forwardRef<HeaderProps, 'header'>((props, ref) => {
  const { size, variant, ...rest } = props;

  const styles = useStyleConfig('Header', { size, variant });

  return <chakra.header ref={ref} __css={styles} {...rest} />;
});
