import React from 'react';
import { Task, Profile, Location, Confirm } from '../partials';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/modal.css';
import 'react-responsive-modal/styles.css';

class Mainmodal extends React.Component {
  state = {
    step: 1,
    taskcategory: '',
    taskdescription: '',
    name: '',
    subcategory: '',
    location: '',
    date: '',
    phonenumber: '',
    email: '',
    liName: ''
  }

  nextPage = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevPage = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleFormChanges = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }


  render() {
    const { step } = this.state;
    const { taskcategory, taskdescription, name, subcategory,
      location, date, phonenumber, email } = this.state;
    const values = {
      taskcategory, taskdescription, name, subcategory,
      location, date, phonenumber, email
    }
    switch (step) {
      case 1:
        return (
          <Task
            nextPage={this.nextPage}
            handleFormChanges={this.handleFormChanges}
            values={values}
          />
        )
      case 2:
        return (
          <Location
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleFormChanges={this.handleFormChanges}
            values={values}
          />
        )
      case 3:
        return (
          <Profile
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleFormChanges={this.handleFormChanges}
            values={values}
          />
        )
      case 4:
        return (
          <Confirm
            prevPage={this.prevPage}
            handleFormChanges={this.handleFormChanges}
            values={values}
          />
        )
      default:
        return (
          <Task />
        )
    }
  }
}

export default Mainmodal;
