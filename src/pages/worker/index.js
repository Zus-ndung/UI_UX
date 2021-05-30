import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/Sidebar";

export default function WorkerDashBorad(props = {}) {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <Row>
        {show ? (
          <Col xs={12} xl={12}>
            <SideBar />
          </Col>
        ) : (
          <Col xs={12} xl={12}>
            <Container>
              <DashBoard
                onShow={() => setShow(true)}
                onClose={() => setShow(false)}
              />
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  );
}
