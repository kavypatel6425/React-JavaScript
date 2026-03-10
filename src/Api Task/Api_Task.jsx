import React, { useState } from 'react'

function Api_Task() {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState("");

    function Add() {
        // console.log(items);

        if (show.trim() === "") return;

        const newData ={
            id: Date.now(),
            text:show
        }
        
        // console.log(newData);
        setItems([...items, newData])
        setShow("")
        
    }

    function Delete(id) {
        // console.log("remove");

        const deleteItem = items.filter((item)=> item.id !== id);
        setItems(deleteItem)
    }
    return (
        <>
            <input
                type="text"
                value={show}
                onChange={(e) => (setShow(e.target.value))}
            />
            <button onClick={Add}>Add</button>


            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.text}

                        <button onClick={() => Delete(item.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </>
    )
}

export default Api_Task