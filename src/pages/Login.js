import React from "react";
import { BsKeyFill } from "react-icons/bs";
import { Form, Button, Container, InputGroup, Row, Col } from "react-bootstrap";
import face from "../image/face_logo.svg";
import Wave from "../image/wave_image.png";
import Mobile from "../image/mobile.svg";
import "../assets/Login.css";
import logo from "../image/I2i_store.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <img src={Wave} alt="" className="wave_img" />
        <Container>
          <Row className="login">
            <Col lg={6} md={6}>
              <div className="mobile_img">
                <img src={Mobile} alt="mobile" className="m-width" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="main_form">
                <div>
                  <h1>Welcome</h1>
                  <h4>To</h4>
                  <img src={logo} alt="logo"  className="logoimage"/>
                </div>
                <div className="face_form">
                  <img src={face} alt="user" className="face_logo" />
                </div>
                <div className="login_interface">
                  <Form className="login_form">
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
                          placeholder="User Name / ID"
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
                    <div className="forgot_link password_link">
                      {/* <Link to="#" className="password_link"> */}
                        Forgot Password
                      {/* </Link> */}
                    </div>
                    <Button type="submit" className="btn_login">
                      Login
                    </Button>
                    <Link to="/register" className="password_link">
                      <Button type="submit" className="btn_login">
                        Register
                      </Button>
                    </Link>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
