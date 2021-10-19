import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useDoctors from '../../hooks/useDoctors';

const Doctor = () => {
    // hooks
    const { doctorId } = useParams();
    const [doctors] = useDoctors();
    const doctor = doctors.filter(doct => doct.id === doctorId);

    return (
        <div>

            {/* doctors section */}
            <Row className="container my-5">

                {/* doctor image */}
                <Col className="my-5" md={6} lg={6} sm={12} xs={12}>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src={doctor[0]?.cover_image} alt="" />
                </Col>

                {/* doctor details */}
                <Col className="ps-md-5 pt-md-5" md={6} lg={6} sm={12} xs={12}>
                    <h1 className="fs-1 fw-bolder">{doctor[0]?.title}</h1>
                    <br /> <br />
                    <p>{doctor[0]?.title}</p>
                    <br />
                    <p>{doctor[0]?.description}</p>

                    {/* doctors btn */}
                    <Link to="/ourcommunity"><Button className="back-home-btn">Go OurCommunity</Button></Link>
                </Col>
            </Row>
        </div>
    );
};

export default Doctor;