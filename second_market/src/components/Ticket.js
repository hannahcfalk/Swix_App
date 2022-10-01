import Card from 'react-bootstrap/Card';

function Ticket(props) {
  return (
    <Card className="border-dark m-1">
      <Card.Body className="text-center">
        <Card.Title>{props.event}</Card.Title>
        <Card.Subtitle className="mb-2">{'\u00A3'}{props.price}</Card.Subtitle>
        <Card.Link href="#">Event: {props.url}</Card.Link>
        <Card.Text className="mb-2 text-muted">{props.owner}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Ticket;