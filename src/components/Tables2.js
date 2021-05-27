import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEye, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import {
    Col,
    Row,
    Nav,
    Card,
    Button,
    Table,
    Dropdown,
    Pagination,
    ButtonGroup,
    Modal,
} from "@themesberg/react-bootstrap";
import { Accordion, ListGroup } from "@themesberg/react-bootstrap";

import transactions from "../data/transactions";
import { DetailTask } from "./DetailTask";
import { DetailProcess} from "./DetailProcess";

export const ListTaskTable = () => {

    const [showDefault, setShowDefault] = useState(false);
    const [showDefault2, setShowDefault2] = useState(false);
    const [showDefault3, setShowDefault3] = useState(false);
    const handleClose = () => setShowDefault(false);
    const handleClose2 = () => setShowDefault2(false);
    const handleClose3 = () => setShowDefault3(false);

    const totalTransactions = transactions.length;

    const showModel2 = () => {
        setShowDefault2(true);
    }
    const showModel3 = () => {
        setShowDefault3(true);
    }
    const showModel = () => {
        setShowDefault(true);
    }
    const AccordionRow = (props) => {
        const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
        return (
            <Row>
                <Col md={9}>
                    <b>{invoiceNumber}.  </b>
                    <b>{subscription}</b>
                </Col>
            </Row>
        );
    };
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card border="light" className="table-wrapper table-responsive shadow-sm">
                    <Card.Header>
                        <Row>
                            <Col md={11}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h5>Quy trình sản xuất áo sơ mi</h5>
                                </Accordion.Toggle>
                            </Col>
                            <Col md={1}>
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle
                                        as={Button}
                                        split
                                        variant="link"
                                        className="text-dark m-0 p-0">
                                        <span className="icon icon-sm">
                                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={showModel3} >
                                            <FontAwesomeIcon icon={faEye} className="me-2" />Chi tiết
                            </Dropdown.Item>
                                        <Dropdown.Item className="text-danger" onClick={showModel2}>
                                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Xóa
                            </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <ListGroup defaultActiveKey="" variant="flush">
                                    {transactions.map((task, index) => {
                                        return (
                                            <Accordion.Collapse eventKey="0">
                                                <ListGroup.Item action href={"#link" + index} onClick={showModel}>
                                                    <AccordionRow  {...task} />
                                                </ListGroup.Item>
                                            </Accordion.Collapse>
                                        );
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                        
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
                        <small className="fw-bold">
                            Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> quy trình
                </small>
                    </Card.Footer>
                </Card>
            </Accordion>
            <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
                <Modal.Header>
                    <Modal.Title className="h4">Chi tiết công việc</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <DetailTask transactions={transactions}></DetailTask>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="secondary" onClick={handleClose}>
                        Lưu
                    </Button>
                    <Button variant="link" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="warning" className="text-gray ms-auto" onClick={handleClose}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal as={Modal.Dialog} centered show={showDefault2} onHide={handleClose2}>
                <Modal.Header>
                    <Modal.Title className="h6">Xác nhận</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose2} />
                </Modal.Header>
                <Modal.Body>
                    <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>Bạn có chắc chắn xóa?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose2();
                        // notify();
                    }}>
                        Xóa
                          </Button>
                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose2}>
                        Hủy
                          </Button>
                </Modal.Footer>
            </Modal>
            <Modal as={Modal.Dialog} centered show={showDefault3} onHide={handleClose3} size="xl">
                <Modal.Header>
                    <Modal.Title className="h4">Chi tiết quy trình</Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handleClose3} />
                </Modal.Header>
                <Modal.Body>
                    {/* <DetailTask transactions={transactions}></DetailTask> */}
                    <DetailProcess/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Lưu
            </Button>
                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose3}>
                        Hủy
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};