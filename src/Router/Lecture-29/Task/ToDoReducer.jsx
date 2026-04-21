import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './TodoSlice'

function ToDoReducer() {
    const todoUpdate = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()

    const [data, setData] = useState()

    return (
        <>

            <input type="text" value={data} onChange={(e) => setData(e.target.value)} /><br /><br />

            <button onClick={() => dispatch(add(data),setData("") )}>Add</button>

            <h2>Todo list</h2>
            {
                todoUpdate.map((item, index) => (
                    <>
                        <p key={index}>{item}</p>
                        <button onClick={() => dispatch(remove(data))}>Remove</button>
                    </>
                ))
            }
        </>
    )
}

export default ToDoReducer