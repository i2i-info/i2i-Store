import React from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsCart4, BsPersonPlusFill } from "react-icons/bs";
import Logo from "../../../image/Logo.svg";
import "../../../assets/Offcanvas.css";

const HeaderCanvas = () => {
  return (
    <>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        // placement="end"
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <img src={Logo} alt="logo" className="logo"></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="link_nav">
              <Nav.Link href="/" className="Home_offcanvas">Home</Nav.Link>
              <Nav.Link href="/about" className="About_offcanvas">About</Nav.Link>
              <Nav.Link href="/products" className="Products_offcanvas">Products</Nav.Link>
              <div className="offcanvas_icon" >
                <Nav.Link href="/cart">
                  <BsCart4 className="icon_offcanvas" />
                </Nav.Link>
                <div className="login_offcanvas">
                  <Nav.Link eventKey={2} href="/login">
                    <BsPersonPlusFill className="login_icon" />
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};
export default HeaderCanvas;
