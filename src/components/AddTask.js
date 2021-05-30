
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, Table, Modal } from '@themesberg/react-bootstrap';
import { PencilSquare, TrashFill } from "react-bootstrap-icons";

const FormInfo = () => {
  const [deadline, setDeadline] = useState("");
  return (
    <>
      <Form>
        <Row>
          <Col xs={12} xl={6}>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group id="nameWork">
                  <Form.Label>Tên công việc</Form.Label>
                  <Form.Control required type="text" placeholder="Nhập tên công việc" row={2} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group id="describe">
                  <Form.Label>Mô tả</Form.Label>
                  <Form.Control as="textarea" placeholder="Nhập mô tả công việc" row={10} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={6} className="mb-3">
                <Form.Group id="deadline">
                  <Form.Label>Ngày bắt đầu</Form.Label>
                  <Datetime
                    timeFormat={false}
                    onChange={setDeadline}
                    renderInput={(props, openCalendar) => (
                      <InputGroup>
                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                        <Form.Control
                          required
                          type="text"
                          value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                          placeholder="mm/dd/yyyy"
                          onFocus={openCalendar}
                          onChange={() => { }} />
                      </InputGroup>
                    )} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="deadline">
                  <Form.Label>Ngày kết thúc</Form.Label>
                  <Datetime
                    timeFormat={false}
                    onChange={setDeadline}
                    renderInput={(props, openCalendar) => (
                      <InputGroup>
                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                        <Form.Control
                          required
                          type="text"
                          value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                          placeholder="mm/dd/yyyy"
                          onFocus={openCalendar}
                          onChange={() => { }} />
                      </InputGroup>
                    )} />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={6}>
            <h5 className="mb-4"></h5>
            <Row style={{ marginTop: "-25px" }}>
              <Col className="mb-3">
                <Form.Group id="firstName">
                  <Form.Label>Người thực hiện</Form.Label>
                  <Form.Control required type="text" placeholder="Nhập tên người thực hiện" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="lastName">
                  <Form.Label>Người kiểm duyệt</Form.Label>
                  <Form.Control required type="text" placeholder="Nhập tên nguời phê duyệt" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="gender">
                  <Form.Label>Độ ưu tiên</Form.Label>
                  <Form.Select defaultValue="0">
                    <option value="0">Tiêu chuẩn</option>
                    <option value="1">Cao</option>
                    <option value="2">Thấp</option>
                    <option value="2">Trung bình</option>
                    <option value="2">Khẩn cấp</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <Col md={2}>
            <Button variant="success">Thêm mới</Button>
          </Col>
        </Row> */}
      </Form>
    </>
  );
}
export const AddTask = (props) => {
  const [deadline, setDeadline] = useState("");
  console.log(props);
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Thông tin quy trình</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nameWork">
                      <Form.Label>Tên quy trình</Form.Label>
                      <Form.Control required type="text" placeholder="Nhập tên quy trình" row={2} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="describe">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control as="textarea" placeholder="Nhập mô tả quy trình" row={10} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={6} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày bắt đầu</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => { }} />
                          </InputGroup>
                        )} />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày kết thúc</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => { }} />
                          </InputGroup>
                        )} />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Phân định trách nhiệm</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>Người kiểm duyệt</Form.Label>
                      <Form.Control required type="text" placeholder="Nhập tên nguời phê duyệt" />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Header ><h5>Chi tiết quy trình</h5></Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Danh sách công việc</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nameWork">
                      <Form.Label>Tên công việc</Form.Label>
                      <Form.Control required type="text" placeholder="Nhập tên công việc" row={2} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="describe">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control as="textarea" placeholder="Nhập mô tả công việc" row={10} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={6} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày bắt đầu</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => { }} />
                          </InputGroup>
                        )} />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày kết thúc</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={deadline ? moment(deadline).format("MM/DD/YYYY") : ""}
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => { }} />
                          </InputGroup>
                        )} />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} xl={6}>
                <h5 className="mb-4"></h5>
                <Row style={{ marginTop: "50px" }}>
                  <Col className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Người thực hiện</Form.Label>
                      <Form.Control required type="text" placeholder="Nhập tên người thực hiện" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>Người kiểm duyệt</Form.Label>
                      <Form.Control required type="text" placeholder="Nhập tên nguời phê duyệt" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="gender">
                      <Form.Label>Độ ưu tiên</Form.Label>
                      <Form.Select defaultValue="0">
                        <option value="0">Tiêu chuẩn</option>
                        <option value="1">Cao</option>
                        <option value="2">Thấp</option>
                        <option value="2">Trung bình</option>
                        <option value="2">Khẩn cấp</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Button variant="success">Thêm mới</Button>
              </Col>
            </Row>
          </Form>
          <Row className="mt-4">
            <h5 className="mb-3">Các công việc đã tạo trong quy trình</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan="1">STT</th>
                  <th colSpan="1">Tên công việc</th>
                  <th colSpan="2">Mô tả</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="1">1</td>
                  <td colSpan="1">Mark</td>
                  <td colSpan="2">Otto</td>
                  <td>
                    <Button variant="info" onClick={handleShow}><PencilSquare /></Button>
                    <Button variant="danger" style={{ marginLeft: "2%" }}><TrashFill /></Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa công việc</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormInfo/></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleClose}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
