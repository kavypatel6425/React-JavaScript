import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import { push } from './ArraySlice'
import { data } from 'react-router-dom'

const initialState = {
    value: [],
}

const TodoSlice = createSlice({
    name:"todo_list",
    initialState,
    reducers:{
        add:(state,action)=>{
             state.value.push(action.payload)
        },
        remove:(state,action)=>{
             state.value.pop(action.payload) 
        }
    }
})

export const {add,remove} = TodoSlice.actions
export default TodoSlice.reducer