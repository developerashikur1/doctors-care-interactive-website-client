import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Ceo = () => {
    return (
        <div className>
            <h1 className="text-center fs-2 fw-bold my-5">From the CEO</h1>
            <Row className="mt-5">

                {/* ceo image */}
                <Col className="text-center" md={6} sm={12} xs={12}>
                    <img style={{ width: "75%", height: "95%" }} variant="top" src="https://i.ibb.co/Y0tBp0W/file-20191203-66986-im7o5.jpg" />
                </Col>

                {/* ceo details */}
                <Col md={6} sm={12} xs={12}>
                    <h3>Emma Montes-Ewing</h3>
                    <p>
                        The start of a new year is the ideal time to take stock – to look back … to look back on our accomplishments and at the same time, evaluate our goals for the future. Doctors Hospital is dedicated to improving the accessibility of healthcare services — particularly in underserved locations. To that end, the hospital operates clinics and centers in strategic areas of the community: Providence Health Center, North Laredo Diagnostic and Therapy Center, South Laredo Diagnostic Center, Nueva Vida Maternity Clinic, Calton MRI, Hillside Health Center, Doctors Hospital ER South and Doctors Hospital ER Saunders.
                        Providence Health Center, located in central Laredo, provides lab services, radiology and surgical services.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Ceo;