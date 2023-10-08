import React, { FC } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

type ThemeToggleProps = {
  colorScheme?: string;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ colorScheme }) => {
  const { toggleColorMode: toggleMode } = useColorMode();

  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      colorScheme={colorScheme}
      icon={<ToggleIcon />}
      aria-label='Toggle Theme'
      onClick={toggleMode}
    />
  );
};

export default ThemeToggle;
