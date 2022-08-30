import React from 'react'
import Register from './components/register'
import Login from './components/login'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Register" element={<Register />} />
      
    </Routes>
  </BrowserRouter>

  )
}

export default App