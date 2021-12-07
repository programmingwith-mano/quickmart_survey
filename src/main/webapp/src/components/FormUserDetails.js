import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography, Button} from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog open
            fullWidth
            maxWidth='sm'
          > */}
            <AppBar title="Enter User Details" />
            <br/>
            <Typography align="center" variant="h6" gutterBottom component="div">
              Quick Mart - Survey
            </Typography>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your District"
              label="District"
              onChange={handleChange('district')}
              defaultValue={values.district}
              margin="normal"
              fullWidth
            />
            <br /><br /><br /><br />
            <Typography align='center'>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            </Typography>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
