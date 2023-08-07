import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <Box
      as={Link}
      to="/contacts"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="teal.500"
      borderRadius="md"
      boxShadow="lg"
      mb={6}
      color="white"
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.05)',
        animation: 'glowPulse 1s infinite',
      }}
    >
      <Text>View My Contacts</Text>
      <style>
        {`
          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 10px rgba(0, 128, 128, 0.7);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 128, 128, 0.9);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 128, 128, 0.7);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default AuthLinks;
