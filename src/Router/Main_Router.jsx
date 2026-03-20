import React from 'react'
import {Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About'
import Blog from './Componants/Blog'
import Index from './Componants/Index'
import Contact from './Componants/Contact'
import Notfound from './Componants/Notfound'
import Kavy from './Componants/Kavy'
import Profile from './Componants/Profile'
import Settings from './Componants/Settings'
import Login from './Componants/Login'


function Main_Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='xyz' element={<Kavy />} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </>
  )
}

export default Main_Router