import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
  Modal,
} from "@themesberg/react-bootstrap";

import transactions from "../../../data/transactions";
import kpi,{UnitKPIData} from "../../../data/kpi";
import { DetailKPI} from "../../../components/DetailKPI";
import {AddKPIForm} from "./AddKPIForm";

export const UnitKPITable = () => {

    const [showDefault, setShowDefault] = useState(false);
    const [showDefault2, setShowDefault2] = useState(false);
    const handleClose = () => setShowDefault(false);
    const handleClose2 = () => setShowDefault2(false);
  
    const totalTransactions = transactions.length;
  
    const showModel2 = () => {
      setShowDefault2(true);
    }
    const showModel = () => {
      setShowDefault(true);
    }
    const TableRow = (props) => {
      const { invoiceNumber, issueDate, status, targetNumber,score } = props;
      const statusVariant = status === "Đã kích hoạt" ? "success":"warning";
      return (
        <tr>
          <td>
            <span className="fw-normal">
              {invoiceNumber}
            </span>
          </td>
          <td>
            <span className={`fw-normal text-${statusVariant}`}>{status}</span>
          </td>
          <td>
            <span className="fw-normal">{issueDate}</span>
          </td>
          <td className="text-center">
            <span className="fw-normal">{targetNumber}</span>
          </td>
          <td className="text-center">
            <span className="fw-normal">
              {score} 
            </span>
          </td>
          <td className="text-center">
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
                <Dropdown.Item onClick={showModel} >
                  <FontAwesomeIcon icon={faEye} className="me-2" />Chi tiết
                </Dropdown.Item>
                <Dropdown.Item className="text-danger" onClick={showModel2}>
                  <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Xóa
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
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="pt-0">
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                    <th className="border-bottom">STT</th>
                    <th className="border-bottom">Trạng thái</th>
                    <th className="border-bottom">Thời gian</th>
                    <th className="border-bottom text-center">Số lượng mục tiêu</th>
                    <th className="border-bottom text-center">Điểm số</th>
                    <th className="border-bottom text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {UnitKPIData.map((t) => (
                    <>
                      <TableRow key={`kpi-${t.invoiceNumber}`} {...t} />
                    </>
                  ))}
                </tbody>
              </Table>
              <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
          <Modal.Header>
            <Modal.Title className="h4">Chi tiết KPI</Modal.Title>
            <Button variant="close" aria-label="Close" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            {/* <DetailKPI transactions={transactions}></DetailKPI> */}
            <AddKPIForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Lưu
            </Button>
            <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
              Hủy
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
            }}>
              Xóa
            </Button>
            <Button variant="link" className="text-gray ms-auto" onClick={handleClose2}>
              Hủy
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default UnitKPITable;