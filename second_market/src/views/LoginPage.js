import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginPage = () => {
   const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
   
      <Row>
        <Col></Col>
        <Col>
           <Card className="m-1">
            <Card.Body>
        <Card.Title>
                <Card className="m-1 p-3" bg="light">
                  <Card.Body className="text-center">
                    <Card.Title>St Andrews Ticket Market</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Safely and securely transfer tickets</Card.Subtitle>
                  </Card.Body>
                </Card>
                </Card.Title>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
               <Form.Group className="mb-3 text-center" controlId="formSubmitButton">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
              </Form.Group>
              <Form.Group className="mb-3 text-center" controlId="signUpRequest">
               <Form.Text>Don't have an account. Sign up <a href="#">here</a></Form.Text>
              </Form.Group>
             
            </Form>
            
                  </Card.Body>
    </Card>
        </Col>
       <Col></Col>
      </Row>

  );
};

export default LoginPage;
