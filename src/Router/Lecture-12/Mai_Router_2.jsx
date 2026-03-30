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
import UseRef from '../Lecture-15/Componants-15/UseRef'
import UseContext from '../Lecture-15/Componants-15/UseContext'
import Child_1 from '../Lecture-15/Componants-15/Child_1'
import Child_2 from '../Lecture-15/Componants-15/Child_2'
import Child_3 from '../Lecture-15/Componants-15/Child_3'
import Perent from '../Lecture-16/Perent'
import Theme from '../Lecture-15/Componants-15/Theme'
import ThemeChild from '../Lecture-15/Componants-15/ThemeChild'
import UseReducer from '../Lecture-17/UseReducer'
import UseId from '../Lecture-17/UseId'
import UseTransition from '../Lecture-17/UseTransition'

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
                    <Route path='useRef' element={<UseRef/>}/>
                    <Route path='useContext' element={<UseContext/>}/>
                    <Route path='child_1' element={<Child_1/>}/>
                    <Route path='child_2' element={<Child_2/>}/>
                    <Route path='child_3' element={<Child_3/>}/>
                    <Route path='perent' element={<Perent/>}/>
                    <Route path='theme' element={<Theme/>}/>
                    <Route path='themechild' element={<ThemeChild/>}/>
                    <Route path='usereducer' element={<UseReducer/>}/>
                    <Route path='useid' element={<UseId/>}/>
                    <Route path='useTransition' element={<UseTransition/>}/>

                </Route>
            </Routes>


        </>
    )
}

export default Mai_Router_2