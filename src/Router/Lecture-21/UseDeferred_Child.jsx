import React, { useDeferredValue, useMemo } from 'react'

function UseDeferred_Child(props) {
    const deferredText = useDeferredValue(props.text)

    const abc = useMemo(() => {
        const result = [];
        for (let i = 0; i < 10000; i++) {
            result.push(deferredText)
        }
        return result
    }, [deferredText])
    
    console.log("Deferred :", deferredText);
    return (
        <>
            {abc.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    )
}

export default UseDeferred_Child