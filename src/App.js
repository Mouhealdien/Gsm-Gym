import React from 'react';
import { Route,Routes } from "react-router-dom";
import {Box} from '@mui/material'
import './App.css';
import ExerciesDetail from './pages/ExerciesDetail'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
  <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/exercise/:id' element={<ExerciesDetail/>}></Route>
    </Routes>
  <Footer/>
  </Box>

  );
}

export default App;
