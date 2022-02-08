import React from "react";

import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import Wave from "../../image/wave_image.png";
import Mobile from "../../image/mobile.svg";
import face from "../../image/face_logo.svg";
import "../../assets/Register.css";
import { BsKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div>
        <img src={Wave} alt="" className="wave_img" />
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="mobile_img">
                <img src={Mobile} alt="mobile" className="m-width" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="register_main">
                <Form className="login_form">
                  <h3 className="register_title">Register</h3>
                  <div className="face_form1">
                    <img src={face} alt="user" className="face_logo" />
                  </div>
                  <div className="register_part">
                    <Row>
                      <Col lg={6} md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <InputGroup hasValidation>
                            <InputGroup.Text
                              id="inputGroupPrepend"
                              className="text_icon"
                            >
                              @
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              aria-describedby="inputGroupPrepend"
                              required
                              className="form_control2"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <InputGroup hasValidation>
                            <InputGroup.Text
                              id="inputGroupPrepend"
                              className="text_icon"
                            >
                              @
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              aria-describedby="inputGroupPrepend"
                              required
                              className="form_control2"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                  <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <InputGroup hasValidation className="group_form">
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="text_icon"
                      >
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="User Email"
                        aria-describedby="inputGroupPrepend"
                        className="form_control"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup hasValidation>
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="text_icon2"
                      >
                        <BsKeyFill />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Your Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="form_control2"
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* <Form.Control
                    type="text"
                    placeholder="Forgot Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    className="form_control2"
                  /> */}
                  <Button type="submit" className="btn_Register">
                    Register
                  </Button>
                  <div className="for_log">
                    <div className="forgot_link password_link">
                      {/* <a href="#" className="password_link"> */}
                        Forgot Password
                      
                    </div>
                    <div>
                      <p className="forgot-password text-right">
                        Already have an accout?&nbsp;&nbsp;
                        <Link to="/Login" className="log_link">
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
