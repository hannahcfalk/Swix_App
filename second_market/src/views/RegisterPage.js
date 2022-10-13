import React, { useState, useContext } from 'react';
import {Modal, Button, Row, Col, Form, Container} from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import DatePicker from "react-datepicker";
import AuthContext from "../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
 import { Formik } from 'formik';
import * as Yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';
import MySelect from '../components/MySelect';

const schema = Yup.object().shape({
         username: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       email: Yup.string().required('Required'),
       gender: Yup.string().required('Required'),
       year: Yup.string().required('Required'),
       course: Yup.string().required('Required'),
       password: Yup.string().required("This field is required"),
       password2: Yup.string().required("This field is required"),
});


const RegisterPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setBirthday] = useState(new Date());
    const [selectedGender, setGender] = useState("");
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

     
  const handleGenderChange = (selectedGender, values) => {
    values.gender= selectedGender.value;
    setGender(selectedGender);
  };

     //const handleSubmit = async (e) => {
       // e.preventDefault();
        //registerUser(username, email, dob.toISOString().split('T')[0], gender['value'], year['value'], course['value'], password, password2);
    // };

    return (
            <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
       username: '',
       email: '',
       dob: '',
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
        setFieldTouched,
      }) => (
          <Form className="m-1" noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                      type="text" 
                      name="username"
                      placeholder="Choose a username"
                      onChange={handleChange}
                      isValid={touched.username && !errors.username}
                  />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>
              <Form.Group className="mb-3" controlId="validationFormik02">
                  <Form.Label>Email</Form.Label>
                        <InputGroup className="mb-3">
                  <Form.Control
                      type="text" 
                      name="email"
                      placeholder="Email code e.g. ab12"
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                  />
        <InputGroup.Text id="basic-addon2">@st-andrews.ac.uk</InputGroup.Text>
      </InputGroup>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationFormikGender">
                  <Form.Label>Gender</Form.Label>
                  <Select
                  placeholder="Gender"
                  value={selectedGender}
                  onChange={selectedOption => {
                    handleGenderChange(selectedOption);
                    handleChange("gender");
                  }}
                  isSearchable={true}
                  options={genderOptions}
                  name="gender"
                />
                {errors.year}
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationFormikYear">
                  <Form.Label>Year</Form.Label>
                  <InputGroup hasValidation>
                  <Select
                    defaultValue={[null]}
                    options={yearOptions}
                    value={values.year}
                    onChange={handleChange}
                    isInvalid={!!errors.year}
                  />
                   <Form.Control.Feedback type="invalid">
                  {errors.year}

                </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationFormikCourse">
                  <Form.Label>Course</Form.Label>
                   <InputGroup hasValidation>
                  <Select
                    defaultValue={[null]}
                    options={courseOptions}
                    value={values.course}
                    onChange={handleChange}
                    isInvalid={!!errors.course}
                  />
                   <Form.Control.Feedback type="invalid">
                  {errors.course}

                </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormikPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
<Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              </Form.Group>
               <Form.Group className="mb-3" controlId="validationFormikPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={handleChange}
                    isInvalid={!!errors.password2}
                  />
<Form.Control.Feedback type="invalid">
                {errors.password2}
              </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
    )}
    </Formik>
        );
}

export default RegisterPage;


