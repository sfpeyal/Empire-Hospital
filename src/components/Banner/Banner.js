import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import banner1 from '../../images/banner.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">

            <Container>
                <Row>
                    <Col className="div-one" sm={6}>
                        <div className="div-two">
                            <h2>The Importance Of Empire Hospital</h2>
                            <p>Healthcare is important for several reasons. One reason why you should plan for healthcare now is because you never know when a medical situation may arise. The best time to be prepared is now.</p>
                            <Button variant="primary">Read More</Button>{' '}
                        </div>
                    </Col>
                    <Col sm={6}><Image className="img" src={banner1} fluid rounded /></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Banner;
