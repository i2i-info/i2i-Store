import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../assets/ProductsDetails.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcumbs";

const ProductsDetails = () => {

  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
    // console.log("num", num);
  }
  const decrement = () => {
    if (num >  0){
      setNum(num - 1);
    } else{
      alert("Sorry, Zero Limit Reached")
      setNum(0);
    }
    
    // console.log("num", num);
  }

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <Layout>
      <Breadcrumbs pathName="ProductsDetails" />
      <Container>
        <div className="back_product">
          <Link to="/Products">
            <Button className="back_btn">Back To Products</Button>
          </Link>
        </div>
        <Row>
          <Col lg={6}>
            <div className="image_form1">
              <ImageGallery
                lazyLoad={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                items={images}
                className="full_image"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="products_main">
              <div className="pro_details_info">
                <h2 className="pro_details_title">Entertainment Center</h2>
              </div>
              <div className="review_form">
                <div className="review">
                  <span>+++++</span>
                </div>
                <div className="review_form2">
                  <p className="review_title">(100 customer reviews)</p>
                </div>
              </div>
              <div className="price">
                <h5 className="price_amount">$599.99</h5>
              </div>
              <div className="pro_sub_title">
                <p className="pro_paragraph">
                  Cloud bread VHS hell of banjo bicycle rights jianbing umami
                  mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                  dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                  typewriter fingerstache pinterest pork belly narwhal. Schlitz
                  venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                  trust fund hashtag kinfolk microdosing gochujang live-edge
                </p>
              </div>
              <div className="review_info">
                <p className="available">
                  <span className="detail_title">Available : </span>
                  In stock
                </p>
                <p className="available">
                  <span className="detail_title">SKU :</span>
                  recNZ0koOqEmilmoz
                </p>
                <p className="available">
                  <span className="detail_title">Brand : </span>
                  caressa
                </p>
              </div>
              <div>
                <span className="detail_title">colors :</span>
              </div>
              <div>
                <div className="amount_form">
                  <Button className="minus" onClick={decrement}>
                    <h1 className="symbol">-</h1>
                  </Button>
                  <h2 className="totle">{num}</h2>
                  <Button className="plus" onClick={increment}>
                    <h1 className="symbol">+</h1>
                  </Button>
                </div>
                <div className="add_product">
                  <Link to="/Cart">
                    <Button className="add_btn">add to cart</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductsDetails;
