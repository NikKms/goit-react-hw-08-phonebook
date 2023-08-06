import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link as ChakraLink,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaPhone, FaHospital, FaFire } from 'react-icons/fa';
import { GrUserPolice } from 'react-icons/gr';
import { FcAssistant } from 'react-icons/fc';
import useAuth from 'hooks/useAuth';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();

  const emergencyNumbers = [
    { name: 'Police', number: '102', icon: GrUserPolice },
    { name: 'Fire Department', number: '101', icon: FaFire },
    { name: 'Ambulance', number: '103', icon: FaHospital },
    { name: 'Emergency Rescue Service', number: '112', icon: FcAssistant },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>
        Hello {user ? (user.name ? user.name : 'there') : 'there'}
      </Heading>
      <Text fontSize="xl" mb={6}>
        Welcome to the Phone Book app.
      </Text>
      {isLoggedIn ? (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="teal.500"
            borderRadius="md"
            boxShadow="lg"
            p={4}
            mb={6}
            color="white"
            _hover={{ cursor: 'pointer', transform: 'scale(1.05)' }}
          >
            <Text>
              Your <Link to="/contacts">CONTACTS HERE</Link>
            </Text>
          </Box>
          <Heading mt={6} mb={4} size="lg">
            Emergency Numbers:
          </Heading>
          <List styleType="none">
            {emergencyNumbers.map(contact => (
              <ListItem key={contact.name}>
                <HStack alignItems="center" spacing={2}>
                  <Icon
                    as={contact.icon}
                    color={contact.name === 'Police' ? 'blue.500' : 'red.500'}
                  />
                  <ChakraLink
                    href={`tel:${contact.number}`}
                    color="teal.500"
                    textDecoration="underline"
                  >
                    {contact.name}: {contact.number}
                  </ChakraLink>
                  <Icon as={FaPhone} color="teal.500" />
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box>
          <Box p={8} border="1px solid teal" fontSize="14px">
            <Box display="flex">
              <Text>Please</Text>
              <Box
                color="teal.500"
                textDecoration="underline"
                fontSize="15px"
                ml="2px"
              >
                <Link to="/login">log in</Link>
              </Box>
            </Box>
            <Box display="flex">
              <Text>or if you don't have an account</Text>
              <Box
                color="teal.500"
                textDecoration="underline"
                fontSize="15px"
                ml="2px"
              >
                <Link to="/register">Register</Link>
              </Box>
            </Box>
          </Box>
          <Heading mt={6} mb={4} size="lg">
            Emergency Numbers:
          </Heading>
          <List styleType="none">
            {emergencyNumbers.map(contact => (
              <ListItem key={contact.name}>
                <HStack alignItems="center" spacing={2}>
                  <Icon
                    as={contact.icon}
                    color={contact.name === 'Police' ? 'blue.500' : 'red.500'}
                  />
                  <ChakraLink
                    href={`tel:${contact.number}`}
                    color="teal.500"
                    textDecoration="underline"
                  >
                    {contact.name}: {contact.number}
                  </ChakraLink>
                  <Icon as={FaPhone} color="teal.500" />
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Home;
