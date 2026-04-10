import React, { useState } from 'react'
// import CostomHook_Child from './useCostomHook_Child'
import useCostomHook_Child from './useCostomHook_Child'

function CostomHook() {
    const[count,increment,decrement] = useCostomHook_Child(0)
  return (
    <>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default CostomHook