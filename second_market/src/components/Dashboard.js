import Ticket from './Ticket';
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
  return (
      <div>
      <NavBar />
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
}

export default Dashboard;