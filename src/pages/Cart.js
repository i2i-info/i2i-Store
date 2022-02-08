import React, { useState } from "react";
import { Container, Card, Button, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Chair from "../image/chair.jpeg";
import Bed from "../image/bed.jpeg";
import "../assets/Cart.css";
import Breadcrumbs from "../components/Breadcumbs";
function Cart() {
  const [num, setNum] = useState(1);

  const increment = () => {
    if (num < 7){
      setNum(num + 1);
    }else{
      alert("Sorry, you Buy Maximum 7 Products")
      setNum(7);
    }
  }
  const decrement = () => {
    if (num >  1){
      setNum(num - 1);
    } else{
      alert("Sorry,  You Buy Minimum 1 Products")
      setNum(1);
    }
    
    // console.log("num", num);
  }

  return (
    <Layout>
      <Breadcrumbs pathName="Cart" />
      <Container>
        <Row>
          <Col sm={12}>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th className="pro_info">item</th>
                  <th className="pro_info">price</th>
                  <th className="pro_info">quantity</th>
                  <th className="pro_info">subtotal</th>
                  <th className="pro_info">Delete</th>
                </tr>
              </thead>
              <tbody className="table_body">
                <tr className="table_data">
                  <td className="cart_detail">
                    <img src={Chair} alt="entertainment" className="cart_img" />
                    <div className="product_details">
                      <h5 className="product_name">modern poster</h5>
                      <p className="product_color">color : Black</p>
                    </div>
                  </td>
                  <td className="first_price">$30.99</td>
                  <td>
                    <div className="pro_quantity">
                      <Button className="minus" onClick={decrement}>
                        <h1 className="symbol">-</h1>
                      </Button>
                      <h4 className="totle">{num}</h4>
                      <Button className="plus" onClick={increment}>
                        <h1 className="symbol">+</h1>
                      </Button>
                    </div>
                  </td>
                  <td className="subtotal">$30.99</td>
                  <td className="pd-0">
                    <Button className="btn_delete">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td className="cart_detail">
                    <img src={Bed} alt="entertainment" className="cart_img" />
                    <div className="product_details">
                      <h5 className="product_name">modern poster</h5>
                      <p className="product_color">color : Black</p>
                    </div>
                  </td>
                  <td className="first_price">$40.99</td>
                  <td>
                    <div className="pro_quantity">
                      <Button className="minus" onClick={decrement}>
                        <h1 className="symbol">-</h1>
                      </Button>
                      <h4 className="totle">{num}</h4>
                      <Button className="plus" onClick={increment}>
                        <h1 className="symbol">+</h1>
                      </Button>
                    </div>
                  </td>
                  <td className="subtotal">$40.99</td>
                  <td className="pd-0">
                    <Button className="btn_delete">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <div className="btn_palce">
          <div className="btn_link">
            <Link to="/Products">
              <Button className="continue_btn">continue shopping</Button>
            </Link>
          </div>
          <div className="btn_cartclear">
            <Button className="clear_btn">clear shopping cart</Button>
          </div>
        </div>
        <div className="cart_info">
          <Card className="cart_card">
            <Card.Body className="card_body">
              <h5 className="card_title">
                <span className="carddetail_title"> SubTotal : </span>
                $30.99
              </h5>
              <p className="card_pare">
                <span className="detail_title"> shipping fee : </span>
                $5.34
              </p>
              <h5 className="cardsub_title">
                <span className="card_totle"> order total : </span>
                $36.33
              </h5>
              <Link to="/Login">
                <Button className="cart_login">Login</Button>
              </Link>
            </Card.Body>
          </Card>
        </div> 
      </Container>
    </Layout>
  );
}

export default Cart;
