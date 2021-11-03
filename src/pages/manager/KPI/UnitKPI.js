import React, { useState } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Modal,
  Container,
  Card,
} from "@themesberg/react-bootstrap";
import { AddKPIForm } from "./AddKPIForm";
import SelectSearch from "react-select-search";
import "../Styles/styles.css";
import UnitKPITable from "./TableListKPI";
import KpiLineChart from "./components/KpiLineChart";

const options = [
  { name: "Tháng 1", value: 1 },
  { name: "Tháng 2", value: 2 },
  { name: "Tháng 3", value: 3 },
  { name: "Tháng 4", value: 4 },
  { name: "Tháng 5", value: 5 },
];
const Units = [
  { name: "Tổ 1", value: 1 },
  { name: "Tổ 2", value: 2 },
  { name: "Tổ 3", value: 3 },
  { name: "Tổ 4", value: 4 },
  { name: "Tổ 5", value: 5, selected: true },
];
const UnitKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const [moth, setMoth] = React.useState(4);
  const showModelAddTask = () => {
    setShowDefault(true);
  };
  const [unit,setUnit] = useState(1);
  return (
    <>
      <Row style={{ marginTop: "-45px" }}>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div className="d-block mb-md-0">
            <h2>Quản lý KPI đơn vị</h2>
          </div>
          <br />
          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col md={2}>
                <div className="d-flex" style={{ alignItems: "baseline" }}>
                  {/* <h6 style={{marginRight: "5%"}}>Tháng</h6> */}
                  <SelectSearch
                    options={options}
                    search
                    value={moth}
                    placeholder="Chọn tháng"
                    onChange={setMoth}
                  />
                </div>
              </Col>
              <Col md={3}></Col>
              <Col
                md={2}
                className="ps-md-0 text-end"
                style={{ textAlign: "left" }}
              >
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={showModelAddTask}
                    className="ml-10"
                  >
                    Thêm Mới
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </div>
          <UnitKPITable />
          <br />
          <Row>
            <Card style={{width: "98%",marginLeft: "1%"}}>
              <Card.Header> 
                <h4>Thống kê hiệu suất công nhân theo tháng</h4>
                <br/>
                <Row>
                  <Col md={2}>
                    <div className="d-flex" style={{ alignItems: "baseline" }}>
                      <SelectSearch
                        options={Units}
                        value={unit}
                        onChange={setUnit}
                      />
                    </div>
                  </Col>
                </Row>
                <br/>
              </Card.Header>
              <Card.Body>
                <KpiLineChart thangs={moth} unit={unit}/>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefault}
        onHide={handleClose}
        size="xl"
      >
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddKPIForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lưu
          </Button>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose}
          >
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UnitKPI;
