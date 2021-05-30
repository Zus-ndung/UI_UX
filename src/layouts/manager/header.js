
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Nav, Image, Navbar, Form, Dropdown, Container, InputGroup } from '@themesberg/react-bootstrap';
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";

export default function Header (props={}) {

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="header mb-6">
        <div className="d-flex justify-content-end w-100">
        <div className="d-flex align-items-center" style={{paddingRight:"53%"}}>
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>

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
    </Navbar>
  );
};
