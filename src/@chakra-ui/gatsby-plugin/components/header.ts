import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Header: ComponentStyleConfig = {
  baseStyle: props => ({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    py: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: mode('purple.500', 'purple.200')(props),
    bg: mode('purple.400', 'purple.500')(props),
  }),
};

export default Header;
