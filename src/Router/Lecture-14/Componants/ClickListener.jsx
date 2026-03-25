import React, { useEffect } from 'react'

function ClickListener() {
    useEffect(() => {
        const handalClick = ()=>{
            console.log("Event click");
            
        }

        document.addEventListener("click",handalClick);

        return ()=>{
            document.removeEventListener("click",handalClick)
        }
    }, [])
    return (
        <>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eos.</h2>
        </>
    )
}

export default ClickListener