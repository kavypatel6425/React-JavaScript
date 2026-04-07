import React, { useActionState } from 'react'

function UseAction() {
    const [data, action, peding] = useActionState(submitbtn, undefined)

    function submitbtn(pre, formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(name, password, email);

    }


    return (
        <>
            <form action={action} >
                <label htmlFor="UserName">UserName :</label>
                <input
                    type="text"
                    name='name'
                />
                <br />
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    name='email'
                />
                <br />
                <label htmlFor="password">Password :</label>
                <input
                    type="password"
                    name='password'
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UseAction