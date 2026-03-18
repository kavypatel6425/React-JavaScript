import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Imagename from '../../assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Travel_nev() {
    return (
        <>
            <div className='tac sec_1'>
                <Image src={Imagename} className='logo' />
                <Navbar className='justify-content-center'>
                    {/* <Navbar.Brand href="#home" className='nevbar_brand'>Wedding</Navbar.Brand> */}
                    <span href="#home" className='nevbar_brand me-4'>Wedding</span>
                    <Nav className="tac" defaultActiveKey="/home">
                        <Nav.Link>
                            <Link to={"destinations"} className='text-decoration-none text-dark nev_menu me-2'>
                                destinations
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"packages"} className='text-decoration-none text-dark nev_menu me-2'>
                                packages
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"tours"} className='text-decoration-none text-dark nev_menu me-2'>
                                tours
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"promotions"} className='text-decoration-none text-dark nev_menu me-2'>
                                promotions
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"gallery"} className='text-decoration-none text-dark nev_menu me-2'>
                                gallery
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"contact"} className='text-decoration-none text-dark nev_menu me-2'>
                                contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <div className="account">
                        <p>create new account</p>
                        <button className='nev_button'>enter</button>
                    </div>

                </Navbar>
            </div>
        </>
    )
}

export default Travel_nev