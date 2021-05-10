import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/Sidebar";

export default function WorkerDashBorad(props = {}) {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <Row>
        <Col xs={show ? 8 : 12} xl={show ? 8 : 12}>
          <Container>
            <DashBoard
              onShow={() => setShow(true)}
              onClose={() => setShow(false)}
            />
          </Container>
        </Col>
        {show ? (
          <Col xs={4} xl={4}>
            <SideBar />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
}
