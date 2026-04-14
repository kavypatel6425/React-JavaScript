import React from 'react'  
import PropsForward from './PropsForward';
import UserCard from './UserCard';

function WrapProps() {
    const UserCardWithBorder = PropsForward(UserCard);
    return (
        <>
            <h2>Wrap Props</h2>
            <UserCardWithBorder name="Rahul" age={25} />
        </>
    )
}

export default WrapProps