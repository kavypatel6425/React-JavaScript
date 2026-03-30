import React, { createContext, useState } from 'react'
import Child_1 from './Child_1';

export const text = createContext();
function UseContext() {
    const user = "Kavy Patel";
  return (
    <>
    <text.Provider value={`Welcome ${user}`}>
        <Child_1/>
    </text.Provider>  
    </>
  )
}

export default UseContext