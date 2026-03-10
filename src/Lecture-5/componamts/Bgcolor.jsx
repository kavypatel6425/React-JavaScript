import React from 'react'
import { useState } from 'react';

function Bgcolor() {
    const [bgColor, setBgColor] = useState("White");

    const handleToggle = () => {
        if (bgColor === "White") {
            setBgColor("blue")
        } else {
            setBgColor("White")
        }
    }
    return (
        <div style={{backgroundColor : bgColor}}>
            <h1>{bgColor}</h1>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}

export default Bgcolor