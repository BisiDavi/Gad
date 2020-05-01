import React from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import '../styles/artisanpro.css';

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

const Artisanpro = () => {
  return (
    <div>
      <div className="gadpro">
        <div className="pro-header">
          <h1>Become a Gad Pro</h1>
          <p>Earn more income from your profession</p>
        </div>
        <div className="gadpro-body">
          <h3>Do you know you can earn more income from doing what you love?  <span className="make_red">Become a GadPro</span></h3>
          <Formik
            initialValues={{
              referralcode: '',
              fullname: '',
              phonenumber: '',
              service: '',
              email: '',
              marital: '',
              gender: '',
              createpassword: '',
              confirmpassword: '',
              dateofBirth: '',
              stateofResidence: '',
              address: '',
              bank: '',
              accountName: '',
              accountNumber: '',
              guarantor: '',
              guarantorAddress: '',
              guarantorNumber: '',
              about: '',
              image: ''
            }}
            validationSchema={
              Yup.object().shape({
                referralcode: Yup.number(),
                fullname: Yup.string()
                  .required('your full name is required'),
                phonenumber: Yup.number()
                  .required('your phone number is required'),
                service: Yup.string()
                  .required('Please select the service you wanto to render'),
                email: Yup.string()
                  .required('enter your email please'),
                marital: Yup.string()
                  .required('Select your marital status'),
                gender: Yup.string()
                  .required('enter your gender'),
                createpassword: Yup.string()
                  .min(5, 'Must be at least 3 characters')
                  .max(10, 'Must be 10 characters or less')
                  .required('create a password'),
                confirmpassword: Yup.string()
                  .oneOf([Yup.ref('createPassword'), null], 'Passwords must match')
                  .required('Password must match'),
                dateofBirth: Yup.string()
                  .required('enter your date of birth'),
                stateofResidence: Yup.string()
                  .required('enter your state of residence'),
                address: Yup.string()
                  .required('enter your address'),
                bank: Yup.string()
                  .required('select your bank'),
                accountName: Yup.string()
                  .required('enter your account name'),
                accountNumber: Yup.number()
                  .required('enter your account number'),
                guarantor: Yup.string()
                  .required('enter your guarantor name'),
                guarantorAddress: Yup.string()
                  .required("enter your guarantor's address"),
                guarantorNumber: Yup.number()
                  .required("enter your guarantor's phone number"),
                about: Yup.string()
                  .required('Tell us about yourself'),
                image: Yup.string()
                  .required('Upload your image')
              })
            }
            onSubmit={fields => {
              setTimeout(() => {
                alert('SUCCESS !! \n\n\n' + JSON.stringify(fields, null, 8));
              }, 3000)
            }}
          >
            {props => (
              <div className="artisanpro-wrapper">
                <Form className="bepro">
                  <CustomTextInput label="Referral Code" name="referralcode" type="text" placeholder="optional" />
                  <CustomTextInput label="Full name" name="fullname" type="text" placeholder="Enter your Full name" />
                  <CustomTextInput label="Select Service Offered" name="service" type="text" placeholder="Select a service you render" />
                  <div className="double">
                    <CustomTextInput label="Email" name="email" type="email" placeholder="Enter your email" />
                    <CustomTextInput label="Mobile Number" name="phonenumber" type="text" placeholder="What's your marital status" />
                    <CustomTextInput label="Create Password" name="createpassword" type="password" placeholder="Create a password" />
                    <CustomTextInput label="Confirm Password" name="confirmpassword" type="password" placeholder="Confirm your password" />
                    <CustomTextInput label="Date of Birth" name="dateofBirth" type="text" placeholder="What's your date of birth" />
                    <CustomTextInput label="State of Residence" name="stateofResidence" type="text" placeholder="Select an option" />
                    <CustomTextInput label="Address" name="address" type="text" placeholder="Where do you live ?" />
                    <CustomTextInput label="Bank" name="bank" type="text" placeholder="Select a bank" />
                    <CustomTextInput label="Account Name" name="accountName" type="text" placeholder="Enter your bank account name" />
                    <CustomTextInput label="Account Number" name="accountNumber" type="text" placeholder="Enter your bank account number" />
                  </div>
                  <div className="triple">
                    <CustomTextInput label="Guarantor" name="guarantor" type="text" placeholder="Enter your guarnator's full name" />
                    <CustomTextInput label="Guarantor's Address" name="guarantorAddress" type="text" placeholder="Where do your guarantor live? " />
                    <CustomTextInput label="Guarantor's Mobile" name="guarantorNumber" type="text" placeholder="Enter your guarantor's phone number" />
                  </div>
                  <div className="about">
                    <CustomTextArea label="About" name="guarantorAddress" type="text" rows="8" cols="50" placeholder="We want to know more about you?" />
                  </div>
                  <CustomTextInput label="Upload Image" name="image" placeholder="Choose files to upload" />
                  <button type="submit">
                    {props.isSubmitting ? 'Loading ...' : 'Submit'}
                  </button>
                </Form>
              </div>
            )}
          </Formik>

        </div>
      </div>
    </div>
  )
}


export default Artisanpro;