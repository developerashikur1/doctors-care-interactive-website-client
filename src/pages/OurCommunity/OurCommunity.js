import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import Doctors from '../Doctors/Doctors';
import Ceo from './Ceo/Ceo';
import './OurCommunity.css';

const OurCommunity = () => {
    // hooks
    const [doctors] = useDoctors();

    return (
        <div>

            {/* community section  */}
            <div className="doctor-cover">
                <h2 className="text-center fw-bolder fs-1">Serving Our Community</h2>
            </div>
            <div className="ms-5">
                <h6 className="ms-5 mt-3"><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link> / healthcare</h6>
            </div>
            <div className="container my-5">


                {/* ceo  */}
                <Ceo></Ceo>
                <br />
                <br />
                <br />



                {/* doctors cards */}
                <div className="m5">
                    <h2 className="text-center fw-bolder fs-1">Serving Our Community</h2>

                    <Row xs={1} sm={1} md={2} lg={3} className="g-4 py-5">
                        {
                            doctors.map(doctor => <Doctors key={doctor._id} doctor={doctor}></Doctors>)
                        }
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default OurCommunity;