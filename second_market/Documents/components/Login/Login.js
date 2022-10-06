import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;
/*import React, { useContext, useEffect , useState} from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);
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
*/

