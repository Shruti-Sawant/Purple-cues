import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Row, Col } from 'react-bootstrap';
function SigninPage() {
    return (

            <div style={{ backgroundColor: "#F7F5F9" }}>

                <Container style={{ maxWidth: "1440px", height: "720px" }}>
                    <Row >
                        <Col xs={12} className="d-none d-sm-block">
                            <div style={{ width: "410px", height: "434px", marginTop: "95px", marginLeft: "160px", display: "flex", flexDirection: "column", gap: "32px" }}>
                                <span><Button variant="light" >Sign in</Button> <Button variant="light" >Join us</Button></span>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <p > <Button variant="outline-dark" style={{ width: "410px", display: "flex", justifyContent: "space-around" }}> <FaFacebook />Continue with facebook</Button></p>

                                    <p > <Button variant="outline-dark" style={{ width: "410px", display: "flex", justifyContent: "space-around" }}><FcGoogle />Continue with Google </Button></p>
                                    <p style={{ height: "16px" }}>---------------------or connect with-------------------------</p>
                                    <div style={{ gap: "10px", height: "96px" }}>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="zip"
                                        />
                                        <br />
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="zip"
                                        />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="remember me" />
                                        </Form.Group>
                                        <span>Forgot password</span>

                                    </div>
                                    <div> <Button variant="outline-dark" style={{ width: "410px", display: "flex", justifyContent: "center" }}> Continue</Button></div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div>
        
    )
}

export default SigninPage