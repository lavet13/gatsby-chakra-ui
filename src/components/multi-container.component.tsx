import React, { FC } from 'react';

import {
  useMultiStyleConfig,
  Box,
  Container,
  BoxProps,
} from '@chakra-ui/react';

interface IMultiContainerProps extends BoxProps {
  variant?: 'solid' | 'gradient' | 'ghost';
  colorScheme?: string;
  size?: 'prose' | '1/4' | '2/4' | '3/4' | 'full';
}

const MultiContainer: FC<IMultiContainerProps> = ({
  variant,
  colorScheme,
  size,
  children,
  ...rest
}) => {
  const styles = useMultiStyleConfig('CustomContainer', {
    variant,
    colorScheme,
    size,
  });

  return (
    <Box __css={{ ...styles.outer }} {...rest}>
      <Container sx={{ ...styles.inner }}>{children}</Container>
    </Box>
  );
};

export default MultiContainer;
