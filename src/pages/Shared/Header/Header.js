import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../contexts/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" className="navber" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} style={{ color: "whitesmoke" }} to="/home">Doctor's Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/our-community">Our Community</Nav.Link>
                        <Nav.Link as={Link} to="/healthcare">HealthCare</Nav.Link>
                        {!user.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user.email && <Navbar.Text style={{ color: "whitesmoke" }}>
                            Signed in: <Link style={{ color: "gold", textDecoration: "none" }} to="/login">{user.displayName} </Link>
                        </Navbar.Text>} &nbsp; &nbsp;
                        {user.email && <Button onClick={logOut} variant="warning" className="fs-6 fw-bolder text-danger">Logout</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;