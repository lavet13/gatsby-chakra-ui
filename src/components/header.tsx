import React, { FC } from 'react';

import { useStyleConfig, Box, BoxProps } from '@chakra-ui/react';

export interface IHeaderProps extends BoxProps {
  variant?: string;
  colorScheme?: string;
  size?: string;
}

export const Header: FC<IHeaderProps> = props => {
  const { size, variant, ...rest } = props;

  const styles = useStyleConfig('Header', { size, variant });

  return <Box as='header' __css={styles} {...rest} />;
};
