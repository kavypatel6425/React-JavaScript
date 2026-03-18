import React from 'react'
// import { Outlet, Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About'
import Blog from './Componants/Blog'
import Index from './Componants/Index'
// import Contact from './Componants/Contact'
import Notfound from './Componants/Notfound'
import Kavy from './Componants/Kavy'
import Profile from './Componants/Profile'
import Settings from './Componants/Settings'
import Login from './Componants/Login'
import Project_Index from '../Project/Project_Index'
import Travel_nev from '../Project/Componants/Travel_nev'
import Destinations from '../Project/Componants/Destinations'
import Packages from '../Project/Componants/Packages'
import Tours from '../Project/Componants/Tours'
import Promotions from '../Project/Componants/Promotions'
import Gallery from '../Project/Componants/Gallery'
import Contact from '../Project/Componants/Contact'

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
      <Routes>
        <Route path='/' element={<Project_Index />}>
          <Route path='navbar' element={<Travel_nev />} />
          <Route path='destinations' element={< Destinations />} />
          <Route path='packages' element={<Packages />} />
          <Route path='tours' element={<Tours />} />
          <Route path='promotions' element={<Promotions />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>

    </>
  )
}

export default Main_Router