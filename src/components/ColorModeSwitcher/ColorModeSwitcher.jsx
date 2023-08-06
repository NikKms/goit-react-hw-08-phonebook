import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      icon={
        colorMode === 'light' ? <MoonIcon /> : <SunIcon color="yellow.400" />
      }
      onClick={toggleColorMode}
      aria-label="Switch Color Mode"
    />
  );
};

export default ColorModeSwitcher;
