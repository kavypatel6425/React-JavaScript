import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

function CounterReducer() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={()=>dispatch(increment())}>
                Increment
            </button>

            <button onClick={()=>dispatch(decrement())}>
                 Decrement
            </button>
        </>
    )
}

export default CounterReducer