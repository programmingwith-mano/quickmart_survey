import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import logo from './logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography align='center'>
            <img src={logo}/>
            </Typography>
          </IconButton>
          {/* <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1 }}>
            Quick Mart - Survey
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
