import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$/,
      'Password must contain only Latin letters (both uppercase and lowercase), digits, and other characters.'
    )
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
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
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <ErrorMessage name="password" component={ErrorText} />
          </FormControl>

          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="teal"
            mt={4}
          >
            LOGIN
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
