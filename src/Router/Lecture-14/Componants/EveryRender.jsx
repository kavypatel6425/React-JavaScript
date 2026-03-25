import React, { useEffect, useState } from 'react'

function EveryRender() {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("Component Mounted");
    // })
    useEffect(() => {
        console.log( document.title = `I click Button ${count} Time`);
    }, [count])
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default EveryRender


