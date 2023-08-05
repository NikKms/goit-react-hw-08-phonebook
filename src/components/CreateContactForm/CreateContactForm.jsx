import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { addContact } from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import { toast } from 'react-toastify';

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

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

  const handleSubmit = (values, { resetForm }) => {
    const extContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (extContact) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: values.name, number: values.number }));
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
        <label>
          Name
          <Field type="text" name="name" placeholder="Введіть ім'я" />
          <ErrorMessage name="name" component={ErrorText} />
        </label>

        <label>
          Number
          <Field
            type="tel"
            name="number"
            placeholder="Введіть номер телефону"
            required
          />
          <ErrorMessage name="number" component={ErrorText} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default CreateContactForm;
