import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LoginPage() {
    
    return (
        <div style={{ backgroundColor: "#F7F5F9" }}>
            <Container style={{ maxWidth: "1440px", height: "720px" }}>

                <Row className="d-sm-none" >
                    <Col sm={12}>
                        <p style={{ fontFamily: "poppins", height: "131px" }}>
                            <span style={{ fontStyle: "italic", fontWeight: "600px", fontSize: "18px", height: "27px" }}>Explore your <span style={{ color: "#0096C8" }}>hobby 
                            </span> or
                                <span style={{ color: "#8064A2" }}> passion</span><br /></span>
                            <br /> Sign-in to interact with a community of fellow hobbyists
                            and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</p>

                    </Col>
                </Row>


                <Row className="d-sm-none" >
                    <Col sm={12}>
                        <div style={{ width: "312px", height: "364px", marginTop: "50px",marginLeft:"15px", display: "flex", flexDirection: "column", gap: "32px" }}>
                            <span style={{ display: "flex", justifyContent: "center" }}><Button variant="light" >Sign in</Button> <Button variant="light" >
                                Join Us</Button></span>
                            <div style={{ display: "flex", flexDirection: "column" }}>

                                
                                <div style={{ gap: "10px", height: "32px" }}>
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
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop:"69px" }}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="remember me" />
                                    </Form.Group>
                                    <span>Forgot password</span>

                                </div>
                                <div> <Button variant="outline-dark" style={{ width: "312px", display: "flex", justifyContent: "center", backgroundColor:"blueviolet"}}> Continue</Button></div>
                                <p style={{ height: "16px" , margin:" 10px 0px 15px 0 "}}>-------------or connect with---------------</p>
                                <p > <Button variant="outline-dark" style={{ width: "310px", display: "flex", justifyContent: "space-around" }}> <FaFacebook />Continue with facebook</Button></p>

                                <p > <Button variant="outline-dark" style={{ width: "310px", display: "flex", justifyContent: "space-around" }}><FcGoogle />Continue with Google </Button></p>
                               

                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="d-sm-none ">
                    <Col sm={12}>
                        <div style={{ width: "312px", height: "66.74px", marginTop: "60px", marginLeft: "15px", display: "flex", flexDirection: "column" }}>

                            <div style={{ height: "66.74px", }}>
                                <img src="images/Group 27.png " alt="group" style={{width:"312px"}}/>
                            </div>

                        </div>
                    </Col>
                </Row>


                <Row >
                    <Col xs={12} className="d-none d-sm-block">

                        <div style={{ display: "flex", PaddingTop: "86px" }}>
                            <div style={{ width: "707px", height: "478px", marginTop: "100px", marginLeft: "100px", display: "flex", flexDirection: "column" }}>
                                <p style={{ fontFamily: "poppins", height: "282px" }}>
                                    <span style={{ fontStyle: "italic", fontWeight: "900px", fontSize: "36px", height: "54px" }}>Explore your <span style={{ color: "#0096C8" }}>hobby </span> or
                                        <span style={{ color: "#8064A2" }}> passion</span><br /></span>
                                    <br /> Sign-in to interact with a community of fellow hobbyists
                                    and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                                    <br />
                                    <br />
                                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,
                                    services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                                    <div style={{ height: "216px",marginTop:"90px" }}>
                                    <img src="images/Group 27.png " alt="group" />
                                    </div>
                            </div>
                                <Outlet />
                       <div style={{ width: "410px", height: "434px", marginTop: "95px", marginLeft: "160px", display: "flex", flexDirection: "column", gap: "32px" }}>
                                <span><Button variant="light" > Sign in</Button> <Button variant="light" >Join us</Button></span>
                              
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Outlet />
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
                        </div>
                    </Col>
                </Row>




              
            </Container >
        </div >

    )
}

export default LoginPage