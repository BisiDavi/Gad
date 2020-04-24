import React from 'react'
import { Form, Formik, useField } from 'formik';
import { LoginStyles } from '../styles/login';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field}{...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}
const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field}{...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}


const Login = () => {
  return (
    <LoginStyles>
      <Formik
        initialValues={{
          phonenumber: '',
          password: '',
          acceptedTerms: false,
        }}
        validateSchema={
          Yup.object({
            phonenumber: Yup.number()
              .min(5, 'Must be at least 3 characters')
              .max(10, 'Must be 10 characters or less')
              .required('Required'),
            password: Yup.string()
              .email('Invalid password')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and condition')
          })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000)
        }
        }
      >
        {props => (
          <div className="login-wrapper">
            <Form className="login">
              <h1>Welcome</h1>
              <CustomTextInput label="Phone number" name="phonenumber" type="text" placeholder="Enter your phone number" />
              <CustomTextInput label="Password" name="password" type="password" placeholder="Enter your password" />
              <CustomCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </CustomCheckbox>
              <button type="submit">
                {props.isSubmitting ? 'Loading ...' : 'Login'}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </LoginStyles>
  )
}

export default Login;
