import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography, Button} from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar';

export class FormUserDetails extends Component {
  
  continue = e => {
      this.props.saveCustomerEntry(this.props.values);
      e.preventDefault();
      this.props.nextStep();
  };

  updateValue = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <ButtonAppBar/>
          <br/>
          <Typography align="center" variant="h6" gutterBottom component="div">
              Customer Details
          </Typography>
          <TextField
              required
              placeholder="Enter Full Name"
              label="Full Name"
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
          />
          <br />
          <TextField
              placeholder="Enter Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
          />
          <br />
          <TextField
              placeholder="Enter City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
          />
          <TextField
              placeholder="Enter Mobile Number"
              label="Mobile Number"
              onChange={handleChange('mobileNumber')}
              defaultValue={values.mobileNumber}
              margin="normal"
              fullWidth
          />
          <br /><br /><br />
          <Typography align='center'>
            {this.props.values.fullName === "" ? <Button
              color="primary"
              variant="contained"
              onClick={this.continue} disabled
            >Continue</Button> : <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>}
          </Typography>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
