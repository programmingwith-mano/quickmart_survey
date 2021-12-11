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
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

let dispatch;

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
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

function ProductList(props) {
  dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    setChecked(props.selectedItems);

    (async () => {
      const result = await axios.get(
          "http://quickmartsurvey-env.eba-dwrqsghb.ap-south-1.elasticbeanstalk.com/api/quickmart/categories/listproducts"
          //"http://localhost:5000/api/quickmart/categories/listproducts"
      );
      dispatch({type: 'LIST_CATEGORY_PRODUCT', categoryList: result.data.categoryList, productList: result.data.productList});
      setIsLoading(false);
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (value) => () => {
    console.log('Enteringggggggggggggggggggggggg');
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
    props.submit();
    props.nextStep();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider>
      <>
      <SearchAppBar productList={Object.values(props.productList)} handleToggle={handleToggle}/>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600  }}
        >
          {props.isTransactionProgress === true ?<div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}><CircularProgress /></div>: ''}

          {isLoading === false ? <> <Tabs
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
              props.categoryList.map((data, index) => (
                <Tab sx={{ borderBottom: 1, borderColor: 'divider'}} label={data.categoryName} {...a11yProps({data})} value={data.categoryId} />    
              ))
            }
        </Tabs>
        <Paper elevation={0} style={{maxHeight: '100%', overflow: 'auto'}}>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {props.productList.filter(item => item.categoryId === value).map((item) => {
            const labelId = `checkbox-list-secondary-label-${item.productId}`;
            return (
              <ListItem 
                key={item.productId}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(item.productId)}
                    checked={checked.indexOf(item.productId) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <ListItemAvatar>
                  <Avatar>
                    <ShoppingCartOutlinedIcon />
                  </Avatar>
                    {/*<Avatar
                      alt={`Avatar n°${item.productId + 1}`}
                      src={`/static/images/avatar/${item.productId + 1}.jpg`}
                    />*/}
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`${item.productName}`} secondary={`${item.size}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List></Paper></> :<div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}><CircularProgress /></div>}
      </Box>
    </>
    <Typography align='center'>
      <Button
        color="primary"
        variant="outlined"
        onClick={back}
      >Back</Button> &nbsp;&nbsp;&nbsp;
      {checked.length > 0 ? 
      <>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Confirm
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Submit
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to submit?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={next}>Submit</Button>
          </DialogActions>
        </Dialog>
      </>
        : <Button
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