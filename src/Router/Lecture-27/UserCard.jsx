import React from 'react'
import PropsForward from './PropsForward'

function UserCard({ name, age }) {
    return (
        <>
            <h3>{name}</h3>
            <p>Age :{age}</p>
        </>
    )
}

export default UserCard