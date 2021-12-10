import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import SearchAppBar from './SearchAppBar';
import Button from '@material-ui/core/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import categoryList from '../../data/categorylist';
import productList from '../../data/productlist'; 
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import constants from '../../constants';

let dispatch;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(data) {
  return {
    id: `vertical-tab-${data.categoryId}`,
    'aria-controls': `vertical-tabpanel-${data.categoryId}`,
  };
}

const getAllProducts = () => {
  axios.get(URL).then((response) => {
    dispatch({type: constants.CUSTOMER_DATA, customer: response.data});
  }).catch(error => console.error(`Error: ${error}`));
}

function ProductList(props) {
  dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [categoryList1, setCategoryValues] = useState([]);
  const [productList1, setProductValues] = useState([]);
  const [checked, setChecked] = useState([]);


  useEffect(() => {
    setCategoryValues(categoryList);
    setProductValues(productList);
    setChecked(props.selectedItems);
    //getAllProducts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.updateCustomerEntry(newChecked)
    setChecked(newChecked);
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <MuiThemeProvider>
      <>
      <SearchAppBar/>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600  }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            scrollButtons
            allowScrollButtonsMobile
            wrapped={true}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', maxWidth: 150 }}
          >
            {
              categoryList1.map((data, index) => (
                <Tab sx={{ borderBottom: 1, borderColor: 'divider'}} label={data.categoryName} {...a11yProps({data})} value={data.categoryId} />    
              ))
            }
        </Tabs>

        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {productList1.filter(item => item.categoryId === value).map((item) => {
            const labelId = `checkbox-list-secondary-label-${item.categoryItemId}`;
            return (
              <ListItem
                key={item.categoryItemId}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(item.categoryItemId)}
                    checked={checked.indexOf(item.categoryItemId) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${item.categoryItemId + 1}`}
                      src={`/static/images/avatar/${item.categoryItemId + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`${item.categoryItemName}`} secondary={`${item.size}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
    <Typography align='center'>
      <Button
        color="primary"
        variant="outlined"
        onClick={back}
      >Back</Button> &nbsp;&nbsp;&nbsp;
      {checked.length > 0 ? <Button
          color="primary"
          variant="contained"
          onClick={next}
        >Confirm</Button> : <Button
        color="primary"
        variant="contained"
        onClick={next} disabled
        >Confirm</Button>}
      </Typography>
    </MuiThemeProvider>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProductList;