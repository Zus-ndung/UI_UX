import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExternalLinkAlt,
  faMapMarker,
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
// import Code from "../components/CodeEditor";
// import GitHubButton from 'react-github-btn';

// import { Routes } from "../routes";
import Logo from "../../assets/img/logo1.png";
import Trung from "../../assets/img/avt/trung.jpg";
import Dung from "../../assets/img/avt/dung.jpeg";
import Thao from "../../assets/img/avt/thao.jpg";
import Vuong from "../../assets/img/avt/vuong.jpg";
import Calendar from "../../assets/img/pages/calendar.png";
import CN from "../../assets/img/pages/CN.png";
import DB from "../../assets/img/pages/db.png";
import CV from "../../assets/img/pages/CV.png";
import KPI from "../../assets/img/pages/KPI.png";
export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link
          as={Link}
          to={link}
          className="page-preview page-preview-lg scale-up-hover-2">
          <Image
            src={image}
            className="shadow-lg rounded scale"
            alt="Dashboard page preview"
          />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name}{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}>
        <li
          data-toggle="tooltip"
          data-placement="left"
          title="Main folder that you will be working with">
          <FontAwesomeIcon
            icon={icon ? icon : faFolder}
            className={`${color} me-2`}
          />{" "}
          {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            to="#home"
            className="me-lg-3 d-flex align-items-center">
            <Image src={Logo} style={{ width: "15%", height: "15%" }} />
            <span
              className="ms-2 brand-text d-none d-md-inline"
              style={{ fontFamily: "cursive" }}>
              HCI02
            </span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                {/* <a href="#features" style={{ color: "white" }}>
                Ch???c n??ng
                </a> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Nav>
            </Navbar.Collapse>
            <Button
              as={Link}
              to={"signin"}
              variant="outline-white"
              className="ms-3">
              ????ng nh???p
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-7 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              {/* <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div> */}
              <h1 className="fw-bolder text-secondary" style={{fontFamily:"cursive", fontSize:"50px"}}>Qu???n l?? c??ng vi???c</h1>
              {/* <p className="text-muted fw-light mb-5 h5">HCI02</p> */}
              <marquee className="mt-6  " scrolldelay="10" style={{fontSize:"30px"}}>
              Qu???n l?? c??ng vi???c v?? ????nh gi?? KPI l?? c??ng c??? ???????c s??? d???ng ph??? bi???n tr??n th??? gi???i,
              nh???m ?????m b???o c??c c??ng vi???c ???????c th???c hi???n ????ng k??? ho???ch ????? ra,
              ?????m b???o ch???t l?????ng, ?????ng th???i gi??p ng?????i giao vi???c c?? th??? ????nh gi?? hi???u su???t c??ng vi???c c???a ng?????i th???c hi???n.
              </marquee>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg
              className="fill-soft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Qu???n l?? c??ng vi???c</h2>
              {/* <p className="mb-3 lead fw-bold">The most popular front-end library in the world</p> */}
              <p className="mb-4">Qu???n l?? c??ng vi???c v?? theo d??i ti???n ????? c??ng vi???c c???a c??ng nh??n theo c??c quy tr??nh</p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={CV} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Qu???n l?? KPI</h2>
              {/* <p className="mb-3 lead fw-bold">100+ premium UI elements based on Bootstrap 5</p> */}
              <p className="mb-4">Theo d??i KPI v?? ti???n ????? l??m vi???c c???a m???i c??ng nh??n c??ng nh?? d??y chuy???n</p>
            </Col>
            <Col lg={6} className="rounded shadow pt-3">
              <Image
                src={KPI}
                alt="MapBox Leaflet.js Custom Integration Mockup"
              />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Qu???n l?? c??ng nh??n</h2>
              {/* <p className="mb-3 lead fw-bold">Markers and cards integration with Leaflet.js</p> */}
              <p className="mb-4">Qu???n l?? c??ng nh??n, theo d??i danh s??ch c??ng nh??n, th??m s???a x??a c??ng nh??n b???ng nhi???u h??nh th???c, gi??p ng?????i d??ng d??? d??ng thao t??c</p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image
                src={CN}
                alt="MapBox Leaflet.js Custom Integration Mockup"
              />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Calendar</h2>
              {/* <p className="mb-3 lead fw-bold">
                Advanced FullCalendar.js integration
              </p> */}
              <p className="mb-4">
              Qu???n l?? c?? th??? note l???ch l??m vi???c, c??c cu???c h???p ngay t???i trang dashboard c???a manager
              </p>
            </Col>
            <Col lg={6}>
              <Image src={Calendar} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Trang c??ng nh??n</h2>
              {/* <p className="mb-3 lead fw-bold">
              Trang c??ng nh??n
              </p> */}
              <p className="mb-4">
              M??n h??nh c??ng nh??n ????n gi???n d??? d??ng thao t??c, d??? d??ng s??? d???ng. B??o c??o ???????c c???p nh???p t???ng ph??t t???ng gi???.
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={DB} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-3 mb-4">Th??nh vi??n ph??t tri???n</h2>
              <p className="lead px-lg-8">
              Ch??ng t??i ph??t tri???n n??n ???ng d???ng n??y v???i m???c ti??u qu???n l?? c??ng vi???c v?? theo d??i KPI m???t c??ch d??? d??ng, ti???t ki???m th???i gian, t??ng n??ng su???t l??m vi???c t???o n??n nhi???u gi?? tr??? h??n.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <Image
                  src={Trung}
                  className="text-secondary"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3 className="fw-bolder text-white">Anh Trung</h3>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <Image
                  src={Dung}
                  className="text-secondary"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3 className="fw-bolder text-white">V??n D??ng</h3>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <Image
                  src={Thao}
                  className="text-secondary"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3 className="fw-bolder text-white">H???ng Th???o</h3>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                {/* <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" /> */}
                <Image
                  src={Vuong}
                  className="text-secondary"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3 className="fw-bolder text-white">Qu???c V????ng</h3>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Lien he voi chung toi</h2>
              <p className="lead px-lg-8">
                <span className="d-flex">
                  <FontAwesomeIcon icon={faMapMarker} /> &nbsp;&nbsp;&nbsp;
                  <p style={{ fontSize: "14px" }}>
                    S??? 1 ?????i C??? vi???t, Hai B?? Tr??ng, H?? N???i, Vi???t Nam
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;&nbsp;
                  <a style={{ fontSize: "14px" }} href="#">
                    0123456789{" "}
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;&nbsp;
                  <a style={{ fontSize: "14px" }} href="#">
                    contact.HCI02@gmail.com{" "}
                  </a>
                </span>
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col
              xs={12}
              lg={12}
              className="order-lg-first d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.696199620684!2d105.84315191440699!3d21.004811693972474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1576834089101!5m2!1svi!2s"
                width="1200"
                height="450"
                frameborder="0"
                allowfullscreen=""></iframe>
            </Col>
            <Col xs={12} className="mt-5 d-lg-none">
              <h5>The perfect folder structure for your project</h5>
              <p className="lead mb-4">
                The folder structure is based on the popular{" "}
                <code>create-react-app</code> repository using Sass source files
                for CSS preprocessing.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={6}>
              {/* <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand> */}
              <p>
                HCI02 l?? trang qu???n l?? c??ng vi???c v?? ????nh gi?? KPI cho c??c doanh
                nghi???p s???n xu???t k???t h???p c??c thi???t b??? IOT
              </p>
              <span className="d-flex">
                  <FontAwesomeIcon icon={faMapMarker} /> &nbsp;&nbsp;&nbsp;
                  <p style={{ fontSize: "14px" }}>
                    S??? 1 ?????i C??? vi???t, Hai B?? Tr??ng, H?? N???i, Vi???t Nam
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;&nbsp;
                  <a style={{ fontSize: "14px" }} href="#">
                    0123456789{" "}
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;&nbsp;
                  <a style={{ fontSize: "14px" }} href="#">
                    contact.HCI02@gmail.com{" "}
                  </a>
                </span>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">
                G???i ph???n h???i v??? cho ch??ng t??i
              </span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                Ch??ng t??i s??? kh??ng bao gi??? chia s??? th??ng tin chi ti???t c???a b???n.
                Xem{" "}
                <Card.Link className="text-white" href="#">
                  Ch??nh s??ch B???o m???t
                </Card.Link>
              </p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="d-flex justify-content-center">
                <Image
                  src={Logo}
                  height={60}
                  className="d-block mx-auto mb-3"
                  alt="Themesberg Logo"
                />
              </Card.Link>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo">
                <p className="font-weight-normal font-small mb-0">
                  Copyright ?? HCI02 2019-
                  <span className="current-year">2021</span>. All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
