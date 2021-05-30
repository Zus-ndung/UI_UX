import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";

import BgImage from "../../assets/img/illustrations/signin.svg";
import { useForm } from "react-hook-form";
import { UserApiFake } from "../../data/account";
import { ROLE } from "../../constant/role";
import { useNavigate } from "react-router-dom";
import * as toastify from "../../utils/react-toastify-custom";

export default function SignInPage(props = {}) {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  //method
  const onSubmit = (data) => {
    const [isLogin, role] = UserApiFake.LoginFake(data);
    if (isLogin) {
      toastify.toastifySuccess("Login is success");
      if (role === ROLE.ADMIN) {
        navigate("/manager");
      } else {
        navigate("/worker/dashborad");
      }
    } else {
      toastify.toastifyError("Email or Password is invalid");
    }
  };

  return (
    <main>
      <section className="d-flex align-items-center justify-content-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in</h3>
                </div>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                        {...register("email")}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          {...register("password")}
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-end align-items-center mb-4">
                      <Card.Link className="small text-end">
                        Lost password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
