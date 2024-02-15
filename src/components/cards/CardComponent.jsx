import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import './CardComponent.css';
import { Row, Col } from 'react-bootstrap';

import { TiTick } from "react-icons/ti";
function CardComponent() {
    return (
        <div>

            <Row className="d-sm-none" >
                <Col sm={12}>
                    <Container style={{ Width: "1240px", height: "618px", marginTop: "100px", display: "flex", justifyContent: "space-between" }} className="flex-wrap " >

                        <Card style={{ width: '608px', height: "297px",marginLeft:"24px" }} className="rounded card-1">
                            <Card.Body style={{display:"flex", justifyContent:"center",  flexDirection: 'column'}}>
                                <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", display:"flex", justifyContent:"center"}}>
                                    <img src="images/Group.png" alt="group" style={{ width: "30px", height: "30px", paddingBottom: "10px" }} />
                                    <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">People</span>
                                </Card.Title>

                                <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "10px" }}>
                                    Find a teacher, coach, or expert for your hobby interest in
                                    your locality.  Find a partner, teammate, accompanist or collaborator.
                                </Card.Text>
                                <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "246px", height: "40px", marginTop: "27px", marginLeft: "24px" }}
                                    className="rounded">connect</Button>

                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: '608px', height: "297px",marginLeft:"24px" }} className="rounded card-2">
                            <Card.Body  style={{display:"flex", justifyContent:"center",  flexDirection: 'column'}}>
                                <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "15px", display:"flex",justifyContent:"center" }}>
                                    <img src="images/location_on_black_24dp 1.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                    <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Place</span>
                                </Card.Title>

                                <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "10px" }}>
                                    Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                                </Card.Text>
                                <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "246px", height: "40px", marginTop: "27px", marginLeft: "24px" }}
                                    className="rounded">Meet up</Button>

                            </Card.Body>
                        </Card>
                        <br />

                        <Card style={{ width: '608px', height: "297px",marginLeft:"24px" }} className="rounded card-3">
                            <Card.Body  style={{display:"flex", justifyContent:"center",  flexDirection: 'column'}}>
                                <Card.Title style={{ with: "147px", height: "40px", marginTop: "30px", marginLeft: "15px", display:"flex", justifyContent:"center" }}>
                                    <img src="images/cardcard.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                    <span style={{ width: "103px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Product</span>
                                </Card.Title>

                                <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "10px" }}>
                                    Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                                </Card.Text>
                                <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "246px", height: "40px", marginTop: "27px", marginLeft: "24px" }}
                                    className="rounded">Got it</Button>

                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: '608px', height: "297px",marginLeft:"24px" }} className="rounded card-4">
                            <Card.Body  style={{display:"flex", justifyContent:"center",  flexDirection: 'column'}}>
                                <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "10px", display:"flex",justifyContent:"center" }}>
                                    <TiTick style={{ width: "30px", height: "30px", paddingBottom: "10px" }} />

                                    <span style={{ width: "103px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Program</span>
                                </Card.Title>

                                <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "10px" }}>
                                    Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                                </Card.Text>
                                <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "246px", height: "40px", marginTop: "27px", marginLeft: "24px" }}
                                    className="rounded">Attend</Button>

                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>

            <Row >
                <Col xs={12} className="d-none d-sm-block">

                    <Container style={{ maxWidth: "1440px", height: "818px" }}>
                        <Container style={{ Width: "1240px", height: "618px", marginTop: "100px", marginLeft: "100px", display: "flex", justifyContent: "space-evenly" }} className="flex-wrap " >

                            <Card style={{ width: '608px', height: "297px", }} className="rounded card-1">
                                <Card.Body>
                                    <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "44px" }}>
                                        <img src="images/Group.png" alt="group" style={{ width: "30px", height: "30px", paddingBottom: "10px" }} />
                                        <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">People</span>
                                    </Card.Title>

                                    <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "44px" }}>
                                        Find a teacher, coach, or expert for your hobby interest in
                                        your locality.  Find a partner, teammate, accompanist or collaborator.
                                    </Card.Text>
                                    <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginTop: "27px", marginLeft: "44px" }}
                                        className="rounded">connect</Button>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '608px', height: "297px", }} className="rounded card-2">
                                <Card.Body>
                                    <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "44px" }}>
                                        <img src="images/location_on_black_24dp 1.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                        <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Place</span>
                                    </Card.Title>

                                    <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "44px" }}>
                                        Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                                    </Card.Text>
                                    <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginTop: "27px", marginLeft: "44px" }}
                                        className="rounded">Meet up</Button>

                                </Card.Body>
                            </Card>


                            <Card style={{ width: '608px', height: "297px", }} className="rounded card-3">
                                <Card.Body>
                                    <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px", marginLeft: "44px" }}>
                                        <img src="images/cardcard.png" alt="group" style={{ width: "30px", height: "30px" }} />
                                        <span style={{ width: "83px", height: "36px", marginLeft: "20px", fontWeight: "600px" }} className="fs-3">Product</span>
                                    </Card.Title>

                                    <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "44px" }}>
                                        Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                                    </Card.Text>
                                    <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginTop: "27px", marginLeft: "44px" }}
                                        className="rounded">Got it</Button>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '608px', height: "297px", }} className="rounded card-4">
                                <Card.Body>
                                    <Card.Title style={{ with: "147px", height: "40px", marginTop: "40px",  }}>
                                        <TiTick style={{ width: "30px", height: "30px", paddingBottom: "10px" }} />

                                        <span style={{ width: "83px", height: "36px", marginLeft: "26px", fontWeight: "600px" }} className="fs-3">Program</span>
                                    </Card.Title>

                                    <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft:"44px" }}>
                                        Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                                    </Card.Text>
                                    <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginTop: "27px", marginLeft: "44px" }}
                                        className="rounded">Attend</Button>

                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default CardComponent;