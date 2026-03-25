import React, { useLayoutEffect } from 'react'

function UseLayout() {
    useLayoutEffect(()=>{
        console.log("UseLayout");
        
    })
  return (
    <>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, nobis?</h2>
    </>
  )
}

export default UseLayout