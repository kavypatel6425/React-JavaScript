import React, { useContext } from 'react'
import { text } from './UseContext'
function Child_3() {
   const abc = useContext(text)
  return (
    <>
    <h2>{abc}</h2>
    </>
  )
}

export default Child_3