import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { selectIsModalOpen } from 'redux/modal/selectorsModal';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { CreateContactForm } from 'components/CreateContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { ContactDetails } from 'components/ContactDetails';
import { Modal } from 'components/Modal';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GiReturnArrow } from 'react-icons/gi';

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
    <>
      <Box as="section">
        <Flex justifyContent="center" alignItems="center">
          <Heading mb={4}>{title}</Heading> <Spacer />
          <Button
            type="button"
            onClick={toggleVisibility}
            colorScheme={visible ? 'red' : 'teal'}
            mb={4}
          >
            {visible ? <GiReturnArrow /> : <AiOutlineUserAdd />}
          </Button>
        </Flex>
        {visible ? (
          <CreateContactForm toggleVisibility={toggleVisibility} />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Box>
      {isModalOpen && <Modal>{modalContent}</Modal>}
    </>
  );
};

export default Contacts;
