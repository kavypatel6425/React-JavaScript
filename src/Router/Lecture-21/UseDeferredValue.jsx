import React, { useDeferredValue, useState } from 'react'
import UseDeferred_Child from './UseDeferred_Child';

function UseDeferredValue() {
    const [text, setText] = useState("")
    

    console.log("Immediate :", text);
    

    return (
        <>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
            />

            <UseDeferred_Child text={text} />
        </>
    )
}

export default UseDeferredValue