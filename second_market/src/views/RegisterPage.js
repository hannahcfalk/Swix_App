import React, { useState, useContext } from 'react';
import {Modal, Button, Row, Col, Form, Container} from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import DatePicker from "react-datepicker";
import AuthContext from "../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";

const RegisterPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setBirthday] = useState(new Date());
    const [gender, setGender] = useState("");
    const [year, setYear] = useState("");
    const [course, setCourse] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const genderOptions = [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
      { value: 'non-binary', label: 'Non-binary' },
      { value: 'other', label: 'Other' },
     ]
     const yearOptions = [
      { value: '1st', label: '1st' },
      { value: '2nd', label: '2nd' },
      { value: '3rd', label: '3rd' },
      { value: '4th', label: '4th' },
      { value: '5th', label: '5th' },
      { value: 'masters', label: 'Masters' },
      { value: 'phd', label: 'PhD' },
      { value: 'other', label: 'Other' },
     ]
     const courseOptions = [
      { value: 'management', label: 'Management' },
      { value: 'computer-science', label: 'Computer Science' },
      { value: 'maths', label: 'Maths' },
      { value: 'other', label: 'Other' },
     ]
     const handleSubmit = async (e) => {
        e.preventDefault();
        registerUser(username, email, dob.toISOString().split('T')[0], gender['value'], year['value'], course['value'], password, password2);
     };
    return (
            
          <Form className="m-1" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      required
                      type="text" 
                      placeholder="Choose a username"
                      onChange={(e) => setUsername(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      required
                      type="email" 
                      placeholder="Enter your university email"
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <DatePicker selected={dob} onChange={(date:Date) => setBirthday(date)} />
              </Form.Group>

              <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Select
                    defaultValue={[null]}
                    options={genderOptions}
                    value={gender}
                    onChange={(e) => setGender(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Select
                    defaultValue={[null]}
                    options={yearOptions}
                    value={year}
                    onChange={(e) => setYear(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Select
                    defaultValue={[null]}
                    options={courseOptions}
                    value={course}
                    onChange={(e) => setCourse(e)}
                />
              </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
              </Form.Group>
               <Form.Group className="mb-3" controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm password"
                onChange={(e) => setPassword2(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
        );
}

export default RegisterPage;


