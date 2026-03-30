import React, { useReducer } from 'react'
import Reducer, { xyz } from './Reducer';

function UseReducer() {
    // const [state,dispatch] = useReducer(Reducer,xyz);
    const [toggle,dispatch] = useReducer(Reducer,xyz);

  return (
    <>
        {/* <h2>{state.count}</h2> */}
        {/* <button onClick={()=>dispatch({type :"increment"})}>+</button>
        <button onClick={()=>dispatch({type :"decrement"})}>-</button>
        <button onClick={()=>dispatch({type :"resate"})}>Resate</button> */}

        <h2>{toggle}</h2>
        <button onClick={()=>dispatch({type :"toggle"})}>Toggle</button>
    </>
  )
}

export default UseReducer