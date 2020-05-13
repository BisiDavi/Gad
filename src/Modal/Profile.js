import React from 'react';
import { Form, Formik, useField } from 'formik';
import '../styles/modal.css';
import * as Yup from 'yup';
import { Progressbar } from '../partials';


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

class Profile extends React.Component {
  nextModal = e => {
    e.preventDefault();
    this.props.nextPage();
  }

  prevModal = e => {
    e.preventDefault();
    this.props.prevPage();
  }
  render() {
    return (
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
          })
        }
        onSubmit={fields => {
          setTimeout(() => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          }, 3000)
        }}
      >
        {props => (
          <div className="profile-wrapper">
            <Progressbar />
            <Form className="profile">
              <CustomTextInput label="Fullname" name="fullname" type="text" placeholder="enter your full name" />
              <div className="row-group">
                <span>
                  <CustomTextInput label="Phone number" name="phonenumber" type="text" placeholder="enter your phone number" />
                </span>
                <span>
                  <CustomTextInput label="Email" name="email" type="email" placeholder="enter your email" />
                </span>
              </div>
              <CustomTextInput label="Create Password" name="createPassword" type="password" placeholder="create your password" />
              <CustomTextInput label="Confirm Password" name="confirmPassword" type="password" placeholder="confirm your password" />
              <div className="btn-group">
                <button onClick={this.prevModal} className="prev" type="submit">Previous</button>
                <button onClick={this.nextModal} className="next" type="submit">Next</button>
              </div>
            </Form>
          </div>
        )}
      </Formik >
    )
  }
}


export default Profile;