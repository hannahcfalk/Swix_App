import Ticket from '../components/Ticket';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";

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


function Dashboard() {
    const options = [
      { value: 'opening_ball', label: 'Opening Ball' },
      { value: 'down_to_funk', label: 'Down To Funk' },
      { value: 'bpm', label: 'BPM' }
    ]
 const [res, setRes] = useState({});
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/second_market/tickets/");
        setRes(response.data);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div>
            < TransferCheck />
                  <Row>
        <Col>
            <Select placeholder="Find an event" options={options} className="m-1"/>
        </Col>
      </Row>

           {Object.values(res).map((value, index) => {
        return (
          <div key={index}>
                <Row>
        <Col>
                      <Ticket event={value.event.name} price={value.price} url={value.event.url} owner={value.owner} />
</Col>
</Row>

          </div>
        );
      })}



      </div>


  );
}

export default Dashboard;