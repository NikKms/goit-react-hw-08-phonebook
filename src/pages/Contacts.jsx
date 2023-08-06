import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { selectIsModalOpen } from 'redux/modal/selectorsModal';
import { Box, Button, Heading } from '@chakra-ui/react';
import { CreateContactForm } from 'components/CreateContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactDetails } from 'components/ContactDetails';
import { Modal } from 'components/Modal';

const fetchContactsAction = fetchContacts();

const Contacts = () => {
  const [visible, setVisible] = useState(false);
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction);
  }, [dispatch]);

  const toggleVisibility = useCallback(() => {
    setVisible(prevState => !prevState);
  }, []);

  const title = useMemo(
    () => (visible ? 'CREATE CONTACT' : 'CONTACT LIST'),
    [visible]
  );
  const modalContent = useMemo(() => <ContactDetails />, []);

  return (
    <Box p={4}>
      <Button
        type="button"
        onClick={toggleVisibility}
        colorScheme={visible ? 'red' : 'teal'}
        mb={4}
      >
        {visible ? 'CANCEL' : 'ADD CONTACT'}
      </Button>
      <Heading mb={4}>{title}</Heading>{' '}
      {visible ? (
        <CreateContactForm toggleVisibility={toggleVisibility} />
      ) : (
        <>
          <Filter />
          <ContactList />

          {isModalOpen && (
            <Modal>
              <Box p={4}>
                <Button
                  type="button"
                  onClick={toggleVisibility}
                  bg="transparent"
                  color="gray.800"
                  mb={4}
                >
                  CANCEL
                </Button>
                {modalContent}
              </Box>
            </Modal>
          )}
        </>
      )}
    </Box>
  );
};

export default Contacts;
