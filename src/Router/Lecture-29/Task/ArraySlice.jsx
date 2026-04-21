import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    items: [],  
}

const ArraySlice = createSlice({
    name : "array",
    initialState,
    reducers:{
        push: (state) => {
            state.items.push("Kavy")
        },
        pop: (state) => {
            state.items.pop()  
        },
        reset: (state) => {
            state.items = []  
        }
    }
})

export const {push,pop,reset}=ArraySlice.actions 
export default ArraySlice.reducer