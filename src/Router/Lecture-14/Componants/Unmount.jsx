import React, { useEffect } from 'react'

function Unmount() {
    useEffect(() => {
        const interval = setInterval(() => console.log("Running"), 1000);

        return () => clearInterval(interval);
    },[]);


    return (
        <>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptatibus.</h2>
        </>
    )
}

export default Unmount