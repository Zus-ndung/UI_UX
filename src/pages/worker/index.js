import { Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import DashBoard from "./components/DashBoard";

export default function WorkerDashBorad (props = {}){
    return (
        <Container>
           <Row>
               <Col xs={8} xl={8}>
                   <Container>
                        <DashBoard />
                   </Container>
               </Col>
               <Col xs={4} xl={4}>
                   2
               </Col>
           </Row>
        </Container>
    );
}