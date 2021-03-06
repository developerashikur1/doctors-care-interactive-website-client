import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    // destructuring
    const { img, serviceName, subtitle, _id } = props.serv;

    return (
        <>
            <Col>

                {/* service card */}
                <Card className="services">
                    <div style={{ overflow: 'hidden' }}>
                        <Card.Img style={{ width: "100%", height: "300px", objectFit: "cover" }} variant="top" src={img} />
                    </div>

                    {/* service card body */}
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {subtitle.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>

                    {/* service card button */}
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={`/serviceDetail/${_id}`} className="d-grid">
                            <Button className="service-detail-btn" size="lg">
                                See {serviceName} Details
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default Service;