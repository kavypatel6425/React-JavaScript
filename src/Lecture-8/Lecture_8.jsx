import React, { useState } from 'react'

function Lecture_8() {
    // const [form, setForm] = useState({
    //     name: "",
    //     Email: "",
    //     Password: "",
    // })

    const [data, setData] = useState()
    const [name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const [error, setError] = useState({})
    function Submit(e) {
        e.preventDefault()

        const cheakError = {
            name: "",
            Email: "",
            Password: "",
        }

        if (cheakError.name === "") {
            cheakError.name = "Enter Your Name"
        }

        if (cheakError.Email === "") {
            cheakError.Email = "Enter Your Email"
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.Email)) {
            cheakError.Password = "Enter Velid Email"
        }

        if (cheakError.Password === "") {
            cheakError.Password = "Enter Your Password"
        }
        else if (cheakError.Password.length < 6) {
            cheakError.Password = "Enter Velid Password"
        }

        setError(cheakError)
    }
    return (
        <>
            <form action="#" onSubmit={Submit}>
                <label htmlFor="text">UserName</label>
                <input type="text" onChange={(e) => setForm(e.target.value)} /> <br /> <br />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setForm(e.target.value)} /><br /> <br />
                {error.Email && <p style={{ color: "red" }}>{error.Email}</p>}

                <label htmlFor="Password">Password</label>
                <input type="password" onChange={(e) => setForm(e.target.value)} /> <br /><br />
                {error.Password && <p style={{ color: "red" }}>{error.Password}</p>}

                <button type='Submit'>Submit</button>
            </form>
        </>
    )
}

export default Lecture_8    