import React from 'react'
import { Container } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function cardCompSec() {
  return (
    <div>

<Row className="d-sm-none" >
                <Col sm={12}>
                    <Container style={{ Width: "1440px", height: "404px", marginTop: "780px", display: "flex", justifyContent: "space-between" }} className="flex-wrap " >

                    <Card style={{ width: '608px', height: "307px",marginLeft:"24px" }} className="rounded">
                            <Card.Body style={{display:"flex", justifyContent:"center",  flexDirection: 'column'}}>
                                <Card.Title style={{ with: "147px",  display:"flex", justifyContent:"center"}}>
                                    <img src="images/Group 123.png" alt="group" style={{ width: "166px", height: "52px", paddingBottom: "10px" }} />
                                    
                                </Card.Title>

                                <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "0px" }}>
                                Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                                </Card.Text>
                                <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "246px", height: "40px", marginTop: "57px", marginLeft: "24px" }}
                                    className="rounded">Add new</Button>

                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>


         <Row >
                <Col xs={12} className="d-none d-sm-block">

                    <Container style={{ maxWidth: "1440px", height: "488px" }}>
                   
                        <Container style={{ Width: "1240px", height: "618px", marginTop: "100px", marginLeft: "100px", display: "flex", justifyContent: "space-evenly" }} className="flex-wrap " >

                            <Card style={{ width: '1160px', height: "240px", }} className="rounded ">
                                <Card.Body>
                                    <Card.Title style={{ with: "147px", height: "40px",paddingLeft:"30px" }}>
                                    <img src="images/Group 123.png" alt="group" style={{ width: "166px", height: "52px", paddingBottom: "10px" }} />
                                     
                                    </Card.Title>

                                    <Card.Text style={{ with: "520px", height: "81px", marginTop: "24px", marginLeft: "44px" }}>
                                    Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                                    </Card.Text>
                                    <Button variant="outline-dark" style={{ borderColor: "blueViolet", width: "122px", height: "40px", marginLeft: "44px" }}
                                        className="rounded">Add new</Button>

                                </Card.Body>
                            </Card>
                    </Container>
                    </Container>
                </Col>
            </Row>
    </div>
  )
}

export default cardCompSec