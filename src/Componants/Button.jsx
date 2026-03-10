import React from 'react'

function Button(props) {
    return (
        <div>
            <button>{props.text}</button><br />
            <button>Log in </button> <br />
            <button>Sign up</button>
        </div>
    )
}

export default Button