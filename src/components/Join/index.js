import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../../assets/Join.css";

function join() {
  return (
    <>
      <div className="main_blog">
        <Container>
          <Row>
            <Col>
              <div className="Blog_join">
                <h3 className="join_title">
                  Join our Newsletter and Get 20% off
                </h3>
              </div>
            </Col>
          </Row>

          <Row className="join_end">
            <Col lg={6}>
              <div className="join_p">
                <p className="join_p2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat sint unde quaerat ratione soluta veniam provident
                  adipisci cumque eveniet tempore?
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Email_main">
                <Form>
                  <Form.Group
                    className="mb-3 Email_form"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="Email_box"
                    />
                    <Button type="submit" className="sub_button">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default join;
