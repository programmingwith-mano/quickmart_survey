import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';

export class Confirm extends Component {
  startOver = e => {
    e.preventDefault();
    this.props.startOver();
    this.props.reset();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Thank you" />
            <List>
              <Typography align='center' variant="h6" gutterBottom component="div">
                Thank you for your submission
              </Typography>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.startOver} endIcon={<RefreshIcon />}
            >Start Over</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
