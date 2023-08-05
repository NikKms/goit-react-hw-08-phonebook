import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { selectIsModalOpen } from 'redux/modal/selectorsModal';
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
    <section>
      <button type="button" onClick={toggleVisibility}>
        {visible ? 'CANCEL' : 'ADD CONTACT'}
      </button>
      <h1>{title}</h1>
      {visible ? (
        <CreateContactForm toggleVisibility={toggleVisibility} />
      ) : (
        <>
          <Filter />
          <ContactList />

          {isModalOpen && <Modal>{modalContent}</Modal>}
        </>
      )}
    </section>
  );
};

export default Contacts;
