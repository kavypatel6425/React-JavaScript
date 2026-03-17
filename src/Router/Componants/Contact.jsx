import React from 'react'
import Index from './Index'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Contact() {
  const previousNavigate = useNavigate(-1)
  return (
    <>
    <p>Contact</p>
    <Button onClick={()=>previousNavigate(-1)}>Go to Previous</Button>
    </>
  )
}

export default Contact