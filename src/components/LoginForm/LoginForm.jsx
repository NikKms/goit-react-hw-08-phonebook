import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
