import React from 'react'
import { Form, Formik, Field } from 'formik';
import { Progressbar } from '../partials';
import * as Yup from 'yup';
import 'react-responsive-modal/styles.css';
import '../styles/modal.css';


class Task extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextPage();
  }

  render() {
    const { values, handleFormChanges } = this.props;
    return (
      <Formik
        initialValues={{
          taskcategory: '',
          subcategory: ''
        }}
        validateSchema={
          Yup.object({
            taskcategory: Yup.string()
              .required('Select an Option'),
            subcategory: Yup.string()
              .required('Select an Option'),
            taskdescription: Yup.string()
              .required('You mind to tell us more about that task'),
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
          <div>
            <Progressbar />
            <div className="mymodal-content">
              <p> Please tell us more about your task </p>
              <div className="mymodal-success">
                <p> Charges for this service will be given upon inspection by an A1-Pro Limited Verified Artisan!</p>
              </div>
              <Form>
                <div className="mymodal taskcategory">
                  <label htmlFor="taskcategory" name="taskcategory*">Task Category*</label>
                  <Field onChange={handleFormChanges('taskcategory')} as="select" name="taskcategory">
                    <option value="AC repair">AC Repair</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="Drivers">Drivers</option>
                    <option value="Electricals">Electricals</option>
                    <option value="Fumigation">Fumigation</option>
                    <option value="Gas Cooker Repairs">Gas Cooker Repair</option>
                    <option value="Generator Repair">Generator Repair</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Home Cooking/Baking">Home Cooking/Baking</option>
                    <option value="Nanny">Nanny</option>
                    <option value="others">others</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="Refrigerator Repairs">Refrigerator Repairs</option>
                    <option value="tilling">Tilling</option>
                    <option value="Tailoring">Tailoring</option>
                    <option value="Ushers">Ushers</option>
                    <option value="Washing Machine Repair">Washing Machine Repair</option>
                    <option value="Event Staffing">Event Staffing</option>
                    <option value="Photography">Photography</option>
                    <option value="Hairstylist">Hairstylist</option>
                    <option value="Make up Artist">Make up Artist</option>
                    <option value="Painting">Painting</option>
                    <option value="Satellite & CCTV Installation">Satellite & CCTV Installation</option>
                    <option value="Signage">Signage</option>
                    <option value="Plaster of Paris(POP)">Plaster of Paris(POP)</option>
                    <option value="Pickup Delivery">Pickup Delivery</option>
                    <option value="Bricklaying">Bricklaying</option>
                    <option value="Stainless Steel Fitting">Stainless Steel Fitting</option>
                  </Field>
                </div>

                <div className="mymodal subcategory">
                  <label htmlFor="subcategory" name="Subcategory*">Subcategory*</label>
                  <Field onChange={handleFormChanges('subcategory')} as="select" name="subcategory" placeholder="Select an Option">
                    <option value="artisan">Artisan</option>
                  </Field>
                </div>

                <div className="mymodal taskdescription">
                  <label htmlFor="Task Description" name="Task Description*">Task Description* </label>
                  <textarea defaultValue={values.taskdescription} onChange={handleFormChanges('taskcategory')} className="task-description" type="text" rows="3" cols="50"
                    placeholder="Do you have additonal request we should know about? " />
                </div>

                <button className="submitmodal" onClick={this.continue} type="submit">Next</button>
              </Form>
            </div>
          </div >
        </React.Fragment>
      </Formik >
    )
  }
}

export default Task;
