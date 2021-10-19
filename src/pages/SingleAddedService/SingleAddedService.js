import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import useServiceAll from '../../hooks/useServiceAll';
import './SingleAddedService.css';

const SingleAddedService = ({ id }) => {

    // hooks
    const [show, setShow] = useState(false);
    const [care, setCare] = useState({});
    const [healthCare] = useServiceAll();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        const cares = healthCare.filter(health => health.id === id);
        setCare(cares)
        setShow(true);

    };


    return (

        // sing new service details 
        <div className="single">
            <>

                {/* single button */}
                <div className="d-grid buttonSingle">
                    <Button size="lg" onClick={handleShow}>
                        Launch static backdrop modal
                    </Button>
                </div>


                {/* modals */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    {/* modals title */}
                    <Modal.Header closeButton>
                        <Modal.Title>{care[0]?.title}</Modal.Title>
                    </Modal.Header>



                    {/* modals image */}
                    <Card.Img style={{ width: "100%", height: "300px", objectFit: "cover" }} variant="top" src={care[0]?.cover_image} />
                    <br />


                    {/* modals body */}
                    <Modal.Body>
                        {care[0]?.title} Doctors Hospital exists to operate a quality acute care hospital that:
                        Meets and exceeds the healthcare needs and expectations of our patients,
                        Provides an enriching and rewarding professional environment for our
                        Associates and Physicians,

                        Makes a positive contribution to the advancement of healthcare in the Region, and

                        Provide increasing value to our shareholders.
                    </Modal.Body>


                    {/* modals footer and button */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default SingleAddedService;