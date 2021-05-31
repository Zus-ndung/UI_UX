import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faCashRegister,
  faChartLine,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
  Alert,
  Modal,
  Toast,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import kpi from "../data/kpi";
import worker from "../data/worker";
import commands from "../data/commands";
import {
  CircleChartWidget,
  CounterWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
} from "./Widgets";
import { DetailTask } from "./DetailTask";
import { DetailKPI } from "./DetailKPI";
import { DetailWorker } from "./DetailWorker";
import { useNavigate } from "react-router-dom";

export const ListWorkerTable = () => {
  const [showDefault, setShowDefault] = useState(false);
  const [showDefault2, setShowDefault2] = useState(false);
  const handleClose = () => setShowDefault(false);
  const handleClose2 = () => setShowDefault2(false);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(1);
    navigate("worker?id=" + id);
  };

  const totalTransactions = transactions.length;

  const showModel2 = () => {
    setShowDefault2(true);
  };
  const showModel = () => {
    setShowDefault(true);
  };
  const TableRow = (props) => {
    const { invoiceNumber, name, birthday, phone, cccd } = props;
    // const statusVariant = status === "Đã kích hoạt" ? "success":"warning";
    return (
      <tr>
        <td>
          <span className="fw-normal">{invoiceNumber}</span>
        </td>
        <td>
          <span className={"fw-normal"}>{name}</span>
        </td>
        <td>
          <span className="fw-normal">{birthday}</span>
        </td>
        <td>
          <span className="fw-normal">{phone}</span>
        </td>
        <td>
          <span className="fw-normal">{cccd}</span>
        </td>
        <td>
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
              <Dropdown.Item onClick={() => handleClick(invoiceNumber)}>
                <FontAwesomeIcon icon={faEye} className="me-2" />
                Chi tiết KPI
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div>
        <Card
          border="light"
          className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">#</th>
                  <th className="border-bottom">Họ tên</th>
                  <th className="border-bottom">Ngày sinh</th>
                  <th className="border-bottom">Số điện thoại</th>
                  <th className="border-bottom">CCCD</th>
                  <th className="border-bottom">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {worker.map((t) => (
                  <>
                    <TableRow key={`worker-${t.invoiceNumber}`} {...t} />
                  </>
                ))}
              </tbody>
            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">
                  <Pagination.Prev>Trước</Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>Tiếp</Pagination.Next>
                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> Worker
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefault}
        onHide={handleClose}
        size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thông tin chi tiết công nhân</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <DetailWorker transactions={transactions}></DetailWorker>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lưu
          </Button>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefault2}
        onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title className="h6">Xác nhận</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose2} />
        </Modal.Header>
        <Modal.Body>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}>
            Bạn có chắc chắn xóa?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose2();
              // notify();
            }}>
            Xóa
          </Button>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose2}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
