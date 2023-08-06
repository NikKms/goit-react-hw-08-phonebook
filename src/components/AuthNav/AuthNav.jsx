import { Link } from 'react-router-dom';
import { List, ListItem, Link as ChakraLink } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <List display="flex" alignItems="center" justifyContent="center" gap={4}>
      <ListItem>
        <ChakraLink
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

export default AuthNav;
