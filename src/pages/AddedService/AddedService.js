import React from 'react';
import { Card, Col } from 'react-bootstrap';
import SingleAddedService from '../SingleAddedService/SingleAddedService';
import './AddedService.css';

const AddedService = (props) => {
    const { cover_image, title, id } = props.healthy;
    return (
        <>
            <Col>

                {/* cards */}
                <Card className="addedService">
                    <div style={{ overflow: 'hidden' }}>
                        <Card.Img style={{ width: "100%", height: "300px", objectFit: "cover" }} variant="top" src={cover_image} />
                    </div>

                    {/* card body */}
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <br />

                    {/* single new service */}
                    <SingleAddedService id={id}></SingleAddedService>
                </Card>
            </Col>
        </>
    );
};

export default AddedService;