import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg" className="m-1">
      <Container fluid>
        <Navbar.Brand href="#">Pigeon</Navbar.Brand>
        {user ? (
            <>
                      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="m-1" id="RouterNavLink" to="/">Home</Link>
            <Link className="m-1" id="RouterNavLink" to="/second_market">Ticket Market</Link>
            <Link className="m-1" id="RouterNavLink" to="/mytickets">My Tickets</Link>
            <Link className="m-1" id="RouterNavLink" to="/account">Account</Link>
            <Link className="m-1" id="RouterNavLink" to="/login" onClick={logoutUser}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
            </>
          ) : (
            <>
            </>
          )}

      </Container>
    </Navbar>
  );
}

export default NavBar;

