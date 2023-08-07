import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { ContactItem } from 'components/ContactItem';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectorsContacts';
import { selectFilter } from 'redux/filter/selectorsFilter';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.includes(normalizedFilter)
      ) || []
    );
  };

  const groupContactsByFirstLetter = () => {
    return filteredContacts().reduce((groupedContacts, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
      return groupedContacts;
    }, {});
  };

  const sortedContacts = groupContactsByFirstLetter(filteredContacts());
  const sortedLetters = Object.keys(sortedContacts).sort();

  return (
    <Box>
      {isLoading && <Loader />}
      {contacts && (
        <Text fontSize="sm" color="gray.500">
          Total contacts: {contacts.length}
        </Text>
      )}
      {error ? (
        <Text color="red.500">Oh no, there was an error</Text>
      ) : (
        sortedLetters.map((letter, index) => (
          <Box key={letter}>
            <Heading as="h3" size="sm">
              {letter}
            </Heading>
            <Divider mt={2} mb={4} w="100%" borderColor="gray.300" />
            <Box as="ul" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {sortedContacts[letter].map(({ name, number, id }) => (
                <Box as="li" key={id} mb="1.5px">
                  <ContactItem name={name} number={number} contactId={id} />
                </Box>
              ))}
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ContactList;
