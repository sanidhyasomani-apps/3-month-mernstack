import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import "./index.css";
import About from './pages/About'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<BlogDetail/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App