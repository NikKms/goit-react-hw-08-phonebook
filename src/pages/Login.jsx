import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Box>
      {' '}
      <Heading as="h1" mb={4}>
        LOG IN
      </Heading>
      <LoginForm />
      <Box mt={4} fontSize="sm" color="gray.500">
        If you don't have an account yet, please,{' '}
        <Box as={Link} to="/register" color="blue.500">
          {' '}
          sign up <ExternalLinkIcon ml="2px" />
        </Box>
        .
      </Box>
    </Box>
  );
};

export default Login;
