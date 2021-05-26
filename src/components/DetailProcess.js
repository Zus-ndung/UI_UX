import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, Table, Modal } from '@themesberg/react-bootstrap';
import Select from "react-select";
import { Employees,listTaskOfProcess } from "../data/listEmployee";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";

export const DetailProcess = () =>{
    const [deadline, setDeadline] = useState("");
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
                                {/* <Form.Control required type="text" placeholder="Nhập tên nguời phê duyệt" /> */}
                            </Form.Group>
                            <Select closeMenuOnSelect={true} options={Employees} isMulti placeholder="Nhập người phê duyệt" />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={6}>
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
                            <Col md={6}>
                                <Form.Group id="gender">
                                    <Form.Label>Số lượng sản phẩm</Form.Label>
                                    <Form.Control type="number" placeholder="Sửa số lượng"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    </Form>
                </Card.Body>
            </Card>
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Header ><h5>Chỉnh sửa thứ tự công việc</h5></Card.Header>
                <Card.Body>
                <Row className="mt-4">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Mô tả</th>
                            <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listTaskOfProcess.map(({ id, name, descrip }, index) => {
                            return (
                                <tr>
                                    <td >{id}</td>
                                    <td >{name}</td>
                                    <td >{descrip}</td>
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
                <Modal.Title>Chỉnh sửa công việc</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
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
}
export default DetailProcess;