import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import counterReducer from "./Lecture-29/CounterSlice"
import updateApi from "./Lecture-29/Api fatch/ApiSlice"

export  const Store = configureStore({
  reducer:{
    counter:counterReducer,
    api:updateApi,
  }
})
