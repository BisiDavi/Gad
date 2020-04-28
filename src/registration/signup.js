import React from 'react'
import { Form, Formik, useField } from 'formik';
import { SignupStyle } from '../styles/Signup-style';
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


const Signup = () => {
  return (
    <SignupStyle>
      <Formik
        initialValues={{
          fullname: '',
          phonenumber: '',
          email: '',
          createPassword: '',
          confirmPassword: '',
          acceptedTerms: false,
        }}
        validationSchema={
          Yup.object().shape({
            fullname: Yup.string()
              .required('Fullname is required'),
            phonenumber: Yup.number()
              .required('Phone number is required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Email is required'),
            createPassword: Yup.string()
              .min(5, 'Must be at least 3 characters')
              .max(10, 'Must be 10 characters or less')
              .required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('createPassword'), null], 'Passwords must match')
              .required('Password must match'),
            acceptedTerms: Yup.bool()
              .oneOf([true], 'You must accept the terms and condition')
          })}
        onSubmit={fields => {
          setTimeout(() => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          }, 3000)
        }}
      >
        {props => (
          <div className="signup-wrapper">
            <Form className="signup">
              <h1>Welcome</h1>
              <CustomTextInput label="Fullname" name="fullname" type="text" placeholder="enter your full name" />
              <CustomTextInput label="Phone number" name="phonenumber" type="text" placeholder="enter your phone number" />
              <CustomTextInput label="Email" name="email" type="email" placeholder="enter your email" />
              <CustomTextInput label="Create Password" name="createPassword" type="password" placeholder="create your password" />
              <CustomTextInput label="Confirm Password" name="confirmPassword" type="password" placeholder="confirm your password" />
              <CustomCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </CustomCheckbox>
              <button type="submit">
                {props.isSubmitting ? 'Loading ...' : 'Signup'}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </SignupStyle>
  )
}

export default Signup;
