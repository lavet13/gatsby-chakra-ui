import React, { FC } from 'react';
import { ChakraWrapper } from './src/@chakra-ui/gatsby-plugin/chakra-root-wrapper';
import { ApolloWrapper } from './src/apollo/apollo-root-wrapper';

export const wrapPageElement: FC<{ element: React.ReactNode }> = ({
  element,
}) => <ChakraWrapper>{element}</ChakraWrapper>;

export const wrapRootElement: FC<{ element: React.ReactNode }> = ({
  element,
}) => <ApolloWrapper>{element}</ApolloWrapper>;
