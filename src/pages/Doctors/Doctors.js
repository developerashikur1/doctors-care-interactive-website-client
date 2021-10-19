import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctors.css';

const Doctors = ({ doctor }) => {

    // destructuring
    const { id, cover_image, title, description } = doctor;
    return (
        <div>
            <Col>
                {/* doctor card */}
                <Link className="doctor-cards" to={`/doctor/${id}`}>

                    {/* card image */}
                    <Card className="services">
                        <div style={{ overflow: 'hidden' }}>
                            <Card.Img style={{ width: "100%", height: "300px", objectFit: "cover" }} variant="top" src={cover_image} />
                        </div>

                        {/* card body */}
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>

                        <Card.Body className="card-second-body" >
                            <Card.Text>
                                {title} {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </div>
    );
};

export default Doctors;