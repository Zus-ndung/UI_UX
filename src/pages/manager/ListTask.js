import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Modal, Card, Nav, Pagination,DropdownButton } from '@themesberg/react-bootstrap';
import {AddTask,AddTaskEmpty} from "../../components/AddTask";
import {TasksTable} from "../../components/Tables2";


export const ListTasks = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  }
  const [showDefault2, setShowDefault2] = useState(false);
  const handleClose2 = () => setShowDefault2(false);
  const showModelAddTaskEmpty = () => {
    setShowDefault2(true);
  }
  return (
    <>
      <Row style={{marginTop: "-45px"}}>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div >
            <div className="d-block mb-md-0">
              <h2>Thông tin danh sách các quy trình </h2>
            </div>
          </div>
          <Card className="mt-4">
            <Card.Header>
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
                  <Col md={2}></Col>
                  <Col md={3} className="ps-md-0 text-end">
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <ButtonGroup style={{ marginLeft: 10 }}>
                        <Button variant="outline-primary" size="sm" onClick={showModelAddTaskEmpty}>Thêm Mới</Button>
                        {/* <Button variant="outline-primary" size="sm" onClick={showModelAddTask}>Thêm theo mẫu</Button> */}
                        <DropdownButton title="Thêm theo mẫu" as={ButtonGroup} variant="outline-primary">
                          <Dropdown.Item onClick={showModelAddTask}><strong>Mẫu may sơ mi</strong></Dropdown.Item>
                          <Dropdown.Item onClick={showModelAddTask}><strong>Mẫu may Vest</strong></Dropdown.Item>
                          <Dropdown.Item onClick={showModelAddTask}><strong>Mẫu may áo phông</strong></Dropdown.Item>
                        </DropdownButton>
                      </ButtonGroup>
                      
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Header>
          <Card.Body>
            <TasksTable/>
          </Card.Body>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                  <Pagination className="mb-2 mb-lg-0">
                      <Pagination.Prev>
                          Trước
                      </Pagination.Prev>
                      <Pagination.Item active>1</Pagination.Item>
                      <Pagination.Item>2</Pagination.Item>
                      <Pagination.Next>
                          Tiếp
                      </Pagination.Next>
                  </Pagination>
              </Nav>
          </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới quy trình</Modal.Title>
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
      <Modal as={Modal.Dialog} centered show={showDefault2} onHide={handleClose2} size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới quy trình</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose2} />
        </Modal.Header>
        <Modal.Body>
          <AddTaskEmpty/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Lưu
      </Button>
          <Button variant="link" className="text-gray ms-auto" onClick={handleClose2}>
            Hủy
      </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ListTasks;