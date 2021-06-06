
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Nav, Image, Navbar, Form, Dropdown, Container, InputGroup ,Row, Col} from '@themesberg/react-bootstrap';
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";

export default function Header (props={}) {

  return (
      <Row className="mb-5">
        <Col md={{span:9, offset:3}}>
          <Container fluid className="header">
            <div className="d-flex justify-content-end mt-2">
              <Nav className="align-items-center">
                <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                    <div className="media d-flex align-items-center">
                      <i className="fa fa-bell fa-7x" style={{color:"gray", fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;
                      <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                      <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                        <span className="mb-0 font-small fw-bold">Bonnie Green</span>
                      </div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                      <Dropdown.Item>
                        <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Hello, Bonnie Green
                      </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="fw-bold">
                      <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
          </Container>
          <div className="mt-2"><hr style={{height: "2px", color: "black"}}></hr></div>
        </Col>
        
      </Row>
  );
};
