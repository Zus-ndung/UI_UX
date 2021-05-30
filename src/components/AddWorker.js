
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, Table, Modal } from '@themesberg/react-bootstrap';
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import Select from "react-select";
import { Employees, listTaskOfProcess } from "../data/listEmployee";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactTable from "react-table";

  
export const AddWorker = (props) => {
    const [deadline, setDeadline] = useState("");
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
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
                  <h5 className="mb-4">Điền thông tin công nhân</h5>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group id="nameWork">
                        <Form.Label>Tên công nhân</Form.Label>
                        <Form.Control required type="text" placeholder="Nhập tên công nhân" row={2} />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group id="describe">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control required type="text" placeholder="Nhập số điện thoại" row={2} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group id="describe">
                        <Form.Label>CMT/CCCD</Form.Label>
                        <Form.Control type="text" placeholder="Nhập CMT/CCCD" required row={2}/>
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
                  <Row className="align-items-center">
                    <Col md={12} className="mb-3">
                      <Form.Group id="deadline">
                        <Form.Label>Ngày tháng năm sinh</Form.Label>
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
              </Row>
              <Row>
                <Col md={2} className="mt-2">
                  <Button variant="success">Thêm mới</Button>
                </Col>
              </Row>
            </Form>
            
          </Card.Body>
        </Card>
      </>
    );
  };
  