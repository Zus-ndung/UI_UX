import React, { useState } from "react";
import { Col, Row, Card } from "@themesberg/react-bootstrap";
import SelectSearch from "react-select-search";
import "./Styles/styles.css";
import { Bar, Line } from "react-chartjs-2";

const dataLineChart = [
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
  [
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
  ],
  [
    { data: [42, 43, 35, 38, 35, 35, 40] },
    { data: [43, 53, 45, 36, 55, 30, 45] },
    { data: [44, 43, 55, 39, 35, 35, 50] },
    { data: [41, 33, 53, 31, 44, 33, 50] },
    { data: [40, 55, 39, 35, 33, 40, 44] },
  ],
];

const options = [
  { name: "T??? 1", value: 1 },
  { name: "T??? 2", value: 2 },
  { name: "T??? 3", value: 3 },
  { name: "T??? 4", value: 4 },
  { name: "T??? 5", value: 5 },
];

const Moths = [
  { name: "Th??ng 1", value: 1 },
  { name: "Th??ng 2", value: 2 },
  { name: "Th??ng 3", value: 3 },
  { name: "Th??ng 4", value: 4 },
  { name: "Th??ng 5", value: 5, selected: true },
  { name: "Th??ng 6", value: 6 },
  { name: "Th??ng 7", value: 7 },
  { name: "Th??ng 8", value: 8 },
  { name: "Th??ng 9", value: 9 },
  { name: "Th??ng 10", value: 10 },
  { name: "Th??ng 11", value: 11 },
  { name: "Th??ng 12", value: 12 },
];

const KPITT = (props = {}) => {
  const { bg, text, number, icon } = props;
  return (
    <div
      className="info-box"
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: "2px",
      }}
    >
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
        }}
      >
        <i className={icon}></i>
      </span>
      <div
        className="info-box-content"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 0 0 10px",
        }}
      >
        <span className="info-box-text">{text}</span>
        <p
          className="info-box-number"
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: bg,
          }}
        >
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
  const [lineMonth, setLineMonth] = useState(6);

  let Linelabels = [
    "Ng??y 1",
    "Ng??y 2",
    "Ng??y 3",
    "Ng??y 4",
    "Ng??y 5",
    "Ng??y 6",
    "Ng??y 7",
  ];
  return (
    <>
      <Row style={{ marginTop: "-45px" }}>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Row>
            <Col xs={12}>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  marginBottom: "25px",
                }}
              >
                <h3>Qu???n L?? KPI</h3>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={4}>
              <KPITT
                bg={"#f39d2d"}
                text={"Danh s??ch ????n v???"}
                icon={"fa fa-university"}
                number={5}
              />
            </Col>
            <Col xs={4}>
              <KPITT
                bg={"#2fc0ef"}
                text={"??ang thi???t l???p"}
                icon={"fa fa-cogs"}
                number={0}
              />
            </Col>
            <Col xs={4}>
              <KPITT
                bg={"#4fa845"}
                text={"???? k??ch ho???t"}
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
                    Bi???u ????? th??ng k?? gi???a c??c ????n v???
                  </h5>
                </div>
              </Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{
                    alignItems: "baseline",
                    width: "16%",
                    marginBottom: "20px",
                  }}
                >
                  <SelectSearch
                    options={Moths}
                    value={moth}
                    onChange={setMoth}
                  />
                </div>
                <Row>
                  <Bar
                    data={{
                      labels: [""],
                      datasets: [
                        {
                          label: "T??? 1",
                          backgroundColor: ["#FE642E"],
                          data: [datas[moth][0]],
                        },
                        {
                          label: "T??? 2",
                          backgroundColor: ["#FACC2E"],
                          data: [datas[moth][1]],
                        },
                        {
                          label: "T??? 3",
                          backgroundColor: ["#013ADF"],
                          data: [datas[moth][2]],
                        },
                        {
                          label: "T??? 4",
                          backgroundColor: ["#088A08"],
                          data: [datas[moth][3]],
                        },
                        {
                          label: "T??? 5",
                          backgroundColor: ["#00FFFF"],
                          data: [datas[moth]],
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
                <h5>
                  Hi???u su???t c???a c??c t??? c???p nh???t theo th???i gian trong th??ng
                </h5>
              </Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{
                    alignItems: "baseline",
                    width: "16%",
                    marginBottom: "20px",
                  }}
                >
                  <SelectSearch
                    options={Moths}
                    value={lineMonth}
                    onChange={setLineMonth}
                  />
                </div>
                <Line
                  data={{
                    labels: Linelabels,
                    datasets: [
                      {
                        label: "T??? 1",
                        data: dataLineChart[lineMonth][0].data,
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.25,
                        pointBorderWidth: 0,
                        pointBorderColor: "rgb(75, 192, 192)",
                      },
                      {
                        label: "T??? 2",
                        data: dataLineChart[lineMonth][1].data,
                        fill: false,
                        borderColor: "#006666",
                        pointBorderWidth: 0,
                        pointBorderColor: "rgb(75, 192, 192)",
                        tension: 0.25,
                      },
                      {
                        label: "T??? 3",
                        data: dataLineChart[lineMonth][2].data,
                        fill: false,
                        borderColor: "#FE642E",
                        pointBorderWidth: 0,
                        pointBorderColor: "rgb(75, 192, 192)",
                        tension: 0.25,
                      },
                      {
                        label: "T??? 4",
                        data: dataLineChart[lineMonth][3].data,
                        fill: false,
                        borderColor: "#088A08",
                        pointBorderWidth: 0,
                        pointBorderColor: "rgb(75, 192, 192)",
                        tension: 0.25,
                      },
                      {
                        label: "T??? 5",
                        data: dataLineChart[lineMonth][4].data,
                        fill: false,
                        borderColor: "#FACC2E",
                        pointBorderWidth: 0,
                        pointBorderColor: "rgb(75, 192, 192)",
                        tension: 0.25,
                      },
                    ],
                  }}
                ></Line>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default DashBoradKPI;
