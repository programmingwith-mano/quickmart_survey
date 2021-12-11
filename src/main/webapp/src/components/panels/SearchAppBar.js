import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function SearchAppBar(props) {
  let products = Object.values(props.productList);

  const onTagsChange = (event, values, reason, details) => {
    props.handleToggle(details.option.productId)();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
            <Autocomplete
              sx={{ width: '100%', maxWidth: 360 }}
              multiple
              fullWidth
              onChange={onTagsChange}
              limitTags={2}
              id="tags-outlined"
              options={products}
              getOptionLabel={(option) => option.productName + ' - ' + option.size}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search Products.."
                />
              )}
            />         
        </Toolbar>
      </AppBar>
    </Box>
  );
}