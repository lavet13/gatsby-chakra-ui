import { mode, transparentize, getColor } from '@chakra-ui/theme-tools';

import { SystemStyleFunction } from '@chakra-ui/react';

type AccessibleColor = {
  bg?: string;
  color?: string;
};

export const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
  },

  cyan: {
    bg: 'cyan.400',
    color: 'black',
  },
};

export const variantSolid: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  if (!c) {
    return {};
  }

  if (c === 'gray') {
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  }

  const { bg = `${c}.500`, color = 'white' } = accessibleColorMap[c] || {};

  return {
    bg: mode(bg, `${c}.200`)(props),
    color: mode(color, `gray.800`)(props),
  };
};

export const variantGhost: SystemStyleFunction = props => {
  const { colorScheme: c, theme } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  }

  const transparentBgDark = transparentize(`${c}.200`, 0.12)(theme);
  const transparentBgLight = transparentize(`${c}.50`, 0.8)(theme);

  return {
    color: mode(`${c}.600`, `${c}.100`)(props),
    bg: mode(transparentBgLight, transparentBgDark)(props),
  };
};

export const variantGhostOuter: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      bg: mode(`gray.50`, `whiteAlpha.200`)(props),
    };
  }

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: mode(`${c}.200`, `${c}.900`)(props),
  };
};

export const variantGradient: SystemStyleFunction = props => {
  const { colorScheme: c, colorMode, theme } = props;
  const isDarkMode = colorMode === 'dark';

  if (!c) {
    return {};
  }

  const topColor = isDarkMode
    ? getColor(theme, `${c}.700`)
    : getColor(theme, `${c}.100`);

  const bottomColor = isDarkMode
    ? getColor(theme, `${c}.900`)
    : getColor(theme, `${c}.300`);

  return {
    bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
  };
};

export const variantActive: SystemStyleFunction = props => {
  const { colorScheme: c, theme } = props;

  const lightBg = transparentize(`${c}.200`, 0.15)(theme);
  const darkBg = transparentize(`${c}.900`, 0.15)(theme);

  const lightHoverBg = transparentize(`${c}.200`, 0.25)(theme);
  const darkHoverBg = transparentize(`${c}.700`, 0.25)(theme);

  const lightActiveBg = transparentize(`${c}.200`, 0.3)(theme);
  const darkActiveBg = transparentize(`${c}.700`, 0.3)(theme);

  return {
    bg: mode(lightBg, darkBg)(props),
    color: mode(`${c}.50`, `${c}.800`)(props),

    _hover: {
      bg: mode(lightHoverBg, darkHoverBg)(props),
    },

    _active: {
      bg: mode(lightActiveBg, darkActiveBg)(props),
    },
  };
};

export const variantToggleMode: SystemStyleFunction = props => {
  const { theme, colorScheme: c } = props;

  const lightBg = transparentize(`${c}.200`, 0.15)(theme);
  const darkBg = transparentize(`${c}.900`, 0.15)(theme);

  const lightHoverBg = transparentize(`${c}.200`, 0.25)(theme);
  const darkHoverBg = transparentize(`${c}.700`, 0.25)(theme);

  const lightActiveBg = transparentize(`${c}.200`, 0.3)(theme);
  const darkActiveBg = transparentize(`${c}.700`, 0.3)(theme);

  return {
    borderRadius: theme.radii.md,

    bg: mode(lightBg, darkBg)(props),
    color: mode(`${c}.50`, `${c}.800`)(props),

    _hover: {
      bg: mode(lightHoverBg, darkHoverBg)(props),
    },

    _active: {
      bg: mode(lightActiveBg, darkActiveBg)(props),
    },
  };
};

export const percentageWidths = (
  divisions: number,
  part: string,
  property = 'maxW'
) => {
  const result: Record<string, any> = {};

  for (let i = 1; i <= divisions; i++) {
    const name = i === divisions ? 'full' : `${i}/${divisions}`;
    const w = Number((i / divisions) * 100).toFixed(4);
    result[name] = {
      [part]: {
        [property]: `${+w}%`,
      },
    };
  }

  return result;
};
