import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Modal } from '@themesberg/react-bootstrap';
import { ListKPITable } from "../../components/Tables";
import {AddTask} from "../../components/AddTask";

const ListKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  }
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
                <span></span>
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
            </Card>
          </Row>
          <ListKPITable />
        </Col>
        </Col> 
      </Row>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddTask/>
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
}
export default ListKPI;