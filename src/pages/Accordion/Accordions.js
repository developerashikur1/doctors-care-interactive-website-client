import React from 'react';
import { Accordion } from 'react-bootstrap';

const Accordions = () => {
    return (

        <div className="container my-5">
            <h2 className="text-center">Health and Wellness</h2><br />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Annual Physicals</Accordion.Header>
                    <Accordion.Body>
                        An annual physical is an evaluation of your body and its functions with a focus on preventing future health issues. The complete health assessment also includes gathering information about your medical history and lifestyle, doing laboratory tests, and screening for disease.

                        If you don’t already see a primary care physician for your yearly checkup, make this the year you start. An annual physical will give you the information that you need to begin a discussion with your doctor about your health and a way to track changes as you get older. To schedule an Annual Physical, contact our Specialist Clinic
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Smoke-Free Hospital</Accordion.Header>
                    <Accordion.Body>
                        Doctors Hospital does not allow smoking anywhere on the property – this includes sidewalks and parking lots. As a health care organization, we are committed to promoting wellness and it is important that we treat patients in a healthy and safe environment. Allowing smoking anywhere on the site would not be consistent with this commitment.

                        The aim of the policy is to reduce the health risks associated with tobacco use by patients, staff and visitors to Doctors Hospital facilities and reduce the community's exposure to second-hand smoke.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Accordions;