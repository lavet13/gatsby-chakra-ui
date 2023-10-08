import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const MIN_WIDTH = `5rem`;

const Header: ComponentStyleConfig = {
  parts: ['outer', 'inner'],

  baseStyle: props => {
    const { colorScheme: c } = props;

    return {
      outer: {
        position: 'fixed',

        bg: mode(`${c}.500`, `${c}.200`)(props),
        color: mode(`${c}.100`, `gray.800`)(props),
        // borderTopRightRadius: 'xl',
        // borderBottomRightRadius: 'xl',
        height: '100vh',
      },

      inner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: '100%',
        minW: MIN_WIDTH,
        py: 2,
      },
    };
  },

  defaultProps: {
    colorScheme: 'gray',
  },
};

export default Header;
