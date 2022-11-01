import Ticket from '../components/Ticket';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MyTickets() {
  return (
    <div>

        <Tabs
          defaultActiveKey="sold"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
            <Tab eventKey="sold" title="Sold">
                <Row>
                    <Col className="p-1">
                        <Ticket event="Fright Night" price="8.00" url="blah.com" status="SOLD"/>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="pending_sale" title="Pending Sale">
                <Row>
                    <Col className="p-1">
                        <Ticket event="80s Bop" price="5.00" url="blah.com" status="PENDING SALE"/>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="bought" title="Bought">
                <Row>
                    <Col className="p-1">
                        <Ticket event="Sinners" price="2.00" url="blah.com" status="BOUGHT"/>
                    </Col>
                </Row>
            </Tab>
        </Tabs>

    </div>
  );
}

export default MyTickets;