import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Imagename from '../../assets/img.png';
import { Link, useNavigate } from 'react-router-dom';


function Index() {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Col xs={6} md={4}>
                    <Image src={Imagename} rounded alt="Description of image" />
                </Col>
                <Nav className="me-auto " defaultActiveKey="/home">
                    <Nav.Link>
                        <Link to={"/home"} className='text-decoration-none text-light'>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/about"} className='text-decoration-none text-light'>
                            about
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/blog"} className='text-decoration-none text-light'>
                            Blog
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to={"/contact"} className='text-decoration-none text-light nav-active' >
                            Contact
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Index