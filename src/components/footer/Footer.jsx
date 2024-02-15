import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import "./Footer.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { CiSearch } from "react-icons/ci";
function Footer() {
    return (
        <div>
            <Row className="d-sm-none" >
                <Col sm={6} style={{ height: "0" }}>
                    <Container style={{ maxWidth: "360px", height: "796px" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "4px", justisfyContent: "space-between", marginTop: "10px", }}>
                            <div style={{ margin: "10px" }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>HobbyCue</ListGroup.Item>
                                    <ListGroup.Item>About</ListGroup.Item>
                                    <ListGroup.Item>Our Services</ListGroup.Item>
                                    <ListGroup.Item>Work with Us</ListGroup.Item>
                                    <ListGroup.Item>FAQ</ListGroup.Item>
                                    <ListGroup.Item>Contact Us</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div style={{ margin: "10px" }}>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>How DO I</ListGroup.Item>
                                    <ListGroup.Item>Sign Up</ListGroup.Item>
                                    <ListGroup.Item>Add a Listing</ListGroup.Item>
                                    <ListGroup.Item>Claim Listing</ListGroup.Item>
                                    <ListGroup.Item>Post a Query</ListGroup.Item>
                                    <ListGroup.Item>Add a Blog Post</ListGroup.Item>
                                    <ListGroup.Item>other Queries</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div style={{ margin: "10px" }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Quick Links</ListGroup.Item>
                                    <ListGroup.Item>Listings</ListGroup.Item>
                                    <ListGroup.Item>Blog Posts</ListGroup.Item>
                                    <ListGroup.Item>Shop/ Store</ListGroup.Item>
                                    <ListGroup.Item>Community</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div style={{ margin: "10px" }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Social Media</ListGroup.Item>
                                    <ListGroup.Item >
                                        <img src="public\images\Group64.png" alt="" style={{ width: "260px" }} />
                                    </ListGroup.Item>
                                    <br />
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Invite Friends</ListGroup.Item>
                                    <ListGroup.Item><Form className="d-flex" style={{ marginLeft: "0" }}>
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"

                                            aria-label="Search"
                                        />
                                        <Button style={{ backgroundColor: "blueviolet" }}><CiSearch /></Button>
                                    </Form></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <Card style={{borderColor:"#F7F5F9" , width:"100%"}}>
                            <Card.Body style={{ backgroundColor: "#F7F5F9", display: "flex" }} className="justify-content-center">© Purple Cues Private Limited</Card.Body>
                        </Card>


                    </Container>
                </Col>
            </Row>



            <Row >
                <Col xs={12} className="d-none d-sm-block">
                    <Container style={{ maxWidth: "1440px", height: "380px", }}>
                        <div style={{ display: "flex", marginLeft: "202px", justisfyContent: "space-between", marginTop: "200px" }}>
                            <div >
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>HobbyCue</ListGroup.Item>
                                    <ListGroup.Item>About</ListGroup.Item>
                                    <ListGroup.Item>Our Services</ListGroup.Item>
                                    <ListGroup.Item>Work with Us</ListGroup.Item>
                                    <ListGroup.Item>FAQ</ListGroup.Item>
                                    <ListGroup.Item>Contact Us</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div >
                                <ListGroup variant="flush" >
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>How DO I</ListGroup.Item>
                                    <ListGroup.Item>Sign Up</ListGroup.Item>
                                    <ListGroup.Item>Add a Listing</ListGroup.Item>
                                    <ListGroup.Item>Claim Listing</ListGroup.Item>
                                    <ListGroup.Item>Post a Query</ListGroup.Item>
                                    <ListGroup.Item>Add a Blog Post</ListGroup.Item>
                                    <ListGroup.Item>other Queries</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div >
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Quick Links</ListGroup.Item>
                                    <ListGroup.Item>Listings</ListGroup.Item>
                                    <ListGroup.Item>Blog Posts</ListGroup.Item>
                                    <ListGroup.Item>Shop/ Store</ListGroup.Item>
                                    <ListGroup.Item>Community</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Social Media</ListGroup.Item>
                                    <ListGroup.Item>
                                        <img src="/images/Group64.png" alt="" />
                                    </ListGroup.Item>
                                    <br />
                                    <ListGroup.Item style={{ fontWeight: 'bold' }}>Invite Friends</ListGroup.Item>
                                    <ListGroup.Item><Form className="d-flex" style={{ marginLeft: "0px" }}>
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"

                                            aria-label="Search"
                                        />
                                        <Button style={{ backgroundColor: "blueviolet" }}><CiSearch /></Button>
                                    </Form></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <Card style={{borderColor:"#F7F5F9" , width:"100%"}}>
                            <Card.Body style={{ backgroundColor: "#F7F5F9", display: "flex" }} className="justify-content-center">© Purple Cues Private Limited</Card.Body>
                        </Card>

                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default Footer;