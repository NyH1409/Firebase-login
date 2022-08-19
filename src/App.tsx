import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
        <Route />
    </Routes>
  );
}

export default App;
