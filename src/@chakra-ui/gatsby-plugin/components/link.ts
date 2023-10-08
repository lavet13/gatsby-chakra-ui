import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, transparentize } from '@chakra-ui/theme-tools';
import { variantActive } from '../utils';

const Link: ComponentStyleConfig = {
  baseStyle: props => {
    const { colorScheme: c, theme } = props;

    const lightHoverBg = transparentize(`${c}.200`, 0.25)(theme);
    const darkHoverBg = transparentize(`${c}.700`, 0.25)(theme);

    const lightActiveBg = transparentize(`${c}.200`, 0.3)(theme);
    const darkActiveBg = transparentize(`${c}.700`, 0.3)(theme);

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radii.md,
      color: mode(`${c}.100`, `${c}.800`)(props),

      px: 3,
      py: 3,

      _hover: {
        bg: mode(lightHoverBg, darkHoverBg)(props),
      },

      _active: {
        bg: mode(lightActiveBg, darkActiveBg)(props),
      },
    };
  },

  variants: {
    active: props => variantActive(props),
  },

  defaultProps: {
    colorScheme: 'gray',
  },
};

export default Link;
