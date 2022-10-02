import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="m-1">
      <Container fluid>
        <Navbar.Brand href="#">St Andrews Ticket Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="m-1" id="RouterNavLink" to="/">Home</Link>
            <Link className="m-1" id="RouterNavLink" to="/mytickets">My Tickets</Link>
            <Link className="m-1" id="RouterNavLink" to="/account">Account</Link>
            <Link className="m-1" id="RouterNavLink" to="/login">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;