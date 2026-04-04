import React, { useState } from 'react'

function Child01(props) {

  return (
    <>
      <h2>Child01</h2>

      {/* <input type="text" onChange={(e)=>props.name(e.target.value)}/> */}

      {/* <button onClick={()=>(props.state(props.value +1))}>click me</button> */}

      {/* 4. Toggle Visibility */}

      {/* <button onClick={props.toggle}>
        {props.isVisible ? "Hide" : "Show"}
      </button> */}

      {/* 6. Controlled Text Input */}

      {/* <input type="text" onChange={(e)=>props.state(e.target.value)} /> */}

      {/* 7. Form with Multiple Fields */}

      {/* <label htmlFor="name">Name</label>
      <input type="text" onChange={(e)=>props.setName(e.target.value)}/> <br />
      <label htmlFor="email">Email</label>
      <input type="email" onChange={(e)=>props.setEmail(e.target.value)}/> <br/>
      <label htmlFor="password">password</label>
      <input type="password" onChange={(e)=>props.setPassword(e.target.value)}/>  <br/> */}

      {/* 8. Checkbox Sync */}

      {/* <label htmlFor="checkbox">Chaked</label>
      <input
        type="checkbox"
        checked={props.check} 
        onChange={(e) => props.setcheck(e.target.checked)}
      /> */}

      {/* 9. Dropdown + Display */}

      {/* <label for="car-select">Choose a car:</label>
      <select id="car-select" name="car-select"onChange={(e)=>props.setSelect(e.target.value)}>
        <option value="Volvo">Volvo</option>
        <option value="Toyota">Toyota</option>
        <option value="TATA">TATA</option>
        <option value="Audi">Audi</option>
      </select> */}

      {/* 10. Live Character Counter */}

      {/* <input
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      /> */}


      {/* 11. Increment & Decrement Buttons */}

      <button onClick={() => (props.state(props.value + 1))}>+</button>
      <button onClick={() => (props.state(props.value - 1))}>-</button>
    </>
  )
}

export default Child01