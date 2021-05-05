import { Card, Tab, Tabs } from "@themesberg/react-bootstrap";
import React from "react";
export default function DashBoard(props = {}) {
  const [key, setKey] = React.useState("contact");
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="contact" title="Dashboard">
            <br />
            <br />1
          </Tab>
          <Tab eventKey="product" title="Products">
            <br />
            <br />
            2
          </Tab>
          <Tab eventKey="worker" title="Worker">
            <br />
            <br />
            3
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
