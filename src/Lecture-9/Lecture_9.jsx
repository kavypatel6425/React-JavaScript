import React, { useState } from 'react'
import Button from '../Componants/Button';

function Lecture_9() {
    {/* 1️⃣ Simple if-else Greeting */ }

    // const isLogin = true;
    // function login() {
    //     if (isLogin === true) {
    //         alert ("Welcome User")
    //     }else {
    //         alert("Please Login.")
    //     }
    // }

    {/* 2️⃣ Ternary Toggle Text*/ }

    // const [show ,setShow] = useState(false)

    {/* 3️⃣ && Operator Example */ }

    // const isAdmin = true;

    // function tonggal() {
    //     if (isAdmin == true) {
    //         return "Admin Access"
    //     }
    // }

    {/* 4️⃣ Login–Logout Button */ }

    // const [login,setLogin] = useState(true)

    {/* 5️⃣ Loading Indicator */ }

    // const [loding] = useState(true) 

    {/* 6️⃣ Empty List Message */ }

    // const arr = ["Kavy,","Het,","Aastha,","Hiya"];
    // const arr = [];

    // if (arr.length == 0) {
    //     return "No Items Found"
    // }else{
    //     return arr
    // }

    {/* 7️⃣ Conditional Button Disable */ }

    // const [form,setForm] = useState("")

    {/* 8️⃣ Multi-Condition Rendering */ }

    // const isLoggedIn = true;
    // const isPremium = true;

    // function abc() {
    //     if (isLoggedIn , isPremium === true) {
    //         return "Premium Content"

    //     } else {
    //         return "Login and Buy Premium"
    //     }
    // }

    {/* 9️⃣ Profile Image Fallback */ }

    // const profileimage = false;

    // function image() {
    //     if (profileimage == true) {
    //         return "Profile Image"
    //     } else {
    //         return "Default avatar"
    //     }
    // }

    {/* 🔟 Conditional CSS Class */ }

    // const [active,setActive]= useState(null)

    {/* 1️⃣1️⃣ Role-Based Dashboard */ }

    // const [Admin]= useState(true);

    {/* 1️⃣2️⃣ Toggle Component Visibility */ }

    // const [modal, setModal] = useState(null)
    return (
        <>
            {/* 1️⃣ Simple if-else Greeting */}
            {/* <p>{login()}</p> */}


            {/* 2️⃣ Ternary Toggle Text */}
            {/* <button onClick={()=>setShow(!show)}>
                {show ? "Hide Text":"Show Text" }
            </button>
            {show && <p>Namaste Bharat</p>} */}

            {/* 3️⃣ && Operator Example */}
            {/* <h1>{tonggal()}</h1> */}

            {/* 4️⃣ Login–Logout Button */}

            {/* <button onClick={()=>setLogin(!login)}>
                {login? "Log out": "Log in"}
            </button> */}

            {/* 5️⃣ Loading Indicator */}

            {/* {loding ? <p>Loding......Text</p>:<p>Namaste Bharat</p>} */}

            {/* 7️⃣ Conditional Button Disable */}

            {/* <form action="#">
                <label htmlFor="username">UserName</label>
                <input type="text" value={form} onChange={(e)=>setForm(e.target.value)}/>
                {form && <button>Submit</button>}
            </form> */}

            {/* 8️⃣ Multi-Condition Rendering */}

            {/* <p>{abc()}</p> */}

            {/* 9️⃣ Profile Image Fallback */}

            {/* <p>{image()}</p> */}

            {/* 🔟 Conditional CSS Class */}

            {/* <button className={active ? "Active":"UnActive"} onClick={()=>setActive(!active)}>
                Click
            </button> */}

            {/* 1️⃣1️⃣ Role-Based Dashboard */}

            {/* {Admin? "Admin dashboard ":"User dashboard"} */}

            {/* 1️⃣2️⃣ Toggle Component Visibility */}

            {/* <button onClick={()=>setModal(!modal)}>
                {modal ? "Hide Modal":"Show Modal" }
            </button>

            {modal && "Modal"} */}
        </>
    )
}

export default Lecture_9