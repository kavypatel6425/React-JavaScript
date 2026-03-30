import React, { useRef, useState } from 'react'
import Child from './Child';

function Perent() {
  // const inputref = useRef();
  // const clearref = useRef();

  // const passwordRef = useRef();

  // const inputref = useRef();

  // const formref = useRef();
  // const [name, setName] = useState("");

  // const handleClick = () => {
  //   const value = formref.current.getValue();
  //   setName(value);
  // };


  const sectionref = useRef();
  return (
    <>
      <h2>Perent</h2>
      {/* <button onClick={(()=>ref.current.task())}>Click</button>
      <Child ref={ref} /> */}

      {/* 1. Focus Input from Parent */}

      {/* <Child ref={inputref}/>
      <button onClick={()=>inputref.current.xyz()}>Click</button>  */}

      {/* 2. Clear Input Field */}

      {/* <Child ref={clearref} />
      <button onClick={() => clearref.current.clearInput()}>Click</button> */}

      {/* 4. Toggle Password Visibility */}

      {/* <Child ref={passwordRef} />

      <button onClick={() => passwordRef.current.show()}>Show</button>
      <button onClick={() => passwordRef.current.hide()}>Hide</button> */}

      {/* 5. Enable/Disable Input */}

      {/*       
      <Child ref={inputref} />

      <button onClick={() => inputref.current.enable()}>enable</button>
      <button onClick={() => inputref.current.disable()}>disable</button> */}

      {/* 7. Reset Form Fields */}

      {/* <Child ref={formref}/>
      <button onClick={()=>formref.current.resateForm()}>Reset Form</button> */}

      {/* 8. Reset Form Fields */}

      {/* <Child ref={formref}/>
      <button onClick={()=>formref.current.showAelart()}>Submit Form</button> */}

      {/* 9. Change Input Border Color */}



      {/* 10. Get Input Value */}

      {/* <Child ref={formref} />

      <h2>{name}</h2>
      <button onClick={handleClick}>Show</button> */}

      {/* 12. Toggle Visibility Component */}

      {/* <Child ref={sectionref} />

      <button onClick={() => sectionref.current.show()}>Show</button>
      <button onClick={() => sectionref.current.hide()}>hide</button> */}
    </>
  )
}

export default Perent