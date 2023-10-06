import React, { FC } from 'react';
import { WrapPageElementProps } from '../common/types/types';
import { Header } from './header';
import { Box, Flex, calc } from '@chakra-ui/react';
import { HamburgerIcon, ChatIcon } from '@chakra-ui/icons';
import ThemeToggle from './toggle-theme.component';
import NavLink from './nav-link.component';

const Layout: FC<WrapPageElementProps> = ({ children }) => {
  return (
    <Flex>
      <Header color='headerText' flex={'0 0 5rem'}>
        <Box>
          <NavLink to='/'>
            <HamburgerIcon boxSize='5' />
          </NavLink>
        </Box>
        <Box>
          <NavLink to='/messages'>
            <ChatIcon boxSize='4' />
          </NavLink>
        </Box>
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
