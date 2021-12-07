import React from 'react';
import { UserForm } from './components/UserForm';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AddProduct } from './AddProduct';
import SearchAppBar from './components/SearchAppBar';

const App = () => {
  return (
    <div className="App">
    <SearchAppBar/>
      <Router>
      <Routes>
        <Route path='/' element={<UserForm/>} />
        <Route path='/admin' element={<AddProduct/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
