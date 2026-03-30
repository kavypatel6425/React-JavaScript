import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  // const data = useRef(null)

  // function copy() {
  //   console.log("Hii");           //1. Focus Input on Button Click
  //   data.current.focus();
  // }

  // useEffect(() => {
  //   data.current.focus();
  //   console.log("Focas");             //2. Auto Focus on Page Load
  // })

  // const count = useRef(0);

  // function click() {
  //   count.current = count.current += 1         //3. Count Clicks Without Re-render
  //   console.log(count.current);

  // }


  const [count, setCount] = useState(0)
  const data = useRef()
  const prevData = data.current;

  useEffect(() => {
    data.current = count;
  },[count])

  return (
    <>
      {/* <label htmlFor="usarname"></label>
      <input type="text" ref={data} /> */}
      {/* <button onClick={copy}>Copy</button> */}


      {/* <button onClick={click}>Click</button> */}

      <h2>Before:{prevData}</h2>
      <button onClick={(() => setCount(count + 1))}>Click</button>
      <h2>After:{count}</h2>


    </>
  )
}

export default UseRef