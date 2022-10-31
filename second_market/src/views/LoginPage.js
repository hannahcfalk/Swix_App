import React, { useState, useContext, useEffect } from 'react';
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorToast from '../components/ErrorToast';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
         username: Yup.string()
         .required('This field is required'),
       password: Yup.string()
       .required('This field is required'),
});

const LoginPage = () => {
    
    const [submitted, setSubmitted] = useState(false);
   const [formErrs, setFormErrs] = useState({});
   const { loginUser } = useContext(AuthContext);
       const location = useLocation();
  const handleSubmit = (e) => {
   loginUser(e);
  };

      const handleClick = () => {
        setSubmitted(true);
    };
      useEffect(() => {
          if (location.state && location.state.formErrs) {
                setFormErrs(location.state.formErrs);
          }
 
          
  });

  return (
            <Row>
        <Col></Col>
        <Col>
           <Card className="m-1">
            <Card.Body>
        <Card.Title>
                <Card className="m-1 p-3" bg="light">
                  <Card.Body className="text-center">
                    <Card.Title>Pigeon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Securely buy and transfer tickets</Card.Subtitle>
                  </Card.Body>
                </Card>
                </Card.Title>
       <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
       username: '',
       password: '',
     }}
    >
        {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
   

                          <Form className="m-1" noValidate onSubmit={handleSubmit}>
           <ErrorToast data={formErrs} />
              <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      type="text" 
                      name="username"
                      placeholder="Choose a username"
                      onChange={handleChange}
                      isInvalid={!!errors.username && submitted}
                  />
                    <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
       </Form.Group>
            
                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    isInvalid={!!errors.password && submitted}
                  />
<Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              </Form.Group>
               <Form.Group className="mb-3 text-center" controlId="formSubmitButton">
                   <Button variant="primary" type="submit" onClick={handleClick}>
                  Login
              </Button>
              </Form.Group>
              <Form.Group className="mb-3 text-center" controlId="signUpRequest">
               <Form.Text>Don't have an account. Sign up  <Link to="/register">here</Link></Form.Text>
              </Form.Group>
             
            </Form>
                        )}
    </Formik>
            
                  </Card.Body>
    </Card>
        </Col>
       <Col></Col>
      </Row>

  );
};

export default LoginPage;
