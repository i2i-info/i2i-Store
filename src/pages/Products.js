import React, { useState } from "react";
import { Button, Container, Dropdown, Row, Col } from "react-bootstrap";
import { BsGridFill, BsCardText } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import Chair from "../image/chair.jpeg";
import Armchair from "../image/Armchair.jpeg";
import Albany_Table from "../image/albany_table.jpeg";
import Wooden_Desk from "../image/wooden_desk.jpeg";
import Bed from "../image/bed.jpeg"
import Wooden_Table from "../image/wooden_table.jpeg";
import Vase_Table from "../image/vase_table.jpeg";
import Sofa_Set from "../image/sofa_set.jpeg";
import Barstool from "../image/barstool.jpeg";
import "../assets/Products.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcumbs";

function Products() {
  const [isActive, setIsActive] = useState(true);

  const handleGridData = () => {
    setIsActive(true);
  };

  const handleListData = () => {
    setIsActive(false);
  };

  return (
    <Layout>
      <Breadcrumbs pathName="Products" />

      <Container>
        <div className="d-f">
          <Row>
            <Col md={2}>
              <div className="info_products">
                <div className="Form_control">
                  <input
                    type="text"
                    className="search_box"
                    placeholder="Search"
                  ></input>
                </div>
                <div className="Form_control">
                  <h5 className="Category_title">Category</h5>
                </div>
                <div className="button_form">
                  <Button className="all_btn">all</Button>
                  <Button className="all_btn">Office</Button>
                  <Button className="all_btn">Living Room</Button>
                  <Button className="all_btn">Kitchen</Button>
                  <Button className="all_btn">Bedroom</Button>
                  <Button className="all_btn">Dining</Button>
                  <Button className="all_btn">Kids</Button>
                </div>
                <div>
                  <h5 className="Category_title">Company</h5>
                  <Dropdown className="drop_btn">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="drop_toggle"
                    >
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drop_menu">
                      <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Marcos</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Liddy </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Ikea</Dropdown.Item>
                      <Dropdown.Item href="#/action-5">caressa</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <h5 className="Category_title">Colors</h5>
                  <div>
                    <Button className="all_btn">all</Button>
                  </div>
                </div>
                <div>
                  <h5 className="Category_title">Price</h5>
                  <p className="price">$500.99</p>
                  <div className="range_view">
                    <input type="range" className="range_box" />
                  </div>
                </div>
                <div className="check">
                  <label>free shipping</label>
                  <input type="checkbox" />
                </div>
                <div className="c_filter">
                  <Button className="filters">Clear filters</Button>
                </div>
              </div>
            </Col>
            <Col md={10}>
              <div className="product_info">
                <div className="main_btn_box">
                  <Button
                    type="submit"
                    className="front_icon"
                    onClick={handleGridData}
                  >
                    <BsGridFill className="icon_box1" />
                  </Button>
                  <Button
                    type="submit"
                    className="front_icon2"
                    onClick={handleListData}
                  >
                    <BsCardText className="icon_box2" />
                  </Button>
                </div>
                <div className="paragraph1">
                  <p className="header_title">23 Products Found</p>
                </div>
                <span className="line"></span>
                <div>
                  <label className="h_label">Sort By</label>
                </div>
                <div>
                  <Dropdown className="Dropd_btn2">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="Drop_toggle"
                    >
                      price (lowest)
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="Drop_menu2">
                      <Dropdown.Item href="#/action-1">
                        price (lowest)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        price (highest)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        name (a - z)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        name (z - a)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <Col lg={10} className="photo_column">
                <div className="photos_products">
                  {isActive ? (
                    <Row>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Chair}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Albany_Table}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Armchair}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Wooden_Desk}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Bed}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Wooden_Table}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Vase_Table}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                        <div className="entertainment_box">
                          <div className="image_hober_box">
                            <img
                              src={Sofa_Set}
                              alt="entertainment"
                              className="entertainment"
                            />
                            <div className="overlay"></div>
                            <Link to="/ProductsDetails" replace={false}>
                              <div className="search_icon_box">
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="search_icon"
                                />
                              </div>
                            </Link>
                          </div>

                          <div className="products_info">
                            <h5 className="name_box">Entertainment Center</h5>
                            <p className="rate_box">$599.99</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    // list data view ...............................................................
                    <Row>
                      <Col lg={4}>
                        <img
                          src={Chair}
                          alt="entertainment"
                          className="entertainment"
                        />
                      </Col>
                      <Col lg={8}>
                        <div className="list_data">
                          <h4 className="list_name">modern poster</h4>
                          <h5 className="list_price">$30.99</h5>
                          <p className="list_paragraph">
                            Cloud bread VHS hell of banjo bicycle rights
                            jianbing umami mumblecore etsy 8-bit pok pok +1
                            wolf. Vexillologist yr dreamcatcher waistcoat,
                            authentic.
                          </p>
                          <Link to="/ProductsDetails" replace={false}>
                            <Button className="list_btn">Details</Button>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <img
                          src={Barstool}
                          alt="entertainment"
                          className="entertainment"
                        />
                      </Col>
                      <Col lg={8}>
                        <div className="list_data">
                          <h4 className="list_name">modern poster</h4>
                          <h5 className="list_price">$30.99</h5>
                          <p className="list_paragraph">
                            Cloud bread VHS hell of banjo bicycle rights
                            jianbing umami mumblecore etsy 8-bit pok pok +1
                            wolf. Vexillologist yr dreamcatcher waistcoat,
                            authentic.
                          </p>
                          <Link to="/ProductsDetails" replace={false}>
                            <Button className="list_btn">Details</Button>
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <img
                          src={Bed}
                          alt="entertainment"
                          className="entertainment"
                        />
                      </Col>
                      <Col lg={8}>
                        <div className="list_data">
                          <h4 className="list_name">modern poster</h4>
                          <h5 className="list_price">$30.99</h5>
                          <p className="list_paragraph">
                            Cloud bread VHS hell of banjo bicycle rights
                            jianbing umami mumblecore etsy 8-bit pok pok +1
                            wolf. Vexillologist yr dreamcatcher waistcoat,
                            authentic.
                          </p>
                          <Link to="/ProductsDetails" replace={false}>
                            <Button className="list_btn">Details</Button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  )}
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default Products;
