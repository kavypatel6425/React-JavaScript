import React from 'react'
import Index from './Index';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
    const navigat = useNavigate()
    return (
        <>
            <p>Home</p>
            <Button onClick={() => navigat("/contact")}>Go To Contact</Button>

            <Button>Profile</Button>
        </>

    )
}

export default Home