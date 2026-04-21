import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const initialState = {
    value: [{}],
}

axios.get("http://localhost:3000/user")

const ApiSlice=createSlice({
    name:"updateApi",
    initialState,

    
    
})

export default ApiSlice