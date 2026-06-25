import React, { useContext } from 'react'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './component/Header';
import { ThemeContext } from './context/ThemeContext';


function App() {
          const {theme}=useContext(ThemeContext)
  return (
  <>
  <BrowserRouter>

   <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
     </Routes>
     
  </BrowserRouter>
  </>
  )
}

export default App;