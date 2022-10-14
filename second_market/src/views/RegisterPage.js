import React, { useState, useContext } from 'react';
import {Modal, Button, Row, Col, Form, Container} from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import AuthContext from "../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
 import { Formik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password'

import InputGroup from 'react-bootstrap/InputGroup';
import MySelect from '../components/MySelect';
import DatePicker from "react-datepicker";
import './css/datepicker.css';

YupPassword(Yup);

const schema = Yup.object().shape({
         username: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('This field is required'),
       email: Yup.string().required('This field is required'),
       gender: Yup.string().required('This field is required'),
       year: Yup.string().required('This field is required'),
       course: Yup.string().required('This field is required'),
       password: Yup.string()
       .minLowercase(1, 'password must contain at least 1 lower case letter')
       .minUppercase(1, 'password must contain at least 1 upper case letter')
       .minNumbers(1, 'password must contain at least 1 number')
       .minSymbols(1, 'password must contain at least 1 special character')
       .required('This field is required'),
       password2: Yup.string()
       .oneOf([Yup.ref('password'),null], 'Passwords must match')
});


let dt = new Date();
const maxDate = dt.setFullYear(dt.getFullYear() - 18);


const RegisterPage = () => {

    const [submitted, setSubmitted] = useState(false);
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
       e["email"] = e["email"].concat("@example.com"); // change to st andrews
       registerUser(e);
        };


    return (
            <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
       username: '',
       email: '',
       dob: dt.toISOString().split('T')[0],
       gender: '',
       year: '',
       course: '',
       password: '',
       password2: '',
     }}
    >
    {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldValue,
      }) => (
          <Form className="m-1" noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      required
                      type="text" 
                      placeholder="Choose a username"
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                      isInvalid={!!errors.username && submitted}
                  />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
       </Form.Group>
              <Form.Group className="mb-3" controlId="validationFormik02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      type="text" 
                      name="email"
                      placeholder="Email code e.g. ab12"
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email && submitted}
                  />
        <InputGroup.Text id="basic-addon2">@st-andrews.ac.uk</InputGroup.Text>
      </InputGroup>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 text-center" controlId="validationFormikBirthday">
                <Form.Label>Birthday</Form.Label>
                <DatePicker className="p-2"
                    selected={maxDate}
                    onChange={(e) => setFieldValue('dob', e.toISOString().split('T')[0])}
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown={true}
                    showYearDropdown

                />
              </Form.Group>
 <Form.Group className="mb-3" controlId="validationFormikGender">
                  <Form.Label>Gender</Form.Label>
                 <MySelect className="is-invalid"
                  placeholder="Gender"
                  name="gender"
                  onChange={(e) => setFieldValue('gender', e["value"])}
                  isSearchable={true}
                  options={genderOptions}
                  isInvalid={!!errors.gender && submitted}
                 
                />
                <div className="invalid-feedback">{submitted ? errors.gender: ''}</div>
              </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormikCourse">
                  <Form.Label>Course</Form.Label>
                 <MySelect className="is-invalid"
                  placeholder="Course"
                  onChange={(e) => setFieldValue('course', e["value"])}
                  isSearchable={true}
                  options={courseOptions}
                  name="course"
                  isInvalid={!!errors.course && submitted}
                />
                <div className="invalid-feedback">{submitted ? errors.course: ''}</div>
              </Form.Group>
               <Form.Group className="mb-3" controlId="validationFormikYear">
                  <Form.Label>Year</Form.Label>
                 <MySelect className="is-invalid"
                  placeholder="Year"
                  onChange={(e) => setFieldValue('year', e["value"])}
                  isSearchable={true}
                  options={yearOptions}
                  name="year"
                  isInvalid={!!errors.year && submitted}
                />
                <div className="invalid-feedback">{submitted ? errors.year: ''}</div>
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
               <Form.Group className="mb-3" controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={handleChange}
                    isInvalid={!!errors.password2 && submitted}
                  />
<Form.Control.Feedback type="invalid">
                {errors.password2}
              </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => setSubmitted(true)}>
                  Submit
              </Button>
          </Form>
        );
}

export default RegisterPage;


