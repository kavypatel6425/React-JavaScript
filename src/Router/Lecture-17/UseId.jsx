import React, { useId } from 'react'

function UseId() {

    // const id = useId()


    // const nameid = useId()
    // const emailid = useId()
    // const passworedid = useId()

    const id = useId()

    return (
        <>

            {/* 11. Label & Input Linking */}

            {/* <label htmlFor={id}>UserName</label>
            <input type="text" id={id} /> */}

            {/* 12. Multiple Inputs with Unique IDs */}

            {/* <label htmlFor={nameid}>UserName</label>
            <input type="text" id={nameid} /><br />
            <label htmlFor={emailid}>Email</label>
            <input type="email" id={emailid} /><br />
            <label htmlFor={passworedid}>Password</label>
            <input type="password" id={passworedid} /><br /> */}

            {/* 13. Checkbox Group Accessibility */}

            {/* <input type="checkbox" id={id} name="hobbies" value="reading" />
            <label htmlFor={id}>Reading</label> <br />

            <input type="checkbox" id={id} name="hobbies" value="reading" />
            <label htmlFor={id}>Traveling</label> <br />

            <input type="checkbox" id={id} name="hobbies" value="reading" />
            <label htmlFor={id}>Gaming</label> */}
        </>
    )
}

export default UseId