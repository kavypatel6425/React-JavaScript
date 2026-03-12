import React from 'react'
import Index from './Index';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import { data, useNavigate, useParams } from 'react-router-dom';

function About() {
  const navigate = useNavigate()
  const id = useParams()
  const student = [
    { name: "Kavy", id: 1 },
    { name: "Het", id: 2 },
    { name: "Aastha", id: 3 },
    { name: "Hiya", id: 4 },
  ]
  function click(id) {
    navigate(`/xyz/${id}`)
  }
  return (
    <>
      <Index />
      <div>About</div>
      <Button onClick={() => navigate("/home")}>Go to Home Page</Button>

      {student.map((data) => (
        <>
          <li className='mb-2 '>{data.name}</li>
          <Button onClick={()=>click(data.id)}>Id</Button>
        </>
      ))}
    </>

  )
}

export default About