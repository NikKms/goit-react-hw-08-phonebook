import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { Box, Text } from '@chakra-ui/react';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={6}
      fontSize="14px"
      fontWeight="bold"
    >
      <Link to="/">
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
        <Link to="/contacts">
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
  );
};

export default Navigation;
