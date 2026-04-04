import React, { useState } from 'react'
import Child01 from './Child01'
import Child02 from './Child02'

function StateLifting() {
    // const [data, setData] = useState("")

    {/* 3. Counter + Display */ }

    // const [data, setData] = useState(0)

    {/* 4. Toggle Visibility */ }

    //  const [isVisible, setIsVisible] = useState(false);

    // const toggle = ()=>{
    //     setIsVisible(!isVisible)
    // }

    {/* 6. Controlled Text Input */ }

    // const [data, setData] = useState("")

    {/* 7. Form with Multiple Fields */ }

    // const [name,setName] =useState("")
    // const [email,setEmail] =useState("")
    // const [password,setPassword] =useState("")

    {/* 8. Checkbox Sync */ }

    // const [check,setCheck]= useState(false)

    // 9. Dropdown + Display

    // const [Select,setSelect] = useState()

    // 10. Live Character Counter

    // const [text, setText] = useState("");
    // const [count, setCount] = useState()



    // const handleClick = () => {
    //     setCount(text.length);
    // };


    // 11. Increment & Decrement Buttons

     const [data, setData] = useState(0)
    return (
        <>
            {/* 1. Shared Input Display */}

            {/* <h1>Perent</h1>
            <Child01 state={setData} />
            <hr />
            <Child02  state={data}/> */}


            {/* 3. Counter + Display */}

            {/* <h1>Perent</h1>
            <Child01 state={setData} value={data} />
            <hr />
            <Child02 state={data} /> */}

            {/* 4. Toggle Visibility */}

            {/* <Child01 toggle={toggle} isVisible={isVisible} />
            <hr />
            <Child02 value={isVisible}/>  */}

            {/* 6. Controlled Text Input */}

            {/* <Child01 state={setData}/>
            <hr />
            <Child02 value={data}/> */}

            {/* 7. Form with Multiple Fields */}

            {/* <Child01 
            name={name}
            email={email}
            password={password}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            />
            <hr />

            <Child02 
            name={name}
            email={email}
            password={password}
            /> */}

            {/* 8. Checkbox Sync */}

            {/* <Child01 check={check} setcheck={setCheck}/>
            <hr />
            <Child02 check={check}/> */}

            {/* 9. Dropdown + Display */}

            {/* <Child01 Select={Select} setSelect={setSelect}/>
            <hr />
            <Child02 Select={Select}/> */}

            {/* 10. Live Character Counter */}

            {/* <Child01 text={text} setText={setText} />
            <button onClick={handleClick}>Count Character</button>
            <hr />
            <Child02  count={count} /> */}

            {/* 11. Increment & Decrement Buttons */}

            <Child01 state={setData} value={data} />
            <hr />
            <Child02 state={data} /> 
        </>
    )
}

export default StateLifting