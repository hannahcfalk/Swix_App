import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456"
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/");
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
            
            <Form onSubmit={handlesubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
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
}

export default Login;