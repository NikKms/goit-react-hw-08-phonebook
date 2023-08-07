import PropTypes from 'prop-types';
import {
  Box,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AuthorizedMenu } from 'components/AuthorizedMenu';
import { AuthNav } from 'components/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, finalFocusRef }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const overlayBgColor = useColorModeValue(
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.7)'
  );

  return (
    <ChakraDrawer
      onClose={onClose}
      isOpen={isOpen}
      placement="left"
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay bg={overlayBgColor} />

      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" ml="auto">
          <Box as="div">
            <Flex align="center" justify="space-between" gap={4}>
              {isLoggedIn ? (
                <AuthorizedMenu />
              ) : (
                <AuthNav onCloseMobileMenu={onClose} />
              )}
            </Flex>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <Box
            mt={4}
            as="nav"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={6}
            fontSize="20px"
            fontWeight="bold"
          >
            <Link to="/" onClick={onClose}>
              <Text
                transition="all 0.2s"
                _hover={{
                  textDecoration: 'underline',
                  color: 'teal',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                }}
              >
                HOME
              </Text>
            </Link>
            {isLoggedIn && (
              <Link to="/contacts" onClick={onClose}>
                <Text
                  transition="all 0.2s"
                  _hover={{
                    textDecoration: 'underline',
                    color: 'teal',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  CONTACTS
                </Text>
              </Link>
            )}
          </Box>

          <Box display="flex" justifyContent="center" marginBottom="1rem">
            <IconButton
              icon={<ArrowLeftIcon />}
              aria-label="Go Back"
              onClick={onClose}
              ml="auto"
              mt="50%"
              mr="-30px"
            />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  finalFocusRef: PropTypes.object,
};

export default MobileMenu;
