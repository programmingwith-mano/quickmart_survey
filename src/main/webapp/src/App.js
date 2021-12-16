import React from 'react';
import { UserForm } from './components/panels/UserForm';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AddProduct } from './components/panels/AddProduct';
import { Provider } from 'react-redux';
import store from './store/store'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';
import banner from './static/images/banner.png';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};


const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const App = () => {
  const [open, setOpen] = React.useState(true); 
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 2000);
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <div>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 600,
          }}
        >
          <Fade in={open}>
            
            <Box sx={style}>
              <Typography align='center' variant="h6" id="spring-modal-description" sx={{ mt: 2, fontWeight: 'fontWeightSemiBold' }}>
                Welcome to
              </Typography>
              <Typography align='center' variant="h6" id="spring-modal-description" sx={{ mt: 2, fontWeight: 'fontWeightSemiBold' }}>
                Quick Mart Survey
                <img src={banner} height={200} width={200}/>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>





    
        <Router>
          <Provider store={store}>
          <Routes>
              <Route path='/' element={<UserForm/>} />
              <Route path='/admin' element={<AddProduct/>} />
          </Routes>
          </Provider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
