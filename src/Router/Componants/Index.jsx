import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Imagename from '../../assets/img.png';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Index() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Col xs={6} md={4}>
                        <Image src={Imagename} rounded alt="Description of image" />
                    </Col>
                    <Nav className="me-auto " defaultActiveKey="/home_">
                        <Nav.Link>
                            <Link to={"home"} className='text-decoration-none text-light'>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"about"} className='text-decoration-none text-light'>
                                about
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={"blog"} className='text-decoration-none text-light'>
                                Blog
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"contact"} className='text-decoration-none text-light nav-active'>
                                Contact
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"profile"} className='text-decoration-none text-light nav-active'>
                                Profile
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"settings"} className='text-decoration-none text-light nav-active'>
                                Settings
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>

                <Button>
                    <Link to={"login"} className='text-decoration-none text-light'>
                        Login
                    </Link>
                </Button>
            </Navbar>

            <Outlet />
            <Carousel>
                <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}/
                    <Image src={Imagename}  />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Image src={Imagename}  />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Image src={Imagename}  />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    )
}

export default Index