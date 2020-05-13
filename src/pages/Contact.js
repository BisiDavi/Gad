import React from 'react';
import { Formik, useField } from 'formik';
import { Form } from 'react-formik-ui';
import * as Yup from 'yup';
import { allartisans } from '../partials';
import '../styles/contact.css';

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
      <div className="contact-group">
        <div className="contactus-form">
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
                <CustomTextInput label="Name" name="name" type="text" placeholder="Enter your name" />
                <CustomTextInput label="Phonenumber" name="phonenumber" type="text" placeholder="Enter your phonenumber" />
                <CustomTextInput label="Email" name="email" type="text" placeholder="Enter your email" />
                <CustomTextArea label="Message" name="message" type="text" rows="5" cols="50" placeholder="your messsage" />
                <button className="submitForm" type="submit">
                  {props.isSubmitting ? 'Loading ...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="contact-image">
          <img src={allartisans} alt="contact us" />
        </div>
      </div>
    </div>
  )
}

export default Contact;
