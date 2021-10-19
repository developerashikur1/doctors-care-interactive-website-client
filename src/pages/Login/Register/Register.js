import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const registerImage = "https://i.ibb.co/8Nv7Y6h/496130-PHGFIZ-389.jpg";

    const [firstPass, setFirstPass] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isMatched, setIsMatched] = useState(true);
    const location = useLocation();
    const history = useHistory();

    const { signInUsingGoogle, signInUsingGithub, registrationUsingUserPassword, error, user } = useAuth();

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handleFirstPass = (e) => {
        e.preventDefault();
        setFirstPass(e.target.value)
    }


    const handleSecondPass = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }


    const handleRegister = (e) => {
        e.preventDefault();
        if (firstPass === password) {
            setIsMatched(true)
        }
        else {
            setIsMatched(false)
        }
        registrationUsingUserPassword(email, password)
            .then((result) => {
                history.push(location.state?.from || "/home")

            })
    }



    return (
        <div className="container my-5">
            <div className="d-grid gap-2">

            </div>
            <Row>
                <Col sm={12} md={6} className="p-4">
                    <div className="full-form py-5 px-4">
                        <div className="d-grid signInMethods gap-2">
                            <Button onClick={signInUsingGoogle} striped bordered hover size="lg">
                                <i class="fab google fa-google"> </i> &nbsp; &nbsp;Continue with google
                            </Button>
                            <Button striped bordered hover size="lg">
                                <i class="fab facebook fa-facebook-f"> </i>&nbsp; &nbsp; Continue with facebook
                            </Button>
                            <Button onClick={signInUsingGithub} striped bordered hover size="lg">
                                <i class="fab github fa-github"></i>&nbsp; &nbsp;  Continue with GitHub
                            </Button>
                        </div>
                        <br />
                        <br />
                        <div className="social-divider">
                            <span style={{ backgroundColor: "white", padding: "10px", fontSize: "1.2rem" }}>or</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <FloatingLabel
                                border="primary"
                                controlId="floatingInput"
                                label="Full Name"
                                className="mb-3 input"
                            >
                                <Form.Control required type="text" placeholder="Your Name" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 input"
                            >
                                <Form.Control onBlur={handleEmail} required type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel className="input" controlId="floatingPassword" label="Password">
                                <Form.Control onBlur={handleFirstPass} type="password" placeholder="Password" />
                            </FloatingLabel>
                            <br />
                            <FloatingLabel onBlur={handleSecondPass} className="input" controlId="floatingPassword"
                                label={!isMatched ? <span className="text-danger">not matched</span> : "Confirm Password"}>
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            {error && <span className="text-danger">{error.slice(22, 42)}<br /></span>}
                            <br />
                            <div className="d-grid gap-2">
                                <Button onClick={handleRegister} className="continue-btn" striped bordered hover variant="secondary" size="lg">
                                    Register
                                </Button>
                            </div>
                            <br />
                            <br />
                            <p>By clicking continue, you agree to our Terms of Service and Privacy Policy</p>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </Col>


                <Col className="pt-4" sm={12} md={6}>
                    <img style={{ width: "100%" }} src={registerImage} alt="" />
                </Col>
            </Row>



        </div>
    );
};

export default Register;