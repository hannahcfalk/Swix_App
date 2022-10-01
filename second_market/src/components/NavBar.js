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
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/mytickets">My Tickets</Link></Nav.Link>
            <Nav.Link><Link to="/account">Account</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find an event"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
            <Nav.Link><Link to="/login">Logout</Link></Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;