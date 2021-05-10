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
import Chartist from "chartist";
import React from "react";
import Profile3 from "../../../assets/img/team/download.jpeg";
import Picker from "react-month-picker";
import SideBar from "./Sidebar";

const TableComponent = () => {
  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên Công Việc</th>
          <th>Thời gian bắt đầu</th>
          <th>Thời gian kết thúc</th>
          <th>Số lượng đã làm</th>
          <th>Số lượng yêu cầu</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>May cổ áo</td>
          <td>21/3/1999 07:00:00</td>
          <td>21/3/1999 17:00:00</td>
          <td>200</td>
          <td>200</td>
          <td>Hoàn thành</td>
        </tr>
        <tr>
          <td>2</td>
          <td>May cổ áo</td>
          <td>21/3/1999 07:00:00</td>
          <td>21/3/1999 17:00:00</td>
          <td>200</td>
          <td>200</td>
          <td>Hoàn thành</td>
        </tr>
        <tr>
          <td>3</td>
          <td>May cổ áo</td>
          <td>21/3/1999 07:00:00</td>
          <td>21/3/1999 17:00:00</td>
          <td>200</td>
          <td>200</td>
          <td>Hoàn thành</td>
        </tr>
        <tr>
          <td>4</td>
          <td>May cổ áo</td>
          <td>21/3/1999 07:00:00</td>
          <td>21/3/1999 17:00:00</td>
          <td>200</td>
          <td>200</td>
          <td>Hoàn thành</td>
        </tr>
        <tr>
          <td>5</td>
          <td>May cổ áo</td>
          <td>21/3/1999 07:00:00</td>
          <td>21/3/1999 17:00:00</td>
          <td>200</td>
          <td>200</td>
          <td>Hoàn thành</td>
        </tr>
      </tbody>
    </Table>
  );
};
const MonthBox = ({ values, onClick }) => {
  return <span onClick={() => onClick}>{values}</span>;
};
const DashBoardComponent = (props = {}) => {
  const pickAMonth2 = React.createRef();
  const [singleValue2, setSingValues] = React.useState({
    year: 2016,
    month: 7,
  });
  const pickerLang = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    from: "From",
    to: "To",
  };

  const makeText = (m) => {
    if (m && m.year && m.month)
      return pickerLang.months[m.month - 1] + ". " + m.year;
    return "?";
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h4>Thống kê công việc theo tháng</h4>
        </Col>
        <Col xs={12}>
          <br />
          <Row>
            <Col xs={2}>Tháng</Col>
            <Col xs={4}>
              {/* <Picker
                ref={pickAMonth2}
                years={{
                  min: { year: 2016, month: 2 },
                  max: { year: 2016, month: 9 },
                }}
                lang={pickerLang.months}
                value={{ year: 2016, month: 7 }}
                theme="dark">
                <MonthBox value={makeText(singleValue2)} />
              </Picker> */}
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <br />
          <TableComponent />
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
        <Card.Header>Worker Info</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <Image src={Profile3} rounded />
            </Col>
            <Col xs={9}>
              <ListGroup variant="flush">
                <ListGroup.Item>Full Name: Nguyen Thi Minh Anh</ListGroup.Item>
                <ListGroup.Item>Date of Birth: 31/01/1999</ListGroup.Item>
                <ListGroup.Item>Phone Number: 0123456745</ListGroup.Item>
                <ListGroup.Item>CCCD: 0987665433232</ListGroup.Item>
                <ListGroup.Item>
                  Address: Hoang Dat - Hoang Hoa - Thanh Hoa
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Contact the department manager when you want to change the information
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
            <th>#</th>
            <th>Tên Công Việc</th>
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>May cổ áo</td>
            <td>21/3/1999 07:00:00</td>
            <td>21/3/1999 17:00:00</td>
            <td>Hoàn thành</td>
          </tr>
          <tr>
            <td>2</td>
            <td>May cổ áo</td>
            <td>--/--/---- --:--:--</td>
            <td>--/--/---- --:--:--</td>
            <td>
              <Button onClick={onClick}>Thực hiện</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>May cổ áo</td>
            <td>--/--/---- --:--:--</td>
            <td>--/--/---- --:--:--</td>
            <td>
              <Button onClick={onClick}>Thực hiện</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>May cổ áo</td>
            <td>--/--/---- --:--:--</td>
            <td>--/--/---- --:--:--</td>
            <td>
              <Button onClick={onClick}>Thực hiện</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>May cổ áo</td>
            <td>--/--/---- --:--:--</td>
            <td>--/--/---- --:--:--</td>
            <td>
              <Button onClick={onClick}>Thực hiện</Button>
            </td>
          </tr>
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
