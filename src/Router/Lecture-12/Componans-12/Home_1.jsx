import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Home_1() {
    const navigate = useNavigate()
    const student = [
        { name: "Kavy Patel", id: 1 },
        { name: "Het Patel", id: 2 },
        { name: "Abhishek Shukla", id: 3 }
    ]

    function click(id) {
        navigate(`xyz/${id}`)
    }


    return (
        <>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button onClick={() => navigate("/about_2")} variant="primary">Go About Page</Button>
                </Card.Body>
            </Card>
            {student.map((data) => (
                <>
                    <li>{data.name}</li>
                    <Button onClick={() => click(data.id)}>Id</Button>
                </>
            ))}


        </ >
    )
}

export default Home_1