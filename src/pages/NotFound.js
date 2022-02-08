import React from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import "../assets/NotFound.css";

function NotFound() {

  const backToHome = () => {
    window.location = "/";
  };

  return (
    <Layout>
      <div className="back_colour">
        <Container className="page_not_page">
          <div className="color">
            <div>
              <h1 className="fw-bolder display-1 head-404">404</h1>
            </div>
            <div>
              <h3 className="fw-normal display-6">
                Sorry, the page you tried cannot be found
              </h3>
            </div>
            <Button className="back_home" onClick={backToHome}>
              Back Home
            </Button>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default NotFound;
