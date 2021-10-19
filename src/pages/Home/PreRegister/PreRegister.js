import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PreRegister = () => {
    return (
        <div className="container my-5">
            <Row>

                {/* image */}
                <Col md={4} sm={12} xs={12} lg={4}>
                    <img style={{ width: "100%" }} src="https://website-api.doctorshosp.com/storage/images/home_page_images/zgIAcLpECmEMLki5JMfaCLZp4WmXqfwCLnTbzaY3.jpeg" alt="" />
                </Col>


                {/* description */}
                <Col md={1}></Col>
                <Col md={12} sm={12} xs={12} lg={7}>
                    <h2>Pre-Register for Doctors <br /> Hospital Services</h2>
                    <p>"You can now pre-register online for many of Doctors Hospital services"</p>
                    <Link to="/register" style={{ textDecoration: "none", color: "goldenrod" }}><h4>Click hare to reed more <i className="fas fa-long-arrow-alt-right"></i></h4></Link>
                </Col>
            </Row>
        </div>
    );
};

export default PreRegister;