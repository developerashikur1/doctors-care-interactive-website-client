import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col sm={12} xs={12} md={4}>
                    <h2>Get In Touch</h2><br />
                    <Row>
                        <Col sm={1} xs={1} md={1}>
                            <i className="fas fs-4 fa-map-marker-alt"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            #1 Collins Avenue & Shirley Street<br />
                            P.O. Box N 3018<br />
                            Nassau, The Bahamas<br />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={1} xs={12} md={1}>
                            <i className="fas fs-4 fa-phone-alt"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            #Tel: (242) 302-4600<br />
                            Fax: (242) 322-3284
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={1} xs={12} md={1}>
                            <i className="fas fs-4 fa-envelope"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            gawadot454@smuvaj.com
                        </Col>
                    </Row>
                </Col>
                <Col className="quick-links fs-5" sm={12} xs={12} md={8}>
                    <h2>Quick Links</h2><br />
                    <Link action variant="light" to="/home">Home</Link><br />
                    <Link to="/login">Login</Link><br />

                </Col>
            </Row>
        </div>
    );
};

export default Footer;