import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/Sidebar";

export default function WorkerDashBorad() {
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
                onClose={() => setShow(false)}
                onShow={() => setShow(true)}
              />
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  );
}
