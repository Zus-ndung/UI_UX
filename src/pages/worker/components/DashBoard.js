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
  Table,
} from "@themesberg/react-bootstrap";
import React from "react";
import Profile3 from "../../../assets/img/team/download.jpeg";
import SideBar from "./Sidebar";
import { workList, ListWorkMonth } from "../../../data/workList";

const TableComponent = (props = {}) => {
  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên Công Việc</th>
          <th>Trọng số công việc</th>
          <th>Số lương sản phẩm yêu cầu</th>
          <th>Số lượng đã làm</th>
          <th>Hiệu xuất quay đổi</th>
        </tr>
      </thead>
      <tbody>
        {ListWorkMonth.map((item, index) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.ts}</td>
              <td>{item.target}</td>
              <td>{item.dl}</td>
              <td>
                {Number.parseInt((item.dl / item.target) * item.ts * 100)} %
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
const MonthBox = ({ values, onClick }) => {
  return <span onClick={() => onClick}>{values}</span>;
};

const DashBoardComponent = (props = {}) => {
  const [bonus, setBonus] = React.useState(() => {
    return ListWorkMonth.reduce(
      (total, item) =>
        (total += Number.parseInt((item.dl / item.target) * item.ts * 100)),
      0
    );
  });
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h4>Thống kê công việc theo tháng</h4>
        </Col>
        <Col xs={12}>
          <br />
          <Row>
            <Col xs={2}>
              <Form.Select aria-label="Default select example">
                <option value="1">Tháng 1</option>
                <option value="2">Tháng 2</option>
                <option value="3">Tháng 3</option>
                <option value="4" selected>
                  Tháng 4
                </option>
                <option value="5">Tháng 5</option>
                <option value="6">Tháng 6</option>
                <option value="7">Tháng 7</option>
                <option value="8">Tháng 8</option>
                <option value="9">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <br />
          <TableComponent bonus={bonus} />
          <br />
          <Card>
            <Card.Header>Lương</Card.Header>
            <Card.Body>
              <div>
                <span>Lương cơ bản: </span>
                <span>10.000.000 (VND) </span>
              </div>
              <div>
                <span>Thưởng: </span>
                <span>
                  {new Intl.NumberFormat("VN", {
                    maximumSignificantDigits: 3,
                  }).format((bonus / 100) * 10000000)}{" "}
                  (VND)
                </span>
              </div>
              <hr />
              <div>
                <span>Tổng nhận: </span>
                <span>
                  {new Intl.NumberFormat("VN", {
                    maximumSignificantDigits: 3,
                  }).format(10000000 * (bonus / 100 + 1))}{" "}
                  (VND)
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

const UserInfo = (props = {}) => {
  return (
    <Container>
      <Card>
        <Card.Header>Thông tin công nhân</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <Image src={Profile3} rounded />
            </Col>
            <Col xs={9}>
              <ListGroup variant="flush">
                <ListGroup.Item>Họ và Tên: Nguyen Thi Minh Anh</ListGroup.Item>
                <ListGroup.Item>Ngày Sinh: 31/01/1999</ListGroup.Item>
                <ListGroup.Item>Số điện thoại: 0123456745</ListGroup.Item>
                <ListGroup.Item>CCCD: 0987665433232</ListGroup.Item>
                <ListGroup.Item>
                  Địa chỉ thường trú: Hoằng Đạt - Hoằng Hóa - Thanh Hóa
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Liên hệ quản lý khi công nhân muốn thay đổi thông tin
        </Card.Footer>
      </Card>
    </Container>
  );
};

const WorkList = ({ onClick }) => {
  return (
    <Row>
      <Table striped bordered hover size="xl">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Công Việc</th>
            <th>Số lượng yêu cầu</th>
            <th>Trọng số công việc</th>
            <th>Thời gian làm 1 sản phẩm(s)</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {workList.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.target}</td>
                <td>{item.ts}</td>
                <td>{item.time}</td>
                <td>
                  {item.done ? (
                    "Hoàn Thành"
                  ) : (
                    <Button onClick={onClick}>Thực hiện</Button>
                  )}
                </td>
              </tr>
            );
          })}
          ;
        </tbody>
      </Table>
    </Row>
  );
};

export default function DashBoard(props = {}) {
  const [key, setKey] = React.useState("contact");
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey={key}
          onSelect={(k) => {
            setKey(k);
            props.onClose();
          }}>
          <Tab eventKey="contact" title="Tổng quan">
            <br />
            <br />
            <DashBoardComponent />
          </Tab>
          <Tab eventKey="workerList" title="Công việc tháng này">
            <br />
            <br />
            <WorkList onClick={props.onShow} />
          </Tab>
          <Tab eventKey="worker" title="Thông tin công nhân">
            <br />
            <br />
            <UserInfo />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
