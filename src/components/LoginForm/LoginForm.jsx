import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values));
      resetForm();
      toast.success(`Welcome back, ${values.email}!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        toastId: 'welcome-toast',
      });
    } catch (error) {
      toast.error(
        'Login failed. Please check your credentials and try again.',
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
          toastId: 'error-toast',
        }
      );
      console.error('Login error:', error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            EMAIL
            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
            <ErrorMessage name="email" component={ErrorText} />
          </label>
          <label>
            PASSWORD
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <ErrorMessage name="password" component={ErrorText} />
          </label>
          <button type="submit" disabled={isSubmitting}>
            LOGIN
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;