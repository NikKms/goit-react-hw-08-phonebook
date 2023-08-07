import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, Link as ChakraLink } from '@chakra-ui/react';

const AuthNav = ({ onCloseMobileMenu }) => {
  return (
    <List display="flex" alignItems="center" justifyContent="center" gap={8}>
      <ListItem>
        <ChakraLink
          onClick={onCloseMobileMenu}
          as={Link}
          to="/register"
          fontWeight="bold"
          color="blue.500"
          _hover={{ textDecoration: 'underline' }}
        >
          registration
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink
          onClick={onCloseMobileMenu}
          as={Link}
          to="/login"
          fontWeight="bold"
          color="blue.500"
          _hover={{ textDecoration: 'underline' }}
        >
          log in
        </ChakraLink>
      </ListItem>
    </List>
  );
};

AuthNav.propTypes = {
  onCloseMobileMenu: PropTypes.func.isRequired,
};

export default AuthNav;
