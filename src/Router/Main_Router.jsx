import React from 'react'
// import { Outlet, Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About'
import Blog from './Componants/Blog'
import Index from './Componants/Index'
import Contact from './Componants/Contact'
import Notfound from './Componants/Notfound'
import Login from '../Lecture-9/Login'
import Kavy from './Componants/Kavy'
import Profile from './Componants/Profile'
import Settings from './Componants/Settings'
import Project_Index from '../Project/Project_Index'
import Travel_nev from '../Project/Componants/Travel_nev'

function Main_Router() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Index />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='xyz' element={<Kavy />} />
          <Route path='Login' element={<Login />} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Project_Index />}>
          <Route path='navbar' element={<Travel_nev />} />
        </Route>
      </Routes>

    </>
  )
}

export default Main_Router