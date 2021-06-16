import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
} from "@themesberg/react-bootstrap";
import SelectSearch from "react-select-search";
import "./Styles/styles.css";
import { Bar, Line } from "react-chartjs-2";

const dataLineChart = [
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
 [
  {data:[44,43,55,39,35,35,50]},
  {data:[40,55,39,35,33,40,44]},
  {data:[43,53,45,36,55,30,45]},
  {data:[42,43,35,38,35,35,40]},
  {data:[41,33,53,31,44,33,50]},
 ],
 [
  {data:[42,43,35,38,35,35,40]},
  {data:[43,53,45,36,55,30,45]},
  {data:[44,43,55,39,35,35,50]},
  {data:[41,33,53,31,44,33,50]},
  {data:[40,55,39,35,33,40,44]},
 ],
];

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
  const [lineMonth,setLineMonth] = useState(6);

  let Linelabels = ['Ngày 1','Ngày 2','Ngày 3','Ngày 4','Ngày 5','Ngày 6','Ngày 7'];
  return (
    <>
      <Row style={{marginTop: "-45px"}}>
        <Col xs={3}></Col>
        <Col xs={9}>
          <Row>
            <Col xs={12}>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between", marginBottom:"25px" }}
              >
                <h3>Quản Lý KPI</h3>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={4}>
              <KPITT
                bg={"#f39d2d"}
                text={"Danh sách đơn vị"}
                icon={"fa fa-university"}
                number={5}
              />
            </Col>
            <Col xs={4}>
              <KPITT
                bg={"#2fc0ef"}
                text={"Đang thiết lập"}
                icon={"fa fa-cogs"}
                number={0}
              />
            </Col>
            <Col xs={4}>
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
                    Biểu đồ thông kê giữa các đơn vị
                  </h5>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="d-flex" style={{ alignItems: "baseline" ,width:"16%", marginBottom: "20px"}}>
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
                          label: "Tổ 1",
                          backgroundColor: [
                            "#FE642E",
                          ],
                          data: [datas[moth][0]],
                        },
                        {
                          label: "Tổ 2",
                          backgroundColor: [
                            "#FACC2E",
                          ],
                          data: [datas[moth][1]],
                        },
                        {
                          label: "Tổ 3",
                          backgroundColor: [
                            "#013ADF",
                          ],
                          data: [datas[moth][2]],
                        },
                        {
                          label: "Tổ 4",
                          backgroundColor: [
                            "#088A08",
                          ],
                          data: [datas[moth][3]],
                        },
                        {
                          label: "Tổ 5",
                          backgroundColor: [
                            "#00FFFF",
                          ],
                          data: [datas[moth][4]],
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
          <br/>
          <Row>
            <Card>
              <Card.Header>
                <h5>Hiệu suất của các tổ cập nhật theo thời gian trong tháng</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex" style={{ alignItems: "baseline" ,width:"16%", marginBottom: "20px"}}>
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
                    label: 'Tổ 1',
                    data: dataLineChart[lineMonth][0].data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.25,
                    pointBorderWidth: 0,
                    pointBorderColor: 'rgb(75, 192, 192)',
                    },
                    {
                      label: 'Tổ 2',
                      data: dataLineChart[lineMonth][1].data,
                      fill: false,
                      borderColor: '#006666',
                      pointBorderWidth: 0,
                      pointBorderColor: 'rgb(75, 192, 192)',
                      tension: 0.25
                    },
                    {
                      label: 'Tổ 3',
                      data: dataLineChart[lineMonth][2].data,
                      fill: false,
                      borderColor: '#FE642E',
                      pointBorderWidth: 0,
                      pointBorderColor: 'rgb(75, 192, 192)',
                      tension: 0.25
                    },
                    {
                      label: 'Tổ 4',
                      data: dataLineChart[lineMonth][3].data,
                      fill: false,
                      borderColor: '#088A08',
                      pointBorderWidth: 0,
                      pointBorderColor: 'rgb(75, 192, 192)',
                      tension: 0.25
                    },
                    {
                      label: 'Tổ 5',
                      data: dataLineChart[lineMonth][4].data,
                      fill: false,
                      borderColor: '#FACC2E',
                      pointBorderWidth: 0,
                      pointBorderColor: 'rgb(75, 192, 192)',
                      tension: 0.25
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
