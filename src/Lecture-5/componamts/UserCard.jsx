import React from 'react'

function UserCard(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
    </div>
  )
}

export default UserCard