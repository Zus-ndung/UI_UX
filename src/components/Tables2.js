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
import {ProcessInfo} from "../data/processinfo";
import { DetailTask } from "./DetailTask";
import { DetailProcess } from "./DetailProcess";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const TasksTable = () => {
    var processList = ProcessInfo.getlist();
    console.log(processList);
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
    return (
        <>
            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                {processList.map((process,i) => {
                    return (
                        <Card.Body>
                            <Accordion>
                                <Row>
                                    <Col md={12}>
                                        <Accordion.Button variant="link" eventKey="1">
                                            <h5>{process.name}</h5>
                                            <hr></hr>
                                        </Accordion.Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <DragDropContext
                                            onDragEnd={(param) => {
                                                const srcI = param.source.index;
                                                const desI = param.destination?.index;
                                                if (desI){
                                                    var temp = process.steps[srcI];
                                                    process.steps[srcI] = process.steps[desI];
                                                    process.steps[desI] = temp;
                                                    ProcessInfo.savelist(processList);
                                                }
                                            }}
                                        >
                                            <Droppable droppableId="droppable-1"
                                            >
                                                {(provided) => (
                                                    <div 
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    >
                                                        <ListGroup defaultActiveKey="" variant="flush">
                                                            {process.steps.map((task, index) => {
                                                                return (
                                                                    <Accordion.Body eventKey="1">
                                                                        <Draggable 
                                                                        key={index}
                                                                        draggableId={"dragaableID-"+index}
                                                                        index={index}
                                                                        >
                                                                        {(provided,snapshot) => (
                                                                            <ListGroup.Item action href={"#link" + index} onClick={showModel}
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                ...provided.draggableProps.style,
                                                                                boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none",
                                                                            }}
                                                                            >
                                                                                <Row>
                                                                                    <Col md={9}>
                                                                                        <b>{index+1}.  </b>
                                                                                        <b>{task.name}</b>
                                                                                    </Col>
                                                                                    <Col md={{span: 1,offset:2}}>
                                                                                        <b>{task.times}(s)</b>
                                                                                    </Col>
                                                                                </Row>
                                                                            </ListGroup.Item>
                                                                        )}
                                                                        </Draggable>
                                                                    </Accordion.Body>
                                                                );
                                                            })}
                                                        </ListGroup>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                    </DragDropContext>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Card.Body>
                    );
                })}
            </Card>
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
                    <DetailProcess />
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
}
export default TasksTable;