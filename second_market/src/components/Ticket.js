import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TicketList(props) {
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
            <Card className="border-dark m-1" onClick={handleShowBuyModal}>
                <Card.Body className="text-center">
                    <Card.Title>{props.event}</Card.Title>
                    <Card.Subtitle className="mb-2">{'\u00A3'}{props.price}</Card.Subtitle>
                    <Card.Link href="#">{props.url}</Card.Link>
                    <Card.Text className="mb-2 text-muted">Seller: {props.owner}</Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showRevealModal} onHide={handleCloseRevealModal}>
                <Card className="text-center">
                    <Card.Header>Opening Ball</Card.Header>
                    <Card.Link>
                        www.fixr.link
                    </Card.Link>
                </Card>
            </Modal>

            <Modal show={showBuyModal} onHide={handleCloseBuyModal}>
                <Card className="text-center">
                    <Card.Header>Opening Ball</Card.Header>
                      <Card.Body>
                        <Button variant="primary" onClick={handleShowRevealModal}>Buy for {'\u00A3'}{props.price}</Button>
                      </Card.Body>
                </Card>
            </Modal>
        </div>
	);
}

function MyBoughtTicketList(props) {
	return (
        <Card className="border-dark m-1">
            <Card.Body className="text-center">
                <Card.Title>{props.event}</Card.Title>
                <Card.Subtitle className="mb-2">{'\u00A3'}{props.price}</Card.Subtitle>
                <Card.Link href="#">{props.url}</Card.Link>
                <Card.Text className="mb-2 text-danger" >{props.status}</Card.Text>
                <Card.Text>FIXR LINK: <Card.Link href="#">{props.fixr}</Card.Link></Card.Text>
            </Card.Body>
        </Card>
	);
}

function MyTicketList(props) {
	return (
        <Card className="border-dark m-1">
            <Card.Body className="text-center">
                <Card.Title>{props.event}</Card.Title>
                <Card.Subtitle className="mb-2">{'\u00A3'}{props.price}</Card.Subtitle>
                <Card.Link href="#">{props.url}</Card.Link>
                <Card.Text className="mb-2 text-danger" >{props.status}</Card.Text>
            </Card.Body>
        </Card>
	);
}

function Ticket(props) {
    const owner = props.owner;
    if (owner !== undefined) {
        return (
        <TicketList {...props}/>
        );
    }
    else if (props.status === "BOUGHT") {
        return (
            <MyBoughtTicketList {...props}/>
        );
    }
    return (
        <MyTicketList {...props}/>
    );
}

export default Ticket;