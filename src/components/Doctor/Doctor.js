import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctor.css'

const Doctor = () => {
    return (
        <div className="doctor-container">
            <h1 className="py-5">Our Doctors</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=" />
                            <Card.Body>
                                <Card.Title>Dr. Emma</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you, your health our main priority
                                    so if thats the sitiution you belive on us, belive no Empire Hospital.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY=" />
                            <Card.Body>
                                <Card.Title>Dr. Russal</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you, your health our main priority
                                    so if thats the sitiution you belive on us, belive no Empire Hospital.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?b=1&k=20&m=1271328839&s=170667a&w=0&h=SIMzwoe8eu43OoY4M3ElZCMxW9MgDbZbVzMhh4VY2zM=" />
                            <Card.Body>
                                <Card.Title>Dr. Soniya</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you, your health our main priority
                                    so if thats the sitiution you belive on us, belive no Empire Hospital.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctor;