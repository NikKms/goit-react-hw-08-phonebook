import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav';
import { AuthorizedMenu } from 'components/AuthorizedMenu';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Navigation } from 'components/Navigation';
import useAuth from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const headerBgColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box
      as="header"
      bg={headerBgColor}
      borderBottom={1}
      borderColor="gray.200"
      fontFamily="Your-Preferred-Font, sans-serif"
    >
      <Container maxW="container.sm" minW={320}>
        <Flex
          align="center"
          justify="space-between"
          flexDirection="space-between"
          px={4}
          py={2}
        >
          <Navigation />
          <ColorModeSwitcher />

          <Box as="div">
            <Flex align="center" justify="space-between" gap={4}>
              {isLoggedIn ? <AuthorizedMenu /> : <AuthNav />}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AppBar;
