import React, { useState } from 'react'

function Lecture_7() {
    // const [value, setValue] = useState("");
    // const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    
    // function click(text) {
    //     alert("Don't Click Button")      // task-1
    //     console.log("Button Clicked");    // task-2
    //     console.log(text);
    // }

    // const handleChange = (event) => {
    //     const newValue = event.target.value;
    //     setValue(newValue);
    //     console.log("Input value:", newValue);
    // };

    function Increment() {
        setCount(count+1);
    }

    function Decrement() {
        setCount(count-1)
    }

    return (
        <>
            {/* 1️⃣ Button Click Alert */}
            {/* <button onClick={click}>Click</button> */}

            {/* 2️⃣ Console Log Click*/}
            {/* <button onClick={click}>Click</button> */} <br />

            {/* 3️⃣ Input Change Logger */}
            {/* <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Type something..."
            /> */}

            {/* 4️⃣ Show Typed Text */}

            {/* <p>{value}</p> */}

            {/* 5️⃣ Toggle Text Visibility */}

            {/* <button onClick={() => setShow(!show)}>
                {show ? "Hide Text" : "Show Text"}
            </button>

            {show && <p>Hello! This is the text.</p>} */}

            {/* 6️⃣ Counter App */}

            {/* <span>{count}</span>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button> */}

            {/* 7️⃣ Pass Parameter to Handler */}

            
        </>
    )
}

export default Lecture_7
