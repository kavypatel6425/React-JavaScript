import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    // const Decrement = () =>{
    //     setCount(count - 1)
    // }

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const Reset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter