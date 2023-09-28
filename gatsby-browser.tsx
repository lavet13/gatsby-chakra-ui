import React, { FC } from 'react';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';

export const wrapPageElement: FC<{ element: React.ReactNode }> = ({
  element,
}) => <ChakraWrapper>{element}</ChakraWrapper>;
