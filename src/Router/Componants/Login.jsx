import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

function Login() {

    const [name, setname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setemail] = useState("")

    function submit(e) {
        e.preventDefault();

        if (name === "") {
            return "Enter Your Name"
        }

        if (email == "") {
            return "Enter Your Email"
        }

        if (password == "") {
            return "Enter Your Password"
        } else if (password.length > 6) {
            return "Enter Your Velid Password"
        }
    }


    return (
        <>
            <form action="#" onSubmit={submit}>
                <label htmlFor="UserName">UserName:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <span></span>
                <br /> <br />


                <label htmlFor="Email">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <br /> <br />

                <label htmlFor="Password">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />

                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Login


