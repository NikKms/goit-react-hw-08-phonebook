import { Box, Heading, Link } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <Box p={4}>
      {' '}
      <Heading as="h1" mb={4}>
        REGISTER
      </Heading>
      <RegisterForm />
      <Box mt={4} fontSize="sm" color="gray.500">
        If you already have an account, please{' '}
        <Link to="/login" color="blue.500">
          {' '}
          log in
        </Link>
        .
      </Box>
    </Box>
  );
};

export default Register;
