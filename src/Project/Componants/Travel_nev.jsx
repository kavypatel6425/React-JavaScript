import React from 'react'
// import Image from 'react-bootstrap/Image';
// import Imagename from '';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Imagename from '../../assets/logo.png';
import Imagetecture from '../../assets/nev_tecture.png';


function Travel_nev() {
    return (
        <>
            <div className='tac sec_1'>
                <Image src={Imagename} className='logo' />
                <Image src={Imagetecture} className='logo' />
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Travel_nev