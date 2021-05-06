import { Container, Form, Row, Col } from "@themesberg/react-bootstrap";
import React from "react";
import "./styles/sidebar.css";
import Countdown, {zeroPad} from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Col xs={4} className="countdown-time">
        {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
      </Col>
    );
  }
};

export default function SideBar(props = {}) {
  return (
    <Container>
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Form.Label>Start</Form.Label>
          <Form.Control type="time" defaultValue="07:00" />
        </Row>
        <Row>
          <Form.Label>End</Form.Label>
          <Form.Control type="time" defaultValue="17:00" />
        </Row>
      </Container>
      <hr />
      <Row className="d-flex justify-content-center align-items-center mt-4">
        <Countdown
          date={Date.now() + 7 * 60 * 60 * 1000}
          renderer={renderer}
          autoStart={true}
        />
      </Row>
      <br />
      <br />
      <Row>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Success
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    checked
                  />
                  <Form.Check
                    type="radio"
                    label="Sensor 2"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
          <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" disabled defaultValue={0} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Target</Form.Label>
                <Form.Control type="text" disabled defaultValue={1000} />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Error
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="sensor"
                    id="sensor"
                    checked
                    disabled
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Error Product Quantity</Form.Label>
                <Form.Control type="text" disabled defaultValue={0} />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
