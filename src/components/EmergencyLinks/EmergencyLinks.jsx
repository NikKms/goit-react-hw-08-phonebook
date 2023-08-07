import { emergencyNumbers } from 'data/emergencyNumbers';
import { FaPhone } from 'react-icons/fa';
import {
  List,
  ListItem,
  Link as ChakraLink,
  HStack,
  Icon,
  Heading,
} from '@chakra-ui/react';

const EmergencyLinks = () => {
  return (
    <>
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
    </>
  );
};

export default EmergencyLinks;
