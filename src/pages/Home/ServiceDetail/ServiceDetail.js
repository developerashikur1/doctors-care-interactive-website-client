import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const [serve] = useService();
    const { serviceId } = useParams();

    const singleService = serve.filter(serv => serv._id == serviceId);

    return (

        // service details section
        <Row className="container my-5">

            {/* service detail image */}
            <Col className="my-5" md={6} lg={6} sm={12} xs={12}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={singleService[0]?.img} alt="" />
            </Col>

            {/* service details */}
            <Col className="ps-md-5 pt-md-5" md={6} lg={6} sm={12} xs={12}>
                <h1 className="fs-1 fw-bolder">{singleService[0]?.serviceName}</h1>
                <br /> <br />
                <p>{singleService[0]?.subtitle}</p>
                <br />
                <p>{singleService[0]?.description}</p>
                <Link to="/home"><Button className="back-home-btn">Go Services</Button></Link>
            </Col>
        </Row>
    );
};

export default ServiceDetail;