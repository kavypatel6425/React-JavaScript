import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About'
import Blog from './Componants/Blog'
import Footer from '../Componants/Footer'
import Index from './Componants/Index'
import Contact from './Componants/Contact'
import Notfound from './Componants/Notfound'
import Login from '../Lecture-9/Login'
import HelloReact from '../HelloReact'
import Kavy from './Componants/Kavy'

function Main_Router() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/xyz/:id' element={<Kavy/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  )
}

export default Main_Router