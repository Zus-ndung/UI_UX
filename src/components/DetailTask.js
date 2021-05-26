
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, ProgressBar } from '@themesberg/react-bootstrap';
import {Employees} from "../data/listEmployee";
import Select from "react-select";

export const DetailTask = (props) => {
  const [deadline, setDeadline] = useState("");
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      {/* <Card.Header ><h5>Chi tiết quy trình</h5></Card.Header> */}
      <Card.Body>
        <Form>
          <Row>
            <Col xs={12} xl={6}>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="nameWork">
                    <Form.Label>Tên công việc</Form.Label>
                    <Form.Control required type="text" placeholder="Sửa tên công việc" row={2} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group id="describe">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" placeholder="Sửa mô tả công việc" row={10} />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group id="describe">
                    <Form.Label>Thời gian thực hiện</Form.Label>
                    <Form.Control type="number" placeholder="Sửa thời gian (s)" required />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col xs={12} xl={6}>
              <Row>
                <Col className="mb-3">
                  <Form.Group id="firstName">
                    <Form.Label>Người thực hiện</Form.Label>
                    {/* <Form.Control required type="text" placeholder="Nhập tên người thực hiện" /> */}
                    <Select closeMenuOnSelect={true} options={Employees} isMulti placeholder="Người thực hiện" />
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
