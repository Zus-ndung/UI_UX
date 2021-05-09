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
  let Linelabels = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7'];
  return (
    <>
      <Card>
        <Card.Header>Biểu đồ thống kê tình trạng công việc</Card.Header>
        <Card.Body>
          <Row>
            <Col md={5}>
              <Pie
                data={{
                  labels: [
                    'Quá hạn',
                    'Đúng tiến độ',
                    'Trễ tiến độ'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                  }]
                }}
              ></Pie>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <div style={{height: "180px"}}>
              </div>
              <Bar
                data={{
                  labels: ['Quá hạn','Trễ tiến độ','Đúng tiến độ'],
                  datasets: [{
                    label: 'Số lượng các công việc theo trạng thái',
                    data: [65, 59, 40],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)',
                      // 'rgba(75, 192, 192, 0.2)',
                      // 'rgba(54, 162, 235, 0.2)',
                      // 'rgba(153, 102, 255, 0.2)',
                      // 'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      // 'rgb(75, 192, 192)',
                      // 'rgb(54, 162, 235)',
                      // 'rgb(153, 102, 255)',
                      // 'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1,
                    height: 500
                  }]
                }}
                option={{
                  // scales: {
                  //   y: {
                  //     beginAtZero: true
                  //   }
                  // }
                }}
              >

              </Bar>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Thống kê số sản phẩm quan từng tháng</Card.Header>
        <Card.Body>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Line
                data={{
                  labels: Linelabels,
                  datasets: [{
                    label: 'Số lượng sản phẩm qua các tháng',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }],
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
  const [key, setKey] = React.useState("onSchedule");
  return (
    <React.Fragment>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <h2>DashBoard Công việc</h2>
          {/* <i class="bi bi-exclamation-diamond-fill"></i> */}
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              
              <Tabs
                id="controlled-tab-example"
                defaultActiveKey={key}
                onSelect={(k) => setKey(k)}
                varient="pills"
              >
                <Tab eventKey="overSchedule" title="Quá Hạn">
                  <br />
                  <br />
                  <OverSchedule/>
                </Tab>
                <Tab eventKey="delaySchedule" title="Trễ tiến độ">
                  <br/><br/>
                </Tab>
                <Tab eventKey="onSchedule" title="Đúng tiến độ">
                  <br />
                  <br />
                  {/* <UserInfo /> */}
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
          <ChartProcess/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ManagerDashboard;
