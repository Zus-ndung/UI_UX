
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, ProgressBar } from '@themesberg/react-bootstrap';

export const DetailKPI = (props) => {
  const [deadline, setDeadline] = useState("");
  console.log(props);
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>

        <Form>
          <Row>
            <Col xs={12} xl={6}>
              <h5 className="mb-4">Thông tin công việc</h5>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="nameWork">
                    <Form.Label>Tên công việc</Form.Label>
                    <Form.Control required type="text" placeholder="Nhập tên công việc"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="describe">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control required type="text" placeholder="Nhập mô tả công việc" />
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
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="gender" style={{marginBottom: "10px"}}>
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Select defaultValue="1">
                      <option value="1">Đang thực hiện</option>
                      <option value="0">Đã hoàn thành</option>
                      <option value="2">Quá hạn</option>
                    </Form.Select>
                  </Form.Group>
                  <ProgressBar now={60} variant='success' label={`${60}%`} style={{height:"10px"}}></ProgressBar>
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
            <Col xs={12} xl={6}>
              <h5 className="mb-4">Phân định trách nhiệm</h5>
              <Row>
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
              </Row>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
