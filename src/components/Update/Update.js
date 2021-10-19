import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Update.css'

const Update = () => {
    return (
        <div className="update-container">
            <h1 className="py-5">Daily Updates</h1>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1 className="text-primary">507+</h1>
                                <Card.Title>Nurses At Work</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1
                                    className="text-primary">2796+</h1>
                                <Card.Title>Happy Patients</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1
                                    className="text-primary">577+</h1>
                                <Card.Title>Medical Beds</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1
                                    className="text-primary">275+</h1>
                                <Card.Title>Winning Awards</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Update;