import React, { FC } from 'react';

import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react';

export interface IHeaderProps extends BoxProps {
  variant?: string;
  colorScheme?: string;
  size?: string;
}

export const Header: FC<IHeaderProps> = props => {
  const { size, variant, colorScheme, children, ...rest } = props;

  const styles = useMultiStyleConfig('Header', { size, variant, colorScheme });

  return (
    <Box as='header' __css={{ ...styles.outer }} {...rest}>
      <Box sx={{ ...styles.inner }}>{children}</Box>
    </Box>
  );
};
