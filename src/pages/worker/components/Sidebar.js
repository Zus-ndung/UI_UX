import { Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import TimeInput from "react-time-input";

export default function SideBar(props = {}) {
  return (
    <Container>
      <Row>
        <TimeInput
          initTime="11:12"
          className="form-control"
          mountFocus="true"
        />
      </Row>
      <Row></Row>
    </Container>
  );
}
