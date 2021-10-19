import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServiceAll from '../../hooks/useServiceAll';
import AddedService from '../AddedService/AddedService';

const HealthCare = () => {

    // hooks
    const [healthCare] = useServiceAll();

    return (
        <div>

            {/* cover image */}
            <div>
                <img style={{ width: '100%' }} src="https://i.ibb.co/Lvhh7XQ/healthcare-services.jpg" alt="" />
            </div>

            {/* short navigation */}
            <div className="ms-5">
                <h6 className="ms-5 mt-3"><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link> / healthcare</h6>
            </div>

            {/* new services */}
            <div className="container my-5">
                <Row xs={1} sm={1} md={2} lg={3} className="g-4 py-5">
                    {
                        healthCare.map(healthy => <AddedService key={healthy.id} healthy={healthy}></AddedService>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default HealthCare;