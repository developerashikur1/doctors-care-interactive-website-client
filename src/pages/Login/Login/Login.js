import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const loginImage = "https://i.ibb.co/0m5x55t/4957136.jpg";
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const history = useHistory();

    const { signInUsingGoogle, signInUsingGithub, signInUsingUserPassword } = useAuth();


    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }


    const handleSignIn = (e) => {
        e.preventDefault();
        signInUsingUserPassword(email, password)
            .then((result) => {
                history.push(location.state?.from || "/home")
            })
    }



    const handleGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(location.state?.from || "/home")
            })
    }

    const handleGithub = () => {
        signInUsingGithub()
            .then((result) => {
                history.push(location.state?.from || "/home")
            })
    }


    return (
        <div className="container my-5">

            <Row>
                <Col sm={12} md={6} className="p-4">
                    <div className="full-form py-5 px-4">
                        <div className="d-grid signInMethods gap-2">
                            <Button onClick={handleGoogle} striped bordered hover size="lg">
                                <i class="fab google fa-google"> </i> &nbsp; &nbsp;Continue with google
                            </Button>
                            <Button striped bordered hover size="lg">
                                <i class="fab facebook fa-facebook-f"> </i>&nbsp; &nbsp; Continue with facebook
                            </Button>
                            <Button onClick={handleGithub} striped bordered hover size="lg">
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
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 input"
                            >
                                <Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel className="input" controlId="floatingPassword" label="Password">
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                            </FloatingLabel>
                            <br />

                            <div className="d-grid gap-2">
                                <Button onClick={handleSignIn} className="continue-btn" striped bordered hover variant="secondary" size="lg">
                                    Login
                                </Button>
                            </div>
                            <br />
                            <br />
                            <p>Don't have an account? <Link to="/register">Register now</Link></p>
                        </div>
                    </div>
                </Col>


                <Col sm={12} md={6}>
                    <img style={{ width: "100%" }} src={loginImage} alt="" />
                </Col>
            </Row>



        </div>
    );
};

export default Login;