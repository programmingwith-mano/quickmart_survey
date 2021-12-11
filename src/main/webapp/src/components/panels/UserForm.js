import React, { Component } from 'react';
import ProductListContainer from '../containers/productlistcontainer';
import UserFormContainer from '../containers/customercontainer';
import Confirm from '../panels/Confirm';
import Success from '../panels/Success';
import ConfirmContainer from '../containers/confirmcontainer';

export class UserForm extends Component {
  state = {
    step: 1,
    fullName: '',
    mobileNumber: '',
    address: '',
    city: '',
    errorText: ''
  };

  reset = () => {
    this.setState({
      step: 1,
      fullName: '',
      mobileNumber: '',
      address: '',
      city: '',
      errorText: ''
    });
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fullName, mobileNumber, address, city, errorText } = this.state;
    const values = { fullName, mobileNumber, address, city, errorText };

    switch (step) {
      case 1:
        return (
          <UserFormContainer
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ProductListContainer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmContainer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            reset={this.reset}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
