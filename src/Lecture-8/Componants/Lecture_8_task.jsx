import React, { useState } from 'react'

function Lecture_8_task() {

    const [input, setInput] = useState()

    return (
        <>
            {/* 1️⃣ Controlled Input */}

            <input type="text" onChange={(e)=>setInput(e.target.value) }  /> <br />
            <span>{input}</span>

            {/* 2️⃣ Two-Field Form */}

        </>
    )
}

export default Lecture_8_task