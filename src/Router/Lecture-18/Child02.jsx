import React from 'react'

function Child02(props) {
  return (
    <>
      <h2>Child02</h2>
      {/* <h2>{props.state}</h2> */}


      {/* <h2>{props.value}</h2> */}


      {/* 4. Toggle Visibility */}

      {/* {props.value && (
        <div >
          Hide content 
        </div>
      )} */}

      {/* 6. Controlled Text Input */}

      {/* <h2>{props.value}</h2> */}

      {/* 7. Form with Multiple Fields */}

      {/* <p><b>Name:</b>{props.name}</p>
      <p><b>Email:</b>{props.email}</p>
      <p><b>Password:</b>{props.password}</p> */}

      {/* 8. Checkbox Sync */}

      {/* <p>{props.check?"Chaked":"Not Checked "}</p> */}

      {/* 9. Dropdown + Display */}

      {/* <p>{props.Select}</p> */}

      {/* 10. Live Character Counter */}

      {/* <p>Character Count: {props.count}</p> */}

      {/* 11. Increment & Decrement Buttons */}

      <p>{props.state}</p>
    </>
  )
}

export default Child02