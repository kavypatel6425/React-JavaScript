import React from 'react'

const UseCallback_child = React.memo((props) => {

  console.log("hii");

  return (
    <>
      <button onClick={props.onClick}>{props.name}</button>
    </>
  )
})

export default UseCallback_child