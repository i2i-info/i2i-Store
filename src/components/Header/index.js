import React from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { BsCart4, BsPersonFill } from "react-icons/bs";
import HeaderCanvas from "./Offcanvas/Offcanvas";
import Badge from "react-bootstrap/Badge";
import "../../assets/Header.css";
import Logo from "../../image/I2i_store.png";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" className="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="responsive-navbar-nav-desktop">
            <Nav className="link_nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>

              <Nav.Link href="/cart">
                <div className="group">
                  <BsCart4 className="icon" />
                  <Badge
                    className="badge"
                    bg="secondary"
                    pill
                    as="span"
                    id="lblCartCount"
                  >
                    2
                  </Badge>
                </div>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                <BsPersonFill className="icon_box" />
              </Nav.Link>
            </Nav>
            {/* <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  className="btn_switch"
                />
              </Form> */}
          </Navbar.Collapse>

          <div className="header_view_xs">
            <HeaderCanvas />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
