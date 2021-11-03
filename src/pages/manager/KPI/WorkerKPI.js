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
import {AddKPIForm} from "./AddKPIForm";
import SelectSearch from "react-select-search";
import "../Styles/styles.css";
import {WorkerKPITable} from "./TableListKPI";


const options = [
  { name: "Tháng 1", value: 1 },
  { name: "Tháng 2", value: 2 },
  { name: "Tháng 3", value: 3 },
  { name: "Tháng 4", value: 4 },
  { name: "Tháng 5", value: 5 },
];
const WorkerKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  };
  return (
    <>
      <Row style={{marginTop: "-45px"}}>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div className="d-block mb-md-0">
            <h2>Quản lý KPI công nhân</h2>
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
                    value={5}
                    placeholder="Chọn tháng"
                  />
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
          <WorkerKPITable/>
        </Col>
      </Row>
      {/* <Modal
        as={Modal.Dialog}
        centered
        show={showDefault}
        onHide={handleClose}
        size="xl">
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
            onClick={handleClose}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default WorkerKPI;
