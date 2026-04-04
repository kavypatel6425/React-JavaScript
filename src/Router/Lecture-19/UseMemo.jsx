import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount] = useState(0)
    const [input,setInput] = useState(0)

    function click(num) {
        console.log("Hello");
        for (let i = 0; i < 1000000000; i++) {}
        return num * 10
    }

    // let add = click(input)
    let add = useMemo(()=> click(input),[input])
  return (
    <>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h2>{count}</h2>

        <hr />

        <input type="text"  onChange={(e)=>setInput(e.target.value)} />
        <h2>{add}</h2>
    </>
  )
}

export default UseMemo