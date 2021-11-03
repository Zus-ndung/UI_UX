
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, Table, Modal ,ProgressBar } from '@themesberg/react-bootstrap';
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import Select from "react-select";
import { Employees, listTaskOfProcess } from "../../../data/listEmployee";
import {WorkerKPITargets} from "../../../data/kpi";
import {ListTaskConnectedToKPIWorker} from "../../../data/kpi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactTable from "react-table";

const FormInfo = () => {
  return (
    <>
    <Table striped bordered hover size="sm">
        <thead>
        <tr>
            <th>STT</th>
            <th>Công việc</th>
            <th className="text-center">% Đóng góp</th>
            <th className="text-center">Trọng số</th>
            <th>Tiến độ thực hiện</th>
            <th className="text-center">Điểm số</th>
        </tr>
        </thead>
        <tbody>
        {ListTaskConnectedToKPIWorker.map(({ id,key,name,donggop,tiendo }, index) => {
            return (
            <tr>
                <td >{id}</td>
                <td >{name}</td>
                <td className="text-center">{donggop} %</td>
                <td className="text-center">{key}</td>
                <td><ProgressBar style={{height:"12px"}} variant="success" now={tiendo} label={`${tiendo}%`}/></td>
                <td className="text-center">0</td>
            </tr>
            );
        })}
        </tbody>
    </Table>
    </>
  );
}
const DragDropArea = () => {
  const handleShow = () => {

  }
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="listTaskOfProcess">
          {(provided) =>
            <tbody className="listTaskOfProcess" {...provided.droppableProps} ref={provided.innerRef}>
              {listTaskOfProcess.map(({ id, name, descrip }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) =>
                      <tr>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <td >{id}</td>
                          <td >{name}</td>
                          <td >{descrip}</td>
                          <td>                        <Button variant="info" onClick={() => handleShow()}><PencilSquare /></Button>
                            <Button variant="danger" style={{ marginLeft: "2%" }}><TrashFill /></Button>
                          </td>
                        </div>
                      </tr>
                    }
                  </Draggable>
                );
              })}
            </tbody>
          }
        </Droppable>
      </DragDropContext>
    </>
  );
}
const CardProcess = () => {
  const [deadline, setDeadline] = useState("");
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={6}>
                <h5 className="mb-4">Thông tin Chung</h5>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="describe">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control as="textarea" placeholder="Nhập mô tả" row={10} />
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
                    </Form.Group>
                    <Select closeMenuOnSelect={true} options={Employees} isMulti placeholder="Nhập người phê duyệt" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

  );
}

export const DetailForWorkKPI = (props) => {
  const [deadline, setDeadline] = useState("");
  const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CardProcess></CardProcess>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Header >
            <span style={{fontSize: "20px",color:"#424242",fontWeight:"bold",marginRight:"1%"}}>Các mục tiêu</span>
            {/* <span 
              style={{cursor: "pointer"}} 
              onClick={() =>{
                  console.log("okokok");
              }}
              
            >
            <FontAwesomeIcon icon={faQuestion} /></span> */}
        </Card.Header>
        <Card.Body>
          <Row className="mt-4">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Mô tả</th>
                  <th>Trọng số</th>
                  <th>Điểm số</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {WorkerKPITargets.map(({ id, name, descrip,key }, index) => {
                  return (
                    <tr>
                      <td >{id}</td>
                      <td >{name}</td>
                      <td >{descrip}</td>
                      <td>{key}</td>
                      <td>0</td>
                      <td>
                        <Button variant="info" onClick={handleShow}><PencilSquare /></Button>
                        {/* <Button variant="danger" style={{ marginLeft: "2%" }}><TrashFill /></Button> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin mục tiêu</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormInfo /></Modal.Body>
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
