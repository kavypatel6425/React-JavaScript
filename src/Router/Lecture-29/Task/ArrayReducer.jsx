import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pop, push, reset } from './ArraySlice'

function ArrayReducer() {
    
    const arrayUpdate = useSelector((state) => state.array.items)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Array: {arrayUpdate.join(", ")}</h2>
            <button onClick={() => dispatch(push())}>Push Data</button>
            <button onClick={() => dispatch(pop())}>Remove Data</button>
            <button onClick={() => dispatch(reset())}>Resate Data</button>
        </>
    )
}

export default ArrayReducer