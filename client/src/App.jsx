import React from 'react';
import Dashboard from './assets/dashboard';

import Login from "./assets/Login"
import Signup from './assets/signup';
import Category from './assets/Category';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Employee from './assets/Employee';
import Profile from './assets/Profile';
import Home from './assets/Home';
import AddCategory from './assets/AddCategory';
import Addemployee from './assets/Addemployee';
import EmployeeEdit from './assets/EmployeeEdit';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='' element={<Home />}></Route>
      <Route path='/employee' element={<Employee />}></Route>
      <Route path='/signup' element= {<Signup />}></Route>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/create' element={<Addemployee />}></Route>
      <Route path='/add_category' element={<AddCategory />}></Route>
      <Route path='/EmployeeEdit/:id' element={<EmployeeEdit />}></Route>

      </Route>
      

      <Route path='/login' element={<Login />}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App

