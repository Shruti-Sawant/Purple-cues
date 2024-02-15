import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard() {
    return (
        <div>

            <Row className="d-sm-none" >
                <Col sm={12}>
                    <Container style={{ maxWidth: "360px", height: "276px" }}>

                        <Container style={{ Width: "310px", height: "322px", marginTop: "800px", marginLeft: "10px", display: "flex", justifyContent: "space-evenly" }} className="flex-wrap " >

                            <Card style={{ width: '310px', height: "352px", borderColor: "white" }} className="rounded ">
                                <Card.Body style={{ backgroundColor: "#F7FDFF", }}>
                                <p style={{ fontFamily: "poppins", height: "131px" }}>
                            <span style={{ fontStyle: "italic", fontWeight: "600px", height: "27px",}}> your <span style={{ color: "#0096C8" }}>hobby 
                            </span>, your
                                <span style={{ color: "#8064A2" }}> communication</span><br /></span>
                                       <br />
                                       
                                        <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "30px", marginLeft: "14px", backgroundColor: "blueviolet" }}
                                            className="rounded">Get Started</Button></p>

                                    <img src="public\images\grp.png" alt="" style={{ width: "299px" }} />

                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>

                </Col>
            </Row>

            <Row >
                <Col xs={12} className="d-none d-sm-block">

                    <Container style={{ maxWidth: "1440px", height: "622px" }}>

                        <Container style={{ Width: "1240px", height: "622px", marginTop: "100px", marginLeft: "100px", display: "flex", justifyContent: "space-evenly" }} className="flex-wrap " >

                            <Card style={{ width: '1160px', height: "652px", borderColor: "white" }} className="rounded ">
                                <Card.Body style={{ backgroundColor: "#F7FDFF", }}>
                                    <p style={{ fontFamily: "poppins", height: "282px", marginLeft: "64px", marginTop: "55px" }}>
                                        <span style={{ fontStyle: "italic", fontWeight: "900px", fontSize: "36px", height: "54px" }}> your <span style={{ color: "#0096C8" }}>hobby </span>, your
                                            <span style={{ color: "#8064A2" }}> communication</span><br /></span>
                                        <br />
                                        <br />
                                        <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginLeft: "44px", backgroundColor: "blueviolet" }}
                                            className="rounded">Get Started</Button></p>

                                    <img src="/images/grp.png" alt="" style={{ width: "1100px" }} />

                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ImageCard;