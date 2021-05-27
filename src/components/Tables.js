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
import { DetailKPI} from "./DetailKPI";
import { DetailWorker} from "./DetailWorker";
const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = (props = {}) => {
  const { title } = props;
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceTxtColor = bounceRate === 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>{returnValue}</td>
        <td className={`${bounceTxtColor} me-3`}>{Math.abs(bounceRate)}%</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col xs={6}>
            <h5>{title}</h5>
          </Col>
          <Col xs={6}>
            <Alert variant="warning">Chưa đạt đủ chỉ tiêu</Alert>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Sản Phẩm</th>
            <th scope="col">Số lượng yêu cầu</th>
            <th scope="col">Số lượng đã làm</th>
            <th scope="col">Tiến độ</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const {
      id,
      source,
      sourceIcon,
      sourceIconColor,
      sourceType,
      category,
      rank,
      trafficShare,
      change,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={trafficShare}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const ListTaskTable = () => {

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
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
    const statusVariant = status === "Đã hoàn thành" ? "success"
      : status === "Đang thực hiện" ? "warning"
        : status === "Quá hạn" ? "danger" : "primary";
    return (
      <tr key="table-task-list">
        <td>
          <span className="fw-normal">
            {invoiceNumber}
          </span>
          {/* <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link> */}
        </td>
        <td>
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{issueDate}</span>
        </td>
        <td>
          <span className="fw-normal">{dueDate}</span>
        </td>
        <td>
          <span className="fw-normal">
            {parseFloat(price)}%
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
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
                  <th className="border-bottom">#</th>
                  <th className="border-bottom">Tên công việc</th>
                  <th className="border-bottom">Ngày bắt đầu</th>
                  <th className="border-bottom">Ngày kết thúc</th>
                  <th className="border-bottom">Tiến độ</th>
                  <th className="border-bottom">Trạng thái</th>
                  <th className="border-bottom">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <>
                    <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
                  </>
                ))}
              </tbody>
            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">

                  <Pagination.Prev>
                    Trước
              </Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>
                    Tiếp
              </Pagination.Next>

                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> công việc
          </small>
            </Card.Footer>
          </Card.Body>
        </Card>

      </div>
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
            // notify();
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

export const ListKPITable = () => {

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
        <td>
          <span className="fw-normal">{targetNumber}</span>
        </td>
        <td>
          <span className="fw-normal">
            {score} 
          </span>
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
                  <th className="border-bottom">#</th>
                  <th className="border-bottom">Trạng thái</th>
                  <th className="border-bottom">Thời gian</th>
                  <th className="border-bottom">Số lượng mục tiêu</th>
                  <th className="border-bottom">Điểm số</th>
                  <th className="border-bottom">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {kpi.map((t) => (
                  <>
                    <TableRow key={`kpi-${t.invoiceNumber}`} {...t} />
                  </>
                ))}
              </tbody>
            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">

                  <Pagination.Prev>
                    Trước
              </Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>
                    Tiếp
              </Pagination.Next>

                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> KPIs
          </small>
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
          <DetailKPI transactions={transactions}></DetailKPI>
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
            // notify();
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


export const ListWorkerTable = () => {

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
    const { invoiceNumber, name, birthday, phone, cccd } = props;
    // const statusVariant = status === "Đã kích hoạt" ? "success":"warning";
    return (
      <tr>
        <td>
          <span className="fw-normal">
            {invoiceNumber}
          </span>
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
          <span className="fw-normal">
            {cccd} 
          </span>
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

                  <Pagination.Prev>
                    Trước
              </Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>
                    Tiếp
              </Pagination.Next>

                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> Worker
          </small>
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
          <DetailWorker transactions={transactions}></DetailWorker>
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
            // notify();
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


export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const InforGroup = ({ data }) => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} className="mb-4 d-none d-sm-block">
        <SalesValueWidget
          title="Sales Value"
          value="10,567"
          percentage={10.57}
        />
      </Col>
      <Col xs={12} className="mb-4 d-sm-none">
        <SalesValueWidgetPhone
          title="Sales Value"
          value="10,567"
          percentage={10.57}
        />
      </Col>
      <Col xs={12} sm={6} xl={3} className="mb-4">
        <CounterWidget
          category="Customers online"
          title="200"
          period="Feb 1 - Apr 1"
          percentage={99}
          icon={faUser}
          iconColor="shape-secondary"
        />
      </Col>
      <Col xs={12} sm={6} xl={3} className="mb-4">
        <CounterWidget
          category="Customers"
          title="345k"
          period="Feb 1 - Apr 1"
          icon={faUser}
          iconColor="shape-secondary"
        />
      </Col>
      <Col xs={12} sm={6} xl={3} className="mb-4">
        <CounterWidget
          category="Revenue"
          title="$43,594"
          period="Feb 1 - Apr 1"
          percentage={28.4}
          icon={faCashRegister}
          iconColor="shape-tertiary"
        />
      </Col>
      <Col xs={12} sm={6} xl={3} className="mb-4">
        <CounterWidget
          category="Customers"
          title="345k"
          period="Feb 1 - Apr 1"
          icon={faUser}
          iconColor="shape-secondary"
        />
      </Col>
    </Row>
  );
};
