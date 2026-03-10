import React, { useState } from 'react'

function Controlled() {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    // const [password, setPassword] = useState(false)
    const [error,setError] = useState({})
    function submit (e)  {

        e.preventDefault(); {/*4️⃣ Prevent Page Reload*/ }

        const cheakError = {}


        if (email === "") {
            cheakError.email = "Enter Your Email"
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            cheakError.email = "Enter Velid Email"
        }


        if (name === "") {
            // alert("Enter Your Name")
            cheakError.name = "Enter Your Name"

        }else if (name.length < 6){
            cheakError.name = "Enter 6 Degite Password"
        }
        setError(cheakError)

        if (name,email === "") {
            
        }
    }

    // function tonggal() {
    //     setPassword(!password)
    // }
    return (
        <>
            {/* 2️⃣ Two-Field Form */}
            <form action="#" onSubmit={submit}>

                <label htmlFor="UserName">UserName :</label>
                <input type="text" onChange={(e) => setname(e.target.value)} /> <br /> <br />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                {/* Task-3*/}




                <label htmlFor="Email">Email :</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}


                <button type="submit">Submit</button>

            </form>














                {/* <label htmlFor="Password">Password :</label>
                <input type='password' value={password}/>
                {password && password}
                <button onClick={() => setPassword(!password)}>
                {password ? "Hide Text" : "Show Text"}
                </button> */}


                {/* <label htmlFor="Password">Password :</label>
                <input  type={password ? "text":"password"} />
                <button onClick={tonggal}>{password ? "Hide password" : "Show password"}</button> */}


        </>
    )
}

export default Controlled