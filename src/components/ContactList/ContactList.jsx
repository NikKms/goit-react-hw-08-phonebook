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
    <>
      {isLoading && <Loader />}
      <>
        {contacts && <p>Total contacts: {contacts.length}</p>}
        {error ? (
          <p>Oh no, there was an error</p>
        ) : (
          sortedLetters.map(letter => (
            <div key={letter}>
              <h3>{letter}</h3>
              <ul>
                {sortedContacts[letter].map(({ name, number, id }) => (
                  <li key={id}>
                    <ContactItem name={name} number={number} contactId={id} />
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </>
    </>
  );
};

export default ContactList;
