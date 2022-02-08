import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/Breadcrumbs.css";
function Breadcrumbs({ pathName }) {
  return (
    <>
      <div className="bread_back">
        <Container>
          <Breadcrumb className="breadcrumbs">
            <Breadcrumb.Item className="bread">
              <Link to="/" className="link_home">
                <span className="">Home </span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="">{pathName}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    </>
  );
}

export default Breadcrumbs;
