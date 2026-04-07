import React, { useMemo, useState } from 'react'

function UseMemo() {

  //  1. Double Value Optimization

  // const [count, setCount] = useState(0)
  // const [input, setInput] = useState(0)

  // function click(num) {
  //   console.log("Hello");
  //   for (let i = 0; i < 1000000000; i++) { }
  //   return num * 10
  // }

  // let add = click(input)
  // let add = useMemo(() => click(input), [input])

  //  2. Even or Odd Checker

  // const [number, setNumber] = useState()
  // const [count, setCount] = useState(0)

  // const result = useMemo(() => {
  //   console.log("Check Number is Eveen or Odd");
  //   return number % 2 ? "Even" : "Odd";
  // }, [number])

  //  3. Simple Sum Calculation

  // const [numbers] = useState([1, 2, 3])
  // const [calculate, setCalculate] = useState(false)

  // const sum = useMemo(() => {
  //   return numbers.reduce((a, b) => a + b, 0)
  // }, [calculate])

  //  4. Static Button Handler

  
  return (
    <>

      {/* 1. Double Value Optimization */}

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>{count}</h2>

      <hr />

      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h2>{add}</h2> */}

      {/* 2. Even or Odd Checker */}

      {/* <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>Result : {result}</p>

      <hr />

      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>{count}</h2> */}

      {/* 3. Simple Sum Calculation */}

      {/* <button onClick={() => setCalculate(!calculate)}>
        Calculate Sum
      </button>

      <h3>Sum: {sum}</h3> */}

      {/* 4. Static Button Handler */}


    </>
  )
}

export default UseMemo