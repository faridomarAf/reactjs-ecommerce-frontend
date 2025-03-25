import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/(auth)/Register';
import Login from './pages/(auth)/Login';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}
