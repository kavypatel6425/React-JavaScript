import React, { useCallback, useState } from 'react'
import UseCallback_child from './UseCallback_child'

function UseCallback() {
  const [count, setCount] = useState(0);

  const click = useCallback(() => {
    setCount(count + 1)
  },[])
  return (
    <>
      <button onClick={click}>Increment</button>
      <h2>{count}</h2>

      <hr />

      <UseCallback_child name={"Add"} onClick={click} />
    </>
  )
}

export default UseCallback