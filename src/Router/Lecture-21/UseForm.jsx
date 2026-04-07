import React from 'react'
import One from './One';

function UseFormStatus() {

    const add = async () => {
        console.log("hello");
        await new Promise((res) => setTimeout(res, 2000))
    }

    return (
        <>
            <form action={add}>
                <One />
            </form>
        </>
    )



}

export default UseFormStatus
