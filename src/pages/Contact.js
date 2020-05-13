import React from 'react';
import { Formik, useField } from 'formik';
import { Form } from 'react-formik-ui';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="customTextInput">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field}{...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="customTextInput">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-input" {...field}{...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}



const Contact = () => {
  return (
    <div className="contactme">
      <h1>Get in Touch</h1>
      <Formik
        initialValues={{
          name: '',
          phonenumber: '',
          email: '',
          message: ''
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string()
              .required('Your name please'),
            phonenumber: Yup.number()
              .required('Your phone number please'),
            email: Yup.string()
              .required('Please enter your email'),
            message: Yup.string()
              .required('Enter your message here')
          })
        }
        onSubmit={fields => {
          setTimeout(() => {
            alert('SUCCESS !! \n\n\n' + JSON.stringify(fields, null, 8));
          }, 3000)
        }}
      >
        {props => (
          <Form className="contact-form">
            <CustomTextInput label="name" name="name" type="text" placeholder="Enter your name" />
            <CustomTextInput label="phonenumber" name="phonenumber" type="text" placeholder="Enter your phonenumber" />
            <CustomTextInput label="email" name="email" type="text" placeholder="Enter your email" />
            <CustomTextArea label="message" name="message" type="text" rows="5" cols="50" placeholder="your messsage" />
            <button className="submitForm" type="submit">
              {props.isSubmitting ? 'Loading ...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact;
