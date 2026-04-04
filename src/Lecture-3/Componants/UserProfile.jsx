import React from 'react'

function UserProfile(props) {
    return (
        <div>
            <img src={props.avatar} alt="avatar" width="100" />
            <h3>{props.name}</h3>
            <p>{props.role}</p>
        </div>
    )
}

export default UserProfile