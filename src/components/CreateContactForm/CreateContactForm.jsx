import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { addContact } from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  number: '',
};

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

const CreateContactForm = ({ toggleVisibility }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async (values, { resetForm }) => {
    const extContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (extContact) {
      toast.error(`${values.name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        toastId: 'error-toast',
      });
      return;
    }

    await dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
    toggleVisibility();

    toast.success(`${values.name} has been added to contacts.`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      toastId: 'success-toast',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box p={4} shadow="md" borderRadius="md">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Field
              as={Input}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component={Text}
              color="red.500"
              fontSize="sm"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number</FormLabel>
            <Field
              as={Input}
              type="tel"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="number"
              component={Text}
              color="red.500"
              fontSize="sm"
            />
          </FormControl>

          <Flex justifyContent="flex-end" mt={4}>
            <Button type="submit" colorScheme="teal">
              Add contact
            </Button>
          </Flex>
        </Box>
      </Form>
    </Formik>
  );
};

CreateContactForm.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
};

export default CreateContactForm;
