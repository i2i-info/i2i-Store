import React from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Table from "../image/slider.png";
import Layout from "../components/Layout";
import Featured from "../components/Featured";
import Join from "../components/Join";
import MoreInfo from "../components/MoreInfo";
import { Link } from "react-router-dom";
import "../assets/Home.css";

const Home = () => {
  const JumptoProducts = () =>{
    window.location = "/Products";
  }
  return (
    <Layout>
      <Container>
        <div className="home_main">
          <Row>
            <Col lg={6}>
              <div className="info">
                <h1 className="title">Design Your</h1>
                <h1 className="title_2">Comfort Zone</h1>
                <div className="sub_title">
                  <p className="paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, at sed omnis corporis doloremque possimus velit!
                    Repudiandae nisi odit, aperiam odio ducimus, obcaecati
                    libero et quia tempora excepturi quis alias?
                  </p>
                </div>
                <div className="btn_left">
                  {/* <Link to="/Products"> */}
                    <Button className="shop_button" onClick={JumptoProducts}>SHOP NOW</Button>
                  {/* </Link> */}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image_box">
                <img src={Table} alt="table" className="Nice_table" />
              </div>
            </Col>
            
          </Row>
        </div>
      </Container>
      <Featured />
      <MoreInfo />
      <Join />
    </Layout>
  );
};

export default Home;
