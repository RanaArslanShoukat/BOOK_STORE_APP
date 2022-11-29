import React from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add.js';
import About from './components/About.js';
import Books from './components/Books.js';
import Update from './components/Update.js';
const App = () => {
  return (
    <>
    <header>
      <Navbar /> 
    </header>
    <main>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/books' element={<Books />} exact />
      <Route path='/add' element={<Add />} exact />
      <Route path='/about' element={<About />} exact />
      <Route path='/books/:id' element={<Update />} exact />
    </Routes>
    </main>
    </>
  )
}

export default App;
