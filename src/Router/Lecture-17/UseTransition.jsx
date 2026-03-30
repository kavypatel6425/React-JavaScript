import React from 'react'

import { useState, useTransition } from "react";

const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
];



function UseTransition() {
    
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(items);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const result = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(result);
        });
    };
    return (
        <>


            <div>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search fruits..."
                />

                {isPending && <p>Filtering...</p>}

                <ul>
                    {filtered.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>


        </>
    )
}

export default UseTransition