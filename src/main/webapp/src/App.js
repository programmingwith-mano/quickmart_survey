import React from 'react';
import { UserForm } from './components/panels/UserForm';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AddProduct } from './components/panels/AddProduct';
import { Provider } from 'react-redux';
import store from './store/store'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
        <Routes>
          <Route path='/' element={<UserForm/>} />
          <Route path='/admin' element={<AddProduct/>} />
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
