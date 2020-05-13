import React from 'react';
import { Progressbar } from '../partials';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'react-responsive-modal/styles.css';
import '../styles/modal.css';


class Location extends React.Component {
  nextModal = e => {
    e.preventDefault();
    this.props.nextPage();
  }
  prevModal = e => {
    e.preventDefault();
    this.props.prevPage();
  }

  render() {
    const { values, handleFormChanges } = this.props;
    return (
      <Formik
        initialValues={{
          tasklocation: '',
          landmark: '',
          date: '',
          paymentmode: ''
        }}
        validateSchema={
          Yup.object({
            tasklocation: Yup.string()
              .required('Note:Your correct location enables our professionals to locate you on time.'),
            landmark: Yup.string()
              .required('Select an Option'),
            date: Yup.date()
              .required("Don't forget to tell us about the date to execute your task"),
            paymentmode: Yup.string()
              .required('Select your most prefered payment method'),
          })
        }
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000)
        }}>
        <React.Fragment>
          <div className="locationmodal" >
            <Progressbar />
            <div className="locationbutton">
              <p>Abuja</p>
              <p>Lagos</p>
            </div>
            <Form>
              <div className="locationform">
                <div>
                  <label htmlFor="tasklocation">Your Task Location</label>
                  <input onChange={handleFormChanges('tasklocation')} placeholder="Enter your home address" />
                </div>
                <div>
                  <label htmlFor="landmark">Please what's your Nearest Bust Stop?</label>
                  <input onChange={handleFormChanges('landmark')} placeholder="Assist us in locating you by correctly filling this information" />
                </div>
                <div className="row-two">
                  <div>
                    <label htmlFor="date">Job Date* </label>
                    <input placeholder="Enter your home address" />
                  </div>
                  <div>
                    <label htmlFor="paymentmode">Payment Method*</label>
                    <input placeholder="Enter your home address" />
                  </div>
                </div>
                <div className="btn-group">
                  <button onClick={this.prevModal} className="prev" type="submit">Previous</button>
                  <button onClick={this.nextModal} className="next" type="submit">Next</button>
                </div>
              </div>
            </Form>
          </div>
        </React.Fragment>
      </Formik>
    )
  }
}

export default Location;
