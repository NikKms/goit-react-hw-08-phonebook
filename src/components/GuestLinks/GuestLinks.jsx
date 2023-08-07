import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GuestLinks = () => {
  return (
    <Box
      p={8}
      border="1px solid teal"
      fontSize="18px"
      borderRadius="5px"
      display="flex"
      flexWrap="wrap"
      gap="2px"
    >
      <Box display="flex" flexWrap="wrap" gap="2px">
        <Text>Please</Text>
        <Box
          color="teal.500"
          textDecoration="underline"
          fontSize="18px"
          as={Link}
          to="/login"
        >
          log in
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="2px">
        <Text>or if you don't have an account</Text>
        <Box
          color="teal.500"
          textDecoration="underline"
          fontSize="18px"
          as={Link}
          to="/register"
        >
          register
        </Box>
      </Box>
    </Box>
  );
};

export default GuestLinks;
