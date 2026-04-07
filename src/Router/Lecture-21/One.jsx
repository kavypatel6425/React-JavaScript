import React from 'react'
import { useFormStatus } from 'react-dom'

function One() {
    const {pending} = useFormStatus()

    return (
        <>
            <label htmlFor="Username">UserName :</label>
            <input
                type="text"
                name='UserName'
            /> <br /> <br />
            <label htmlFor="email" >Email :</label>
            <input
                type="email"
                name='email'
            /> <br /> <br />
            <label htmlFor="password">Password :</label>
            <input
                type="password"
                name='password'
            /> <br /><br />

            <button disabled={pending}>
                {pending ? "Submitting..." : "Submit"}
            </button>
        </>
    )
}

export default One