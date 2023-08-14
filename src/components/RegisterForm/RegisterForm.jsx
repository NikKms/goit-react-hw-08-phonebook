import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import styled from '@emotion/styled';
import { useState } from 'react';

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9'-\s]+$/,
      'Name may contain only letters, Cyrillic letters, digits, apostrophe, dash, and spaces.'
    )
    .required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$/,
      'The password must contain only Latin letters (both uppercase and lowercase), digits, and other characters.'
    )
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form autoComplete="off">
          <FormControl mb={4}>
            <FormLabel htmlFor="name">username</FormLabel>
            <Input
              as={Field}
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
            <ErrorMessage name="name" component={ErrorText} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="email">email</FormLabel>
            <Input
              as={Field}
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
            <ErrorMessage name="email" component={ErrorText} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="password">password</FormLabel>
            <Input
              as={Field}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              pr="4.5rem"
            />
            <IconButton
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={togglePasswordVisibility}
              variant="ghost"
              size="sm"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              position="absolute"
              right="0.5rem"
              top="50%"
              transform="translateY(0)"
            />
            <ErrorMessage name="password" component={ErrorText} />
          </FormControl>
          {values.password.length < 7 && (
            <Text fontSize="12px" color="gray" mt="0">
              Password must be at least 7 characters long
            </Text>
          )}

          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="teal"
            mt={4}
          >
            SIGN UP
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
