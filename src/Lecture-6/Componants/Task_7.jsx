import React, { useState } from 'react';

function Task_7() {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState("");
    const [update, setUpdate] = useState(null)

    function add() {
        if (show.trim() === "") return;

        const newData = {
            id: Date.now(),
            text: show
        };

        setItems([...items, newData]);
        setShow("");
    }

    function remove(id) {
        const removeItems = items.filter((items) => items.id !== id);
        setItems(removeItems);
    }

    function edit(edit) {
        setUpdate(edit.id)
        setShow(edit.text)
    }

    function Update() {
        const update_item = items.map((Data) =>
            Data.id === update ? { ...Data, text: show } : Data,
        )
        setItems(update_item)
        setUpdate(null)
        setShow("")

    }

    function Cencel() {
        setUpdate(null);
        setShow("");
    }
    return (
        <>
            <input
                type="text"
                value={show}
                onChange={(e) => setShow(e.target.value)}

            />

            {/* <button onClick={add}>Add</button> */}
            {update ? (

                <>
                    <button onClick={Update}>Update</button>
                    <button onClick={Cencel}>Cencel</button>
                </>

            ) : (
                <button onClick={add}>Add</button>
            )}


            <ul>
                {items.map((items) => (
                    <li key={items.id}>
                        {items.text}

                        <button onClick={() => remove(items.id)} style={{ marginLeft: "10px" }}>
                            Delete
                        </button>

                        <button onClick={() => edit(items)}>
                            Edit
                        </button>


                    </li>
                ))}
            </ul>
        </>
    );
}

export default Task_7;