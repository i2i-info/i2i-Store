import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Desk from "../image/desk.jpeg";
import "../assets/About.css";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcumbs";
function About() {
  return (
    <Layout>
      <Breadcrumbs pathName="About"/>
      <Container>
        <Row className="about_page">
          <Col lg={6}>
            <div className="nice_desk">
              <img src={Desk} alt="desk" className="desk_image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_info">
              <h2 className="about_title">Our Story</h2>
              <p className="about_paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default About;
