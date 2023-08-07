import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedContact } from 'redux/modal/selectorsModal';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/operationsContacts';
import { toggleModal } from 'redux/modal/modalSlice';
import {
  Box,
  Button,
  Input,
  Link,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { DeleteIcon } from '@chakra-ui/icons';

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const ContactDetails = () => {
  const selectedContact = useSelector(selectSelectedContact);
  const dispatch = useDispatch();

  if (!selectedContact) {
    return null;
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я0-9'-\s]+$/,
        'Name may contain only letters, Cyrillic letters, digits, apostrophe, dash, and spaces.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^[0-9\s+()-]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses'
      )
      .required('Number is required'),
  });

  const handleSubmit = values => {
    dispatch(
      updateContact({
        contactId: selectedContact.contactId,
        name: values.name,
        number: values.number,
      })
    );
    dispatch(toggleModal());

    toast.info(`Contact ${values.name} updated successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      toastId: 'update-success-toast',
    });
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(selectedContact.contactId));
    dispatch(toggleModal());

    toast.error(`Contact ${selectedContact.name} deleted successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      toastId: 'delete-success-toast',
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          name: selectedContact.name,
          number: selectedContact.number,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box shadow="md" borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Contact Details
            </Heading>
            <label>
              Name:
              <Field as={Input} type="text" name="name" />
              <ErrorMessage
                name="name"
                component={ErrorText}
                className="error"
              />
            </label>
            <label>
              Number:
              <Field as={Input} type="text" name="number" />
              <ErrorMessage
                name="number"
                component={ErrorText}
                className="error"
              />
            </label>
            <Flex justifyContent="flex-start" mt={4}>
              <Button type="submit" bg="teal">
                Update Contact
              </Button>
            </Flex>
          </Box>
        </Form>
      </Formik>

      <Flex mt={4} alignItems="center">
        <Button
          type="button"
          onClick={handleDeleteContact}
          colorScheme="red"
          size="lg"
        >
          <DeleteIcon />
        </Button>
        <Spacer />
        <Box
          bg="green.500"
          p={4}
          borderRadius="30%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link href={`tel:${selectedContact.number}`} display="block" mr={2}>
            <FaPhone size={24} />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default ContactDetails;
