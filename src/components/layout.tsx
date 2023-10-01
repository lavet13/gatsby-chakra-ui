import React, { FC, PropsWithChildren } from 'react';
import { WrapPageElementProps } from '../common/types/types';
import { Header } from '../@chakra-ui/gatsby-plugin/components/header';
import { Box, Flex, Link, calc } from '@chakra-ui/react';
import ThemeToggle from './toggle-theme';

const Layout: FC<WrapPageElementProps> = ({ children }) => {
  return (
    <Flex>
      <Header color='headerText' flex={'0 0 5rem'}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>
          <ThemeToggle />
        </Box>
      </Header>
      <Box as='main' flex={`0 0 ${calc('100%').subtract('5rem').toString()}`}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
