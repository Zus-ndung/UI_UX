import { Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/Sidebar";

export default function WorkerDashBorad(props = {}) {
  return (
    <Container>
      <Row>
        <Col xs={8} xl={8}>
          <Container>
            <DashBoard />
          </Container>
        </Col>
        <Col xs={4} xl={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}
