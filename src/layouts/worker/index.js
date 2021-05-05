import { Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const WorkerLayout = () => {
  return (
    <React.Fragment>
      
            <Row>
                <Header />
            </Row>
            <Row>
                <Outlet />
            </Row>
 
    </React.Fragment>
  );
};

export default WorkerLayout;