import React, { useState } from 'react'

function useCostomHook_Child(defaultval) {

  const [count, setCount] = useState(defaultval)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  return [count,increment, decrement]
}

export default useCostomHook_Child