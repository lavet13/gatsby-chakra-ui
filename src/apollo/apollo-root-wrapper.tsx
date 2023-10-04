import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { WrapPageElementProps } from '../common/types/types';
import client from './client';

export const ApolloWrapper: FC<WrapPageElementProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
