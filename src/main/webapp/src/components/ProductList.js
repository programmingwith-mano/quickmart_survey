import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import SearchAppBar from './SearchAppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import categoryList from '../data/categorylist';
import productList from '../data/productlist'; 

function renderRow(props) {
  const { index, style, data } = props;
  const item = this.props.data[this.props.index];
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Items ${data}`} />
        {item}
      </ListItemButton>
    </ListItem>
  );
}

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

export default function ProductList() {
  const [value, setValue] = useState(0);
  const [categoryList1, setCategoryValues] = useState([]);
  const [productList1, setProductValues] = useState([]);
  const [checked, setChecked] = useState([1]);
  useEffect(() => {
    setCategoryValues(categoryList);
    setProductValues(productList);
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

    setChecked(newChecked);
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
          {productList1.filter(item => item.categoryId == value).map((item) => {
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
    </MuiThemeProvider>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};