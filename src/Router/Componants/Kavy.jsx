import React from 'react'
import { useParams } from 'react-router-dom'

function Kavy() {
  const {id}= useParams()
  return (
    <div>
      <h2>Student Id : {id}</h2>
    </div>
  )
}

export default Kavy