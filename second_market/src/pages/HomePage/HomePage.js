import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Ticket from '../../components/Ticket';
import NavBar from '../../components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';

function TransferCheck() {
    const [show, setShow] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleYes = () => setShow(false);
    const handleNo = () => {
        setShow(false);
        setShowConfirmation(true);
    }
    const handleCloseConfirmationYes = () => setShowConfirmation(false);

    const handleCloseConfirmationNo = () => {
        setShowConfirmation(false);
        setShow(true);
    }

    const unverifiedTransfer = true;
    if (unverifiedTransfer) {
        return (
                <div>
                 <Toast style={{ width: '100%'}} show={show} className="m-3 bg-danger">
                      <Toast.Header closeButton={false}>
                        <strong className="me-auto">Unverified Transfer</strong>
                        <small>11 mins ago</small>
                      </Toast.Header>
                  <Toast.Body>
                    <Row>
                        <h4>Were you able to successfully get your ticket transferred? If not we will process a refund</h4>
                        <small>(please note that we have methods of verifying whether the ticket was successfully transferred so please be honest)</small>
                    </Row>
                    <Row>
                        <ButtonGroup>
                      <Button variant="secondary" className="m-1" onClick={handleYes}>Yes</Button>
                      <Button variant="secondary" className="m-1" onClick={handleNo}>No</Button>
                    </ButtonGroup>
                    </Row>
                    </Toast.Body>
                </Toast>
                <Modal show={showConfirmation}>
                    <Card className="text-center">
                        <Card.Header>Are you sure?</Card.Header>
                          <Card.Body>
                            <Card.Text>We are able to verify this and if you falsely claim you didn't receive the ticket to get a refund, you will be banned from the platform</Card.Text>
                            <Button className="m-2" variant="primary" onClick={handleCloseConfirmationYes}>Yes</Button>
                            <Button className="m-2" variant="primary" onClick={handleCloseConfirmationNo}>No</Button>
                          </Card.Body>
                    </Card>
                </Modal>
                </div>
        );
    }
}

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  const options = [
      { value: 'opening_ball', label: 'Opening Ball' },
      { value: 'down_to_funk', label: 'Down To Funk' },
      { value: 'bpm', label: 'BPM' }
    ]

  return (
   <div>
      < TransferCheck />
      <NavBar />
      <Row>
        <Col>
            <Select placeholder="Find an event" options={options} className="m-1"/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Ticket event="Opening Ball" price="45.00" url="blah.com" owner="hannah"/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Ticket event="Opening Ball" price="45.00" url="blah.com" owner="hannah"/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Ticket event="Opening Ball" price="45.00" url="blah.com" owner="hannah"/>
        </Col>
      </Row>
      </div>
  );
};

export default HomePage;
