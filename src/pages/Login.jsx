import { Box, Heading, Link } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  return (
    <Box p={4}>
      {' '}
      <Heading as="h1" mb={4}>
        LOG IN
      </Heading>
      <LoginForm />
      <Box mt={4} fontSize="sm" color="gray.500">
        If you don't have an account yet, please,{' '}
        <Link to="/register" color="blue.500">
          {' '}
          register
        </Link>
        .
      </Box>
    </Box>
  );
};

export default Login;
