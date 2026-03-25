import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home_1 from './Componans-12/Home_1'
import About_1 from './Componans-12/About_1'
import Index_1 from './Componans-12/Index_1'
import Contact_1 from './Componans-12/Contact_1'
import Xyz from './Componans-12/Xyz'
import Useeffect from '../Lecture-14/Componants/Useeffect'
import EveryRender from '../Lecture-14/Componants/EveryRender'
import Unmount from '../Lecture-14/Componants/Unmount'
import ClickListener from '../Lecture-14/Componants/ClickListener'
import UseLayout from '../Lecture-14/Componants/UseLayout'

function Mai_Router_2() {
    const Home = lazy(() => import("./Componans-12/Home_1"))
    return (
        <>
            <Routes>
                <Route path='/' element={<Index_1 />}>
                    <Route path='home_1' element={
                        <Suspense fallback={<p>Loading...</p>}>
                            <Home />
                        </Suspense>} />
                    <Route path='about_2' element={<About_1 />} />
                    <Route path='contact_1' element={<Contact_1 />} />
                    <Route path='xyz/:id' element={<Xyz />} />
                    <Route path='useeffect' element={<Useeffect/>}/>
                    <Route path='everyrender' element={<EveryRender/>}/>
                    <Route path='unmount' element={<Unmount/>}/>
                    <Route path='clickListener' element={<ClickListener/>}/>
                    <Route path='uselayout' element={<UseLayout/>}/>
                </Route>
            </Routes>


        </>
    )
}

export default Mai_Router_2