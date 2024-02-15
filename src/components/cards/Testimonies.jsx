import React from 'react'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
function Testimonies() {
    return (
        <div>

            <Row className="d-sm-none" >
                <Col sm={6} style={{ height: "0" }}>
                    <Container style={{ Width: "360px", height: "718px", marginTop: "80px", display: "flex", justifyContent: "space-between" }}  >

                        <Card style={{ width: '312px', height: "682px", marginLeft: "24px", backgroundColor: "#F7F5F9" }} className="rounded ">

                            <Card.Title style={{ with: "157px", height: "40px", marginLeft: "24px", display: "flex", justifyContent: "center", margin: "10px 40px" }}>
                                <img src="images/vectorpic.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                <span style={{ width: "163px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Testimonials</span>

                            </Card.Title>


                            <Card.Text style={{ with: "220px", height: "340px", marginTop: "24px", marginLeft: "10px" }}>
                                In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites
                                like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides
                                the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by
                                people of the hobbycue community. To have discussions, to get visibility, and to be
                                able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                            </Card.Text>
                            <div style={{ marginTop: "40px", width: "136px", height: "60px" }}>
                                <img src="images/Group 108.png" alt="" style={{ marginTop: "40px", width: "216px", height: "70px", marginLeft: "40px" }} />
                            </div>
                            <div style={{ width: "274px", height: "64px", backgroundColor: "#CCC1DA", display: "flex", flexDirection: "row", marginTop: " 69px",marginLeft:"20px" }}>
                                <Image src="images/pay.png" roundedCircle style={{ width: "40px", marginTop: " 9px", marginBottom: "12px", height: "40px" }} />

                                <progress style={{ marginTop: "20px", backgroundColor: "blueviolet", width: "200px" }}>00:00</progress>
                                <img src="images/Ellipse 26.png" alt="" style={{ marginLeft: "18px", height: "40px",marginTop:"10px" }} />
                            </div>




                        </Card>
                    </Container>
                </Col>
            </Row>


            <Row >
                <Col xs={12} className="d-none d-sm-block">

                    <Container style={{ maxWidth: "1440px", height: "458px" }}>

                        <Container style={{ Width: "1240px", height: "457px", marginTop: "100px", marginLeft: "100px", display: "flex", justifyContent: "space-evenly" }} className="flex-wrap " >

                            <Card style={{ width: '1160px', height: "472px", }} className="rounded ">
                                <Card.Body style={{ backgroundColor: "#F7F5F9" }}>
                                    <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "44px" }}>
                                        <img src="images/vectorpic.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                        <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Testimonials</span>
                                    </Card.Title>

                                    <Card.Text style={{ with: "720px", height: "180px", marginTop: "24px", marginLeft: "44px" }}>
                                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites
                                        like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides
                                        the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by
                                        people of the hobbycue community. To have discussions, to get visibility, and to be
                                        able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                                    </Card.Text>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div style={{ display: "flex" }} >
                                            <Card body style={{ width: "776px", height: "100px", backgroundColor: "#CCC1DA", display: "flex", flexDirection: "row" }}>
                                                <div style={{ marginBottom: "70px" }}>
                                                    <Image src="images/pay.png" roundedCircle style={{ width: "40px", marginTop: " 19px", marginBottom: "12px", height: "40px" }} />

                                                    <progress style={{ marginTop: "0px", backgroundColor: "blueviolet", width: "600px" }}>00:00</progress>
                                                    <img src="images/Ellipse 26.png" alt="" style={{ marginLeft: "20px", height: "40px" }} />
                                                </div>
                                            </Card>
                                        </div>
                                        <div>
                                            <img src="images/Group 108.png" alt="" />
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Testimonies