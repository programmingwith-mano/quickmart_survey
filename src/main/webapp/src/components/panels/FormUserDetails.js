import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography, Button} from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar';
import Autocomplete from '@mui/material/Autocomplete';

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
          <Autocomplete
            required
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
          <TextField
              required
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
              color="success"
              variant="contained"
              onClick={this.continue} disabled
            >Continue</Button> : <Button
            color="success"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>}
          </Typography>
        </>
      </MuiThemeProvider>
    );
  }
}

const top100Films = [
  { label: 'Ariyalur' },
  { label: 'Chengalpet' },
  { label: 'Chennai' },
  { label: 'Coimbatore' },
  { label: 'Cuddalore' },
  { label: "Dharmapuri" },
  { label: 'Dindigul' },
  { label: 'Erode' },
  { label: 'Kallakurichi' },
  { label: 'Kancheepuram' },
  { label: "Karur" },
  { label: 'Krishnagiri' },
  { label: 'Madurai' },
  { label: 'Mayiladuthurai' },
  { label: 'Nagapattinam' },
  { label: 'Kanyakumari' },
  { label: "Namakkal" },
  { label: 'Perambalur' },
  { label: 'Pudukottai' },
  { label: 'Ramanathapuram' },
  { label: 'Ranipet' },
  { label: 'Salem' },
  { label: "Sivagangai" },
  { label: 'Tenkasi' },
  { label: 'Thanjavur' },
  { label: 'Theni' },
  { label: 'Trichirappalli' },
  { label: 'Thiruvallur' },
  { label: "Thiruvarur" },
  { label: 'Tuticorin' },
  { label: 'Thirunelveli' },
  { label: "Tirupathur" },
  { label: 'Tiruppur' },
  { label: 'Tiruvannamalai' },
  { label: "The Nilgiris" },
  { label: 'Vellore' },
  { label: 'Viluppuram' },
  { label: "Virudhunagar" }
]

export default FormUserDetails;
