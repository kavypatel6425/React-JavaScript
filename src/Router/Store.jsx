import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import counterReducer from "./Lecture-29/CounterSlice"
import ArraySlice from './Lecture-29/Task/ArraySlice'
import TodoSlice from './Lecture-29/Task/TodoSlice'
import ApiSlice from './Lecture-29/Api fatch/ApiSlice'


export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    array: ArraySlice,
    todo: TodoSlice,
    apiupdate:ApiSlice,
  }
})
