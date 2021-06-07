import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Table,
  Modal,
} from "@themesberg/react-bootstrap";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import Select from "react-select";
import { Employees, listTaskOfProcess } from "../data/listEmployee";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactTable from "react-table";
import { workList, ListWorkMonth } from "../data/workList";

export const DetailWorker = (props) => {
  const [deadline, setDeadline] = useState("");
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } =
    props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        {/* <Card.Header ><h5>Chi tiết quy trình</h5></Card.Header> */}
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Chỉnh sửa thông tin công nhân</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nameWork">
                      <Form.Label>Tên công nhân</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên công nhân"
                        row={2}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="describe">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập số điện thoại"
                        row={2}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group id="describe">
                      <Form.Label>CMT/CCCD</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập CMT/CCCD"
                        required
                        row={2}
                      />
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
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên người thực hiện"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={12} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày tháng năm sinh</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={
                                deadline
                                  ? moment(deadline).format("MM/DD/YYYY")
                                  : ""
                              }
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => {}}
                            />
                          </InputGroup>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const TableComponent = (props = {}) => {
  return (
    <Table striped bordered hover size="lg" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên Công Việc</th>
          <th>Trọng số công việc</th>
          <th>Số lượng sản phẩm yêu cầu</th>
          <th>Số lượng đã làm</th>
          <th>Hiệu xuất quay đổi</th>
        </tr>
      </thead>
      <tbody>
        {ListWorkMonth.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.ts}</td>
              <td>{item.target}</td>
              <td>{item.dl}</td>
              <td>
                {Number.parseInt((item.dl / item.target) * item.ts * 100)} %
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export const DetailEditWorker = (props) => {
  const [deadline, setDeadline] = useState("");
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } =
    props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        {/* <Card.Header ><h5>Chi tiết quy trình</h5></Card.Header> */}
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Chỉnh sửa thông tin công nhân</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nameWork">
                      <Form.Label>Tên công nhân</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên công nhân"
                        row={2}
                        defaultValue="Nguyễn Văn A"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="describe">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập số điện thoại"
                        row={2}
                        defaultValue={"0123456789"}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group id="describe">
                      <Form.Label>CMT/CCCD</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập CMT/CCCD"
                        required
                        row={2}
                        defaultValue={"0380123625458"}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} xl={6}>
                <h5 className="mb-4"></h5>
                <Row style={{ marginTop: "50px" }}>
                  <Col className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Địa chỉ thường trú</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nhập tên người thực hiện"
                        defaultValue={"Hoằng Đạt- Hoằng Hóa - Thanh Hóa"}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={12} className="mb-3">
                    <Form.Group id="deadline">
                      <Form.Label>Ngày tháng năm sinh</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setDeadline}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={
                                deadline
                                  ? moment(deadline).format("MM/DD/YYYY")
                                  : "31/01/1999"
                              }
                              placeholder="mm/dd/yyyy"
                              onFocus={openCalendar}
                              onChange={() => {}}
                            />
                          </InputGroup>
                        )}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
          <br />
          <hr />
          <br />
          <Row>
            <Row>
              <Col xs={2}>
                <Form.Select aria-label="Default select example">
                  <option value="1">Tháng 1</option>
                  <option value="2">Tháng 2</option>
                  <option value="3">Tháng 3</option>
                  <option value="4" selected>
                    Tháng 4
                  </option>
                  <option value="5">Tháng 5</option>
                  <option value="6">Tháng 6</option>
                  <option value="7">Tháng 7</option>
                  <option value="8">Tháng 8</option>
                  <option value="9">Tháng 9</option>
                  <option value="10">Tháng 10</option>
                  <option value="11">Tháng 11</option>
                  <option value="12">Tháng 12</option>
                </Form.Select>
              </Col>
            </Row>
            <br />
            <br />
            <TableComponent />
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
