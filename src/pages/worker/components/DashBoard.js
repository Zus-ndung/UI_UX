import {
  Card,
  Container,
  Form,
  Image,
  Row,
  Tab,
  Tabs,
  Col,
  ListGroup,
  Button,
} from "@themesberg/react-bootstrap";
import React from "react";
import Profile3 from "../../../assets/img/team/download.jpeg";

const DashBoardComponent = (props = {}) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
              <Form.Label>Line</Form.Label>
              <Form.Control as="select" size="lg" custom>
                <option>Line 1</option>
                <option>Line 2</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <h4>Cong Viec Hom Nay</h4>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={8}>{"San Pham: Co Ao"}</Col>
                <Col xs={4}>{"So Luong: 1000"}</Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row className="d-flex justify-content-center align-items-center">
            <Button variant="primary" size="lg" style={{maxWidth: "20%"}}>
              Start
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

const UserInfo = (props = {}) => {
  return (
    <Container>
      <Card>
        <Card.Header>Worker Info</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <Image src={Profile3} rounded />
            </Col>
            <Col xs={9}>
              <ListGroup variant="flush">
                <ListGroup.Item>Full Name: Nguyen Thi Minh Anh</ListGroup.Item>
                <ListGroup.Item>Date of Birth: 31/01/1999</ListGroup.Item>
                <ListGroup.Item>Phone Number: 0123456745</ListGroup.Item>
                <ListGroup.Item>CCCD: 0987665433232</ListGroup.Item>
                <ListGroup.Item>
                  Address: Hoang Dat - Hoang Hoa - Thanh Hoa
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Contact the department manager when you want to change the information
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default function DashBoard(props = {}) {
  const [key, setKey] = React.useState("contact");
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="contact" title="Dashboard">
            <br />
            <br />
            <DashBoardComponent />
          </Tab>
          {/* <Tab eventKey="product" title="Products">
            <br />
            <br />2
          </Tab> */}
          <Tab eventKey="worker" title="Worker">
            <br />
            <br />
            <UserInfo />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
