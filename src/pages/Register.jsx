import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <Box>
      {' '}
      <Heading as="h1" mb={4}>
        REGISTER
      </Heading>
      <RegisterForm />
      <Box mt={4} fontSize="sm" color="gray.500">
        If you already have an account, please{' '}
        <Box as={Link} to="/login" color="blue.500">
          {' '}
          log in
        </Box>
        .
      </Box>
    </Box>
  );
};

export default Register;
