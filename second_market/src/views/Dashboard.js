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
import sinnerssaints from './images/sinnerssaints.jpg';


function Dashboard() {
    const [showBuyModal, setShowBuyModal] = useState(false);
    const [showRevealModal, setShowRevealModal] = useState(false);

    const handleCloseBuyModal = () => setShowBuyModal(false);
    const handleShowBuyModal = () => setShowBuyModal(true);
    
    const handleCloseRevealModal = () => setShowRevealModal(false);
    const handleShowRevealModal = () => {
        setShowBuyModal(false);
        setShowRevealModal(true);
    }

  return (
      <div>
           <h2>Welcome Hannah!</h2>
       <Container>
      <Row>
        <Col><h3 className="text-center m-2">November 2022</h3></Col>
      </Row>
      <Row className="p-1"> 
        <Col>
         <Card style={{ opacity: 0.5, }} border="secondary" className="h-100">
        <Card.Header>31 - Halloween</Card.Header>
        <Card.Body>
          <Card.Text>
            <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(78, 165, 32, 0.3)', }}>Fright Night</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
            <Card border="secondary" className="h-100">
        <Card.Header>1</Card.Header>
        <Card.Body>
          <Card.Text>
              <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>2</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(199, 0, 255, 0.3)', }} onClick={handleShowBuyModal}>Sinners</Card>
          </Card.Text>
        </Card.Body>

               <Modal show={showRevealModal} onHide={handleCloseRevealModal}>
                <Card className="text-center">
                    <Card.Header><h3>Sinners</h3> (2nd November 2022)</Card.Header>
                    <Card.Text>
                        Thanks for purchasing your sinners ticket, it will be available in your tickets page
                    </Card.Text>
                </Card>
            </Modal>

            <Modal show={showBuyModal} onHide={handleCloseBuyModal}>
                 <Card className="text-center">
                  <Card.Img variant="top" src={sinnerssaints} />
                  <Card.Body>
                    <Card.Title>Sinners</Card.Title>
                    <Card.Text>
                      Sinners is the St Andrews night out for sports teams!
                    </Card.Text>
                    <Button variant="primary" onClick={handleShowRevealModal}>Buy for {'\u00A3'}2</Button>
                  </Card.Body>
                </Card>
            </Modal>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>3</Card.Header>
        <Card.Body>
          <Card.Text>
                     <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>4</Card.Header>
        <Card.Body>
          <Card.Text>
              <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>Bop</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>5 - Bonfire Night</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(238, 147, 35, 0.3)', }}>Bonfire Party</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>6</Card.Header>
        <Card.Body>
          <Card.Text>
                    <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(35, 238, 235, 0.3)', }}>Pub Quiz</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
        <Row className="p-1">
        <Col>
         <Card border="secondary" className="h-100">
        <Card.Header>7</Card.Header>
        <Card.Body>
          <Card.Text>
               <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
            <Card border="secondary" className="h-100">
        <Card.Header>8</Card.Header>
        <Card.Body>
          <Card.Text>
              <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>9</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(199, 0, 255, 0.3)', }}>Sinners</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>10</Card.Header>
        <Card.Body>
          <Card.Text>
                <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(100, 0, 100, 0.3)', }}>Karaoke Night</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>11</Card.Header>
        <Card.Body>
          <Card.Text>
              <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>Bop</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>12</Card.Header>
        <Card.Body>
          <Card.Text>
             <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>13</Card.Header>
        <Card.Body>
          <Card.Text>
          <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(35, 238, 235, 0.3)', }}>Pub Quiz</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
        <Row className="p-1">
        <Col>
         <Card border="secondary" className="h-100">
        <Card.Header>14</Card.Header>
        <Card.Body>
          <Card.Text>
               <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
            <Card border="secondary" className="h-100">
        <Card.Header>15</Card.Header>
        <Card.Body>
          <Card.Text>
              <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>16</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(199, 0, 255, 0.3)', }}>Sinners</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>17</Card.Header>
        <Card.Body>
          <Card.Text>
                <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>18</Card.Header>
        <Card.Body>
          <Card.Text>
              <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>Bop</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>19</Card.Header>
        <Card.Body>
          <Card.Text>
             <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>20</Card.Header>
        <Card.Body>
          <Card.Text>
          <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(35, 238, 235, 0.3)', }}>Pub Quiz</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
 <Row className="p-1">
        <Col>
         <Card border="secondary" className="h-100">
        <Card.Header>21</Card.Header>
        <Card.Body>
          <Card.Text>
               <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
            <Card border="secondary" className="h-100">
        <Card.Header>22</Card.Header>
        <Card.Body>
          <Card.Text>
              <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>23</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(199, 0, 255, 0.3)', }}>Sinners</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>24</Card.Header>
        <Card.Body>
          <Card.Text>
                <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>25</Card.Header>
        <Card.Body>
          <Card.Text>
              <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>Bop</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>26</Card.Header>
        <Card.Body>
          <Card.Text>
             <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>27</Card.Header>
        <Card.Body>
          <Card.Text>
          <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(35, 238, 235, 0.3)', }}>Pub Quiz</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
 <Row className="p-1">
        <Col>
         <Card border="secondary" className="h-100">
        <Card.Header>28</Card.Header>
        <Card.Body>
          <Card.Text>
               <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
            <Card border="secondary" className="h-100">
        <Card.Header>29</Card.Header>
        <Card.Body>
          <Card.Text>
              <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card border="secondary" className="h-100">
        <Card.Header>30</Card.Header>
        <Card.Body>
          <Card.Text>
             <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(199, 0, 255, 0.3)', }}>Sinners</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card style={{ opacity: 0.5, }} border="secondary" className="h-100">
        <Card.Header>1</Card.Header>
        <Card.Body>
          <Card.Text>
                    <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(245, 29, 81, 0.3)', }}>December Party</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card style={{ opacity: 0.5, }} border="secondary" className="h-100">
        <Card.Header>2</Card.Header>
        <Card.Body>
          <Card.Text>
              <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>Bop</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card style={{ opacity: 0.5, }} border="secondary" className="h-100">
        <Card.Header>3</Card.Header>
        <Card.Body>
          <Card.Text>
             <p>No events</p>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
              <Card style={{ opacity: 0.5, }} border="secondary" className="h-100">
        <Card.Header>4</Card.Header>
        <Card.Body>
          <Card.Text>
          <Card className="m-1 p-1" style={{ backgroundColor: 'rgba(35, 238, 235, 0.3)', }}>Pub Quiz</Card>
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>


  );
}

export default Dashboard;