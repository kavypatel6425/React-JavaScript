import {useState} from 'react'

function Toggle() {
    const [change,setChange] = useState("On");
    
    const handleToggle  = () =>{
        if (change === "On") {
            setChange("Off")
        }else {
            setChange("On")
        }
    }
  return (
    <div>
        <h1>{change}</h1>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default Toggle