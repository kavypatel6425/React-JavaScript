import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function Index_1() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto " defaultActiveKey="/home_1">
                        <Nav>
                            <Link to={"home_1"} className='text-decoration-none text-light'>
                                Home
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={"about_2"} className='text-decoration-none text-light'>
                                About
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={"contact_1"} className='text-decoration-none text-light'>
                                Contact
                            </Link>
                        </Nav>
                    </Nav>
                </Container>

                <Button>
                    <Link to={"login"} className='text-decoration-none text-light'>
                        Login
                    </Link>
                </Button>
            </Navbar>
            <Outlet />

        </>
    )
}

export default Index_1