import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Modal } from '@themesberg/react-bootstrap';
import { ListKPITable } from "../../components/Tables";
import {AddTask} from "../../components/AddTask";

const ListKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  }
  return (
    <>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              <h3>Danh sách KPI</h3>
            </div>
          </div>
          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Tìm kiếm" />
                </InputGroup>
              </Col>
              <Col md={3}></Col>
              <Col md={2} className="ps-md-0 text-end">
                <div className="btn-toolbar mb-2 mb-md-0">
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                      <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                      <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                      <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                      </Dropdown.Item>
                      <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                      <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <ButtonGroup style={{ marginLeft: 10 }}>
                    <Button variant="outline-primary" size="sm" onClick={showModelAddTask}>Thêm Mới</Button>
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </div>
          <ListKPITable />
        </Col>
      </Row>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddTask/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lưu
      </Button>
          <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
            Hủy
      </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ListKPI;