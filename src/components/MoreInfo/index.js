import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { BsFillTrophyFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import "../../assets/MoreInfo.css";

function MoreInfo() {
  return (
    <>
      <div className="main_bg">
        <Container>
          <div className="more_info1">
            <Row>
              <Col lg={6}>
                <div className="Blog">
                  <h1 className="Custom">Custom Furniture</h1>
                  <h1 className="Built">Built Only For You</h1>
                </div>
              </Col>
              <Col lg={6}>
                <div className="Blog_2">
                  <p className="Blog_info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe dolorum debitis consectetur reprehenderit non aliquam
                    voluptates dolore aut vero consequuntur.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="more_info2">
              <Row>
                <Col md={6} lg={4}>
                  <Card className="card_box">
                    <Card.Body>
                      <BsFillTrophyFill className="show_icon" />
                      <Card.Title className="Blog_title">Trophy</Card.Title>
                      <Card.Text className="Blog_text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates, ea. Perferendis corrupti reiciendis
                        nesciunt rerum velit autem unde numquam nisi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4}>
                  <Card className="card_box">
                    <Card.Body>
                      <BsFillEyeFill className="show_icon" />
                      <Card.Title className="Blog_title">Vision</Card.Title>
                      <Card.Text className="Blog_text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates, ea. Perferendis corrupti reiciendis
                        nesciunt rerum velit autem unde numquam nisi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={4}>
                  <Card className="card_box">
                    <Card.Body>
                      <BsFillJournalBookmarkFill className="show_icon" />
                      <Card.Title className="Blog_title">History</Card.Title>
                      <Card.Text className="Blog_text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates, ea. Perferendis corrupti reiciendis
                        nesciunt rerum velit autem unde numquam nisi
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MoreInfo;
