import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import {useState} from 'react'
import './NavbarComponent.css'
import LoginPage from '../LandingPage/MainPage';
function NavbarComponent() {
    

    const handleToggle=()=>{
        setToggle(!toggle);
    }

    return (
        <>
            <Navbar  expand="lg" className="bg-body-tertiary" style={{backgroundColor:"white"}}>
                <Container style={{ maxWidth: "1440px"}}>
                    <Navbar.Brand href="#home"> <Image src="images/HobbyCue Logo.png" className='custom-logo' /></Navbar.Brand>
                    <Row className="d-sm-none">
                        <Col sm={12}>
                            <CiSearch />
                        </Col>
                    </Row>
                    <Row className="d-sm-none">
                        <Col sm={12}>
                            <FaBell />
                        </Col>
                    </Row>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   
                    <Navbar.Collapse    id="basic-navbar-nav">
                
                        <Nav className="me-auto">
                     
                           
                           
                            <Form className="d-flex" style={{marginLeft:"85px"}}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"

                                    aria-label="Search"
                                />
                                <Button style={{ backgroundColor: "blueviolet" }}><CiSearch /></Button>
                            </Form>

                            <div style={{ marginLeft: "171px", display: "flex" }}>
                                <img src="images/Layer_2.png" alt="" style={{ width: "20px", height: "20px", marginTop: "10px" }} />
                                <NavDropdown title="Exolore" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">People-Community</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        People-Venues
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Programs-Events</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Programs-Events
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Products-Store
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Blogs
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <div style={{ marginLeft: "33px", display: "flex" }}>
                                <img src="images/Hobbies.png" alt="" style={{ width: "24px", height: "24px", marginTop: "9px" }} />
                                <NavDropdown title="Hobbies" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">People-Community</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        People-Venues
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Programs-Events</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Programs-Events
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Products-Store
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Blogs
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div style={{ marginLeft: "33px", display: "flex" }}>
                                <img src="images/bookmark_black_24dp 1.png" alt="" style={{ width: "24px", height: "24px", marginTop: "9px" }} />
                            </div>
                            <div style={{ marginLeft: "33px", display: "flex" }}>
                                <img src="images/notifications_black_24dp 1.png" alt="" style={{ width: "24px", height: "24px", marginTop: "9px" }} />
                            </div>
                            <div style={{ marginLeft: "33px", display: "flex" }}>
                                <img src="images/Product 3.png" alt="" style={{ width: "24px", height: "24px", marginTop: "9px" }} />
                            </div>
                            <div style={{ marginLeft: "33px", display: "flex" }}>
                            <Button variant="outline-light" style={{borderColor:"blueviolet", width:"140px"}} size="lg" active>
                               Sign in
                            </Button>
                            </div>
                           



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent