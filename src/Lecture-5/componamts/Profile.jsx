import React from 'react'
import { useState } from 'react'

function Profile() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    return (
        <div>
            <h2>User Details</h2>

            <input 
            type='text' 
            placeholder='Enter Your Name' 
            onChange={(e) => setName(e.target.value)}
            />

            <p>{name}</p>


            <input 
            type='Number' 
            placeholder='Enter Your Age' 
            onChange={(e) => setAge(e.target.value)}
            />

            <p>{age}</p>

            <input 
            type='text' 
            placeholder='Enter Your Name' 
            onChange={(e) => setCity(e.target.value)}
            />

            <p>{city}</p>
        </div>
    )
}

export default Profile