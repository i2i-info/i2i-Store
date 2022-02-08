import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Entertainment from "../../image/bed.jpeg";
import Chair from "../../image/chair.jpeg";
import Bookshelf from "../../image/bookself.jpeg";
import "../../assets/Featured.css";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <>
      <div className="back_colour">
        <Container>
          <div className="Featured_products">
            <Row>
              <div className="text_block">
                <h1 className="text">Featured Products</h1>
              </div>
              <Col lg={4} md={6}>
                <div className="entertainment_box">
                  <img
                    src={Entertainment}
                    alt="entertainment"
                    className="entertainment"
                  />
                  {/* <BsZoomIn className="search_box"/> */}

                  <div className="products_info">
                    <h5 className="name_box">Entertainment Center</h5>
                    <p className="rate_box">$599.99</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="entertainment_box">
                  <img
                    src={Chair}
                    alt="entertainment"
                    className="entertainment"
                  />
                  <div className="products_info">
                    <h5 className="name_box">Entertainment Center</h5>
                    <p className="rate_box">$599.99</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="entertainment_box">
                  <img
                    src={Bookshelf}
                    alt="entertainment"
                    className="entertainment"
                  />
                  <div className="products_info">
                    <h5 className="name_box">Entertainment Center</h5>
                    <p className="rate_box">$599.99</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Link to="/Products">
            <Button className="btn_Products">All Products</Button>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Featured;
