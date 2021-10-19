import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (

        // footer section
        <div className="footer">
            <Row>

                {/* footer first section */}
                <Col sm={12} xs={12} md={4}>
                    <h2>Get In Touch</h2><br />
                    <Row>
                        <Col sm={1} xs={1} md={1}>
                            <i className="fas fs-4 fa-map-marker-alt"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            #1 Sillins Avenue & Philey Street<br />
                            P.O. Cox F 1018<br />
                            Nassau, The Bahamas<br />
                        </Col>
                    </Row>
                    <br />


                    {/* footer second section */}
                    <Row>
                        <Col sm={1} xs={12} md={1}>
                            <i className="fas fs-4 fa-phone-alt"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            #Tel: (235) 335-7894<br />
                            Fax: (254) 322-3252
                        </Col>
                    </Row>
                    <br />


                    {/* footer third section */}
                    <Row>
                        <Col sm={1} xs={12} md={1}>
                            <i className="fas fs-4 fa-envelope"></i>
                        </Col>
                        <Col sm={11} xs={11} md={11}>
                            gafdlime@unisevaj.com
                        </Col>
                    </Row>
                </Col>


                {/* quick links section */}
                <Col className="quick-links fs-5" sm={12} xs={12} md={8}>
                    <h2>Quick Links</h2><br />
                    <Link action variant="light" to="/home">Home</Link><br />
                    <Link to="/ourCommunity">Our Community</Link><br />
                    <Link to="/healthcare">HealthCare</Link><br />
                    <Link to="/login">Login</Link><br />
                    <Link to="/register">Register</Link><br />


                </Col>
            </Row>
        </div>
    );
};

export default Footer;