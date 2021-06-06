import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { Chat } from "react-chat-popup";
import Sidebar from "../../components/Sidebar"
import {
  Card,
  Row,
  Tab,
  Tabs,
  Col,
  ListGroup,
  Button,
  Modal,
  Table,
} from "@themesberg/react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import {Bar,Pie,Line} from "react-chartjs-2";
import { CartDash } from "react-bootstrap-icons";
import {DetailTask} from "../../components/DetailTask";
import "./Styles/CircleChartWidget.css";
import ProcessInfo from "../../data/processinfo";
import transactions from "../../data/transactions";

const ChartProcess = (props) => {
  let Linelabels = ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'];
  let LineLabels2 = ['May tay áo','May cổ','May thân', 'Đính cúc','May lộn lại','Kiểm tra lại','Ủi và xếp'];
  return (
    <>
      <Card>
        <Card.Header><h4>Biểu đồ thống kê tình trạng công việc</h4></Card.Header>
        <Card.Body>
          <Row>
            <Col md={5}>
              <Pie
                data={{
                  labels: [
                    'Đúng tiến độ',
                    'Chậm tiến độ'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [5, 2],
                    backgroundColor: [
                      '#009900',
                      '#FFB266',
                    ],
                    hoverOffset: 4
                  }]
                }}
              ></Pie>
              <h6 style={{textAlign:"center",marginTop:"10px"}}><b>Tỷ lệ tiến độ thực hiện</b></h6>
            </Col>
            <Col md={7}>
              <Bar
                data={{
                  labels: Linelabels,
                  datasets: [{
                    data: [50, 100, 130, 150, 190, 220, 250],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1,
                    label: '',
                  }],
                }}
                style={{marginTop: "110px"}}
              >
              </Bar>
              <h6 style={{textAlign:"center",marginTop:"10px"}}><b>Số lượng sản phẩm qua từng ngày</b></h6>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>
      <Card style={{marginTop: "30px"}}>
        <Card.Header><h4>So sánh thời gian dự kiến ban đầu với thực tế</h4></Card.Header>
        <Card.Body>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Line
                data={{
                  labels: LineLabels2,
                  datasets: [
                    {
                    label: 'Thời gian dự kiến',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    },
                    {
                      label: 'Thời gian thực tế',
                      data: [70, 65, 76, 79, 70, 55, 60],
                      fill: false,
                      borderColor: '#FF3333',
                      tension: 0.1
                      }
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
const TableProcess = () => {
  let process = ProcessInfo.getlist();
  let steps = process[0].steps;
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModal = () => {
    setShowDefault(true);
  }

  let length = steps.filter(function(item){
    return item.name;
  }).length;
  const itemsTable = [];
  for (let index = 0; index < length; index++) {
    const statusVariant = steps[index].status === "Đúng tiến độ" ? "success":"warning";
    itemsTable.push(<tr style={{textAlign:"center", cursor: "pointer"}} onClick={showModal}>
      <td>{index+1}</td>
      <td>{steps[index].name}</td>
      <td>3</td>
      <td>{steps[index].times} (s)</td>
      <td>{70+index*3} (s)</td>
      <td>{1200+index*3}</td>
      <td><span className={`fw-normal text-${statusVariant}`}>{steps[index].status}</span></td>
    </tr>)
  }

  
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mt-4">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr style={{textAlign:"center"}}>
                <th>STT</th>
                <th>Tên công việc</th>
                <th>Số công nhân</th>
                <th>Dự định</th>
                <th>Thực tế</th>
                <th>Đã hoàn thành</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {itemsTable}  
            </tbody>
          </Table>
        </Card.Body>
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
            <Button variant="primary" className="text-white ms-auto" onClick={handleClose}>
                Hủy
            </Button>
            {/* <Button variant="warning"  onClick={handleClose}>
                Xóa
            </Button> */}
        </Modal.Footer>
    </Modal>
    </>
  );
}

const DetailProcess = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={{span:9, offset:3}}>
          <h2>Chi tiết tiến độ của quy trình</h2>
          <TableProcess/>
          <ChartProcess/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DetailProcess;
