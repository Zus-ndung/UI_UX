import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Modal,
  Container,
  Card,
} from "@themesberg/react-bootstrap";
import { ListKPITable } from "../../components/Tables";
import { AddTask } from "../../components/AddTask";
import SelectSearch from "react-select-search";
import "./Styles/styles.css";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

const options = [
  { name: "Tổ 1", value: 1 },
  { name: "Tổ 2", value: 2 },
  { name: "Tổ 3", value: 3 },
  { name: "Tổ 4", value: 4 },
  { name: "Tổ 5", value: 5 },
];

const Moths = [
  { name: "Tháng 1", value: 1 },
  { name: "Tháng 2", value: 2 },
  { name: "Tháng 3", value: 3 },
  { name: "Tháng 4", value: 4 },
  { name: "Tháng 5", value: 5, selected: true },
  { name: "Tháng 6", value: 6 },
  { name: "Tháng 7", value: 7 },
  { name: "Tháng 8", value: 8 },
  { name: "Tháng 9", value: 9 },
  { name: "Tháng 10", value: 10 },
  { name: "Tháng 11", value: 11 },
  { name: "Tháng 12", value: 12 },
];

const ListKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  };
  return (
    <>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-1 mb-md-0">
              <h3>Quản lý KPI</h3>
            </div>
          </div>
          <div className="table-settings mb-1">
            <Row className="justify-content-between align-items-center">
              <Col md={2} className="ps-md-0 text-end">
                <div className="btn-toolbar mb-2 mb-md-0">
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle
                      split
                      as={Button}
                      variant="link"
                      className="text-dark m-0 p-0">
                      {/* <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                      </span> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                      <Dropdown.Item className="fw-bold text-dark">
                        Show
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex fw-bold">
                        10{" "}
                        <span className="icon icon-small ms-auto">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                      <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>
          <ListKPITable />
        </Col>
      </Row>
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefault}
        onHide={handleClose}
        size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddTask />
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
    </>
  );
};

const KPITT = (props = {}) => {
  const { bg, text, number, icon } = props;
  return (
    <div
      className="info-box"
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: "2px",
      }}>
      <span
        className="info-box-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bg,
          width: "90px",
          height: "90px",
          borderRadius: "2px",
          color: "white",
          fontSize: "30px",
        }}>
        <i className={icon}></i>
      </span>
      <div
        className="info-box-content"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 0 0 10px",
        }}>
        <span className="info-box-text">{text}</span>
        <p
          className="info-box-number"
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: bg,
          }}>
          {number}
        </p>
      </div>
    </div>
  );
};
const datas = [
  [80, 70, 120, 100, 85],
  [74, 85, 100, 20, 30],
  [40, 60, 20, 40, 10],
  [90, 30, 40, 20, 15],
  [80, 70, 120, 100, 85],
  [74, 85, 100, 20, 30],
  [40, 60, 20, 40, 10],
  [90, 30, 40, 20, 15],
  [80, 70, 120, 100, 85],
  [74, 85, 100, 20, 30],
  [40, 60, 20, 40, 10],
  [90, 30, 40, 20, 15],
];

const data2s = [
  [300, 50, 100],
  [0, 50, 100],
  [50, 50, 300],
  [150, 0, 200],
  [300, 50, 100],
  [0, 50, 100],
  [50, 50, 300],
  [150, 0, 200],
  [300, 50, 100],
  [0, 50, 100],
  [50, 50, 300],
  [150, 0, 200],
];
const DashBoradKPI = (props = {}) => {
  const [moth, setMoth] = React.useState(4);
  return (
    <>
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Row>
            <Col xs={12}>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}>
                <h4>Quản Lý KPI</h4>
                <span>xxx</span>
              </div>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={5}>
                  <div className="d-flex" style={{ alignItems: "baseline" }}>
                    <span>
                      <strong style={{ marginRight: "7px" }}>Đơn vị</strong>{" "}
                    </span>{" "}
                    <SelectSearch
                      options={options}
                      search
                      value={5}
                      placeholder="Chọn đơn vị"
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex" style={{ alignItems: "baseline" }}>
                    <span>
                      <strong style={{ marginRight: "7px" }}>Tháng</strong>{" "}
                    </span>{" "}
                    <SelectSearch
                      options={Moths}
                      value={moth}
                      onChange={setMoth}
                      placeholder="tháng"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={3}>
              <KPITT
                bg={"#f39d2d"}
                text={"Danh sách đơn vị"}
                icon={"fa fa-university"}
                number={5}
              />
            </Col>
            <Col xs={3}>
              <KPITT
                bg={"#dd4b39"}
                text={"Chưa khởi tạo"}
                icon={"fa fa-exclamation-circle"}
                number={1}
              />
            </Col>
            <Col xs={3}>
              <KPITT
                bg={"#2fc0ef"}
                text={"Đang thiết lập"}
                icon={"fa fa-cogs"}
                number={0}
              />
            </Col>
            <Col xs={3}>
              <KPITT
                bg={"#4fa845"}
                text={"Đã kích hoạt"}
                icon={"fa fa-check-circle"}
                number={5}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Card>
              <Card.Header>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <h5 style={{ marginRight: "10px" }}>
                    Biểu đồ thông kê giữa các tổ
                  </h5>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="d-flex" style={{ alignItems: "baseline" }}>
                  <span>
                    <strong style={{ marginRight: "7px" }}>Tháng</strong>{" "}
                  </span>{" "}
                  <SelectSearch
                    options={Moths}
                    value={moth}
                    onChange={setMoth}
                    placeholder="Tháng"
                  />
                </div>
                <Row>
                  <Bar
                    data={{
                      labels: ["Tổ 1", "Tổ 2", "Tổ 3", "Tổ 4", "Tổ 5"],
                      datasets: [
                        {
                          label: "Hiệu suất của tổ",
                          backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850",
                          ],
                          data: datas[moth],
                        },
                      ],
                    }}
                    options={{
                      legend: { display: true },
                      title: {
                        display: true,
                        text: "Predicted world population (millions) in 2050",
                      },
                    }}
                  />
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <br />
          <Row>
            <Card>
              <Card.Header>
                <h5>Thống kê kết quả KPI tổ 5</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex" style={{ alignItems: "baseline" }}>
                  <span>
                    <strong style={{ marginRight: "7px" }}>Tháng</strong>{" "}
                  </span>{" "}
                  <SelectSearch
                    options={Moths}
                    value={moth}
                    onChange={setMoth}
                    placeholder="Tháng"
                  />
                </div>
                <Row>
                  <Col md={5}>
                    <Pie
                      data={{
                        labels: ["Quá hạn", "Đúng tiến độ", "Trễ tiến độ"],
                        datasets: [
                          {
                            label: "My First Dataset",
                            data: data2s[moth],
                            backgroundColor: [
                              "rgb(255, 99, 132)",
                              "rgb(54, 162, 235)",
                              "rgb(255, 205, 86)",
                            ],
                            hoverOffset: 4,
                          },
                        ],
                      }}></Pie>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <div style={{ height: "180px" }}></div>
                    <Bar
                      data={{
                        labels: ["Quá hạn", "Trễ tiến độ", "Đúng tiến độ"],
                        datasets: [
                          {
                            label: "Số lượng các công việc theo trạng thái",
                            data: data2s[moth],
                            backgroundColor: [
                              "rgb(255, 99, 132)",
                              "rgb(54, 162, 235)",
                              "rgb(255, 205, 86)",
                            ],
                            borderColor: [
                              "rgb(255, 99, 132)",
                              "rgb(255, 159, 64)",
                              "rgb(255, 205, 86)",
                            ],
                            borderWidth: 1,
                            height: 500,
                          },
                        ],
                      }}></Bar>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <br />
          <Row>
            <Card>
              <Card.Header>
                Hiệu suất của tổ 5 qua các tháng (1/2021 - 5/2021)
              </Card.Header>
              <Card.Body>
                <Line
                  data={{
                    labels: [
                      "Tháng 1",
                      "Tháng 2",
                      "Tháng 3",
                      "Tháng 4",
                      "Tháng 5",
                      "Tháng 6",
                      "Tháng 7",
                      "Tháng 8",
                      "Tháng 9",
                      "Tháng 10",
                      "Tháng 11",
                      "Tháng 12",
                    ],
                    datasets: [
                      {
                        data: [80, 81, 90, 89, 90],
                        label: "Tổ 5",
                        borderColor: "red",
                        fill: true,
                      },
                    ],
                  }}
                  options={{
                    title: {
                      display: true,
                      text: "World population per region (in millions)",
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default DashBoradKPI;
