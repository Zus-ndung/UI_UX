import React from "react";
import { Outlet } from "react-router-dom";
import { Chat } from "react-chat-popup";
import Sidebar from "../../components/Sidebar"
import {
  Card,
  Container,
  Form,
  Image,
  Row,
  Tab,
  Tabs,
  Col,
  ListGroup,
  Button,
  Nav,
  Modal,
} from "@themesberg/react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import {Bar,Pie,Line} from "react-chartjs-2";
import { CartDash } from "react-bootstrap-icons";
import {DetailTask} from "../../components/DetailTask";
import {trafficShares, trafficShares2} from "../../data/charts";
import {CircleChartWidget} from "../../components/Widgets";
import "./Styles/CircleChartWidget.css";
import { useNavigate } from "react-router-dom";

const OverSchedule = (prop={}) => {
  const [show,setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item action href="#" eventKey="ac1" onClick={handleShow}>Công việc 1 </ListGroup.Item>
            <ListGroup.Item action href="#" eventKey="ac2" onClick={handleShow}>Công việc 2</ListGroup.Item>
            <ListGroup.Item action href="#" eventKey="ac3" onClick={handleShow}>Công việc 3</ListGroup.Item>
            <ListGroup.Item action href="#" eventKey="ac4" onClick={handleShow}>Công việc 4</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Modal as={Modal.Dialog} centered show={show} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title className="h6">Chi tiết công việc</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <DetailTask/>
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
    </>
    
  );
};
const ChartProcess = () => {
  let Linelabels = ['Ngày 1','Ngày 2','Ngày 3','Ngày 4','Ngày 5','Ngày 6','Ngày 7'];
  let Linelabels2 = ['Ngày 1','Ngày 2','Ngày 3','Ngày 4','Ngày 5','Ngày 6','Ngày 7'];
  return (
    <>
      <Card style={{marginTop: "30px"}}>
        <Card.Header><h4>Thống kê số tổng số lượng sản phẩm từng ngày</h4></Card.Header>
        <Card.Body>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Line
                data={{
                  labels: Linelabels,
                  datasets: [
                    {
                    label: 'May áo vest',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    },
                    {
                      label: 'May áo sơ mi',
                      data: [55, 90, 44, 33, 44, 66, 67],
                      fill: false,
                      borderColor: '#006666',
                      tension: 0.1
                    },
                ],
                }}
              ></Line>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const routeTo = () => {
    navigate("detail-process");
  }
  return (
    <React.Fragment >
      <Row>
        <Col md={{span:9, offset:3}}>
          <h2 style={{marginBottom: "25px"}}>DashBoard Công việc</h2>
          
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Header><h4>Danh sách các quy trình đang thực hiện</h4></Card.Header>
            <Card.Body>
              <Row>
                <Col md={5} onClick={routeTo} style={{cursor: "pointer"}}>
                    <CircleChartWidget 
                      title="May áo vest"
                      data={trafficShares}
                      
                    />
                </Col>
                <Col md={5} style={{cursor: "pointer"}}>
                  <CircleChartWidget 
                    title="May áo sơ mi"
                    data={trafficShares2}
                  />
                </Col>
              </Row>
            </Card.Body>
            
          </Card>
          {/* phần biểu đồ cho dashboard */}
          <ChartProcess/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ManagerDashboard;
