import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Flex,
  Hide,
  useColorModeValue,
} from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav';
import { AuthorizedMenu } from 'components/AuthorizedMenu';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Navigation } from 'components/Navigation';
import useAuth from 'hooks/useAuth';
import { FaBars } from 'react-icons/fa';

const AppBar = ({ onMobileMenuOpen }) => {
  const { isLoggedIn } = useAuth();

  const headerBgColor = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box
      as="header"
      bg={headerBgColor}
      borderBottom={1}
      borderColor="gray.200"
      fontFamily="Your-Preferred-Font, sans-serif"
      py={2}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
    >
      <Container maxW="container.sm" minW="320px">
        <Flex
          align="center"
          justify="space-between"
          flexDirection="space-between"
        >
          <Hide breakpoint="(min-width: 768px)">
            <Button onClick={onMobileMenuOpen} variant="unstyled">
              <FaBars size={24} />
            </Button>
          </Hide>
          <Hide breakpoint="(max-width: 767px)">
            <Navigation />
          </Hide>
          <ColorModeSwitcher />

          <Hide breakpoint="(max-width: 767px)">
            <Box as="div">
              <Flex align="center" justify="space-between" gap={4}>
                {isLoggedIn ? <AuthorizedMenu /> : <AuthNav />}
              </Flex>
            </Box>
          </Hide>
        </Flex>
      </Container>
    </Box>
  );
};

AppBar.propTypes = {
  onMobileMenuOpen: PropTypes.func.isRequired,
};

export default AppBar;
