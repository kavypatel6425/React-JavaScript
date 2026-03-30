import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';

function Child(props, ref) {
    // useImperativeHandle(ref, () => {
    //     return {
    //         task
    //     }
    // })
    // const task = () => {
    //     console.log("this is my first file");
    // }


    //  1. Focus Input from Parent

    // const inputref = useRef()

    // useImperativeHandle(ref, () => ({
    //     xyz: () => {
    //         inputref.current.focus();
    //     }
    // }))

    // 2. Clear Input Field

    // const clearref = useRef()
    // const [data, setData] = useState("kavy")

    // useImperativeHandle(ref, () => ({

    //     clearInput() {
    //         setData("");
    //     }

    // }))

    // 4. Toggle Password Visibility

    // const [visible,setVisible] = useState(false)

    // useImperativeHandle(ref,()=>({
    //     show:()=>setVisible(true),
    //     hide:()=>setVisible(false)
    // }))

    // 5. Enable/Disable Input

    // const [enable, setEnable] = useState(true)

    // useImperativeHandle(ref,()=>({
    //     enable:()=>setEnable(false),
    //     disable :()=>setEnable(true)
    // }))


    // 7. Reset Form Fields 

    // const [name,setName] = useState()
    // const [email,setEmail] = useState()

    // useImperativeHandle(ref,()=>({
    //     resateForm(){
    //         setName("");
    //         setEmail("");
    //     }
    // }))

    // 8. Trigger Alert from Child

    // const [abc, setAlert] = useState();

    // useImperativeHandle(ref, () => ({
    //     showAelart() {
    //         alert("Form Submited")
    //     }
    // }))


    // 9. Change Input Border Color

    // const [Color, setColor] = useState();

    // useImperativeHandle(ref, () => ({
    //     bordar() {
    //         console.log("hii");

    //     }
    // }))

    // 10. Get Input Value

    // const [show, setShow] = useState("");

    // useImperativeHandle(ref, () => ({
    //     getValue: () => show
    // }))


    // 12. Toggle Visibility Component

    // const [visible, setVisible] = useState(false)

    // useImperativeHandle(ref, () => ({
    //     show: () => setVisible(true),
    //     hide: () => setVisible(false),
    // }))
    return (
        <>
            <p>child</p>


            {/* <input type="text" ref={inputref} /> */}


            {/* <input type="text" ref={clearref} value={data} onChange={(e) => setData(e.target.value)} /> */}


            {/* <input type={visible?"text":"password"} /> */}


            {/* <input type="text" disabled={enable}/> */}


            {/* <input
                type="text"
                placeholder='Enter Your Name'
                value={abc}
                onChange={(e) => setAlert(e.target.value)}
            /> <br /> */}


            {/* <input
                type="text"
                placeholder='Enter Your Name'
                value={Color}
                onChange={(e) => setColor(e.target.value)}
            /> <br /> */}

            {/* 
            <input
                type="text"
                placeholder='Enter Your Name'
                value={show}
                onChange={(e) => setShow(e.target.value)}
            /> <br /> */}

            {/* {
                visible ? <div><p>This section is toggled</p></div> : null
            } */}



        </>
    )
}

export default forwardRef(Child)