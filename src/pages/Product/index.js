import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Dashboard/Navbar";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Label,
  Row,
} from "reactstrap";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { boutiqueList } from "../Dashboard/Premium/config";
import { BsFacebook } from "react-icons/bs";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { addToCart, removeFromCart } from "../../store/cartActions";
import Footer from "../Footer";
const ProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = boutiqueList.find((item) => item.id === parseInt(id));
  const { productList } = productDetails?.productDetails;
  const [hoveredCardIndex, setHoveredCardIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(false);
  };

  const handleAddToCart = (e, data) => {
    e.stopPropagation();
    const payload = {
      id: data.id,
      name: data.productName,
      price: parseInt(data.newPrice),
      img: data.img,
    };
    dispatch(addToCart(payload));
    toast.success("Product is Added to Cart");
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
    toast.success("product is Remove");
  };

  return (
    <>
      <Navbar />
      <Row>
        <Col xs={12} md={6}></Col>

        <img
          src={productDetails?.productDetails?.productBackground}
          style={{
            maxHeight: "350px",
            width: "100%",
          }}
          alt={productDetails.title}
        />
      </Row>
      <Row
        className=" align-items-center px-5 py-2 small"
        style={{ color: "#c7c7c7", backgroundColor: "#3d3d3d" }}
      >
        <Col xs={6} md={6} className="">
          {productDetails?.title} (
          {productDetails?.productDetails?.productList?.length} Results)
        </Col>
        <Col xs={6} md={6} className="text-end ">
          <select
            className=" me-3 border-dark p-1"
            style={{ color: "#c7c7c7", backgroundColor: "#3d3d3d" }}
          >
            <option>New Arrivals</option>
            <option>Best Sellers</option>
            <option>Discount</option>
            <option>Price</option>
            <option>Name</option>
          </select>
          <Label className="p-0 m-0">
            {" "}
            Share: <AiFillTwitterCircle size="24px" />{" "}
            <BsFacebook size="21px" /> <TiSocialGooglePlus size="22px" />
          </Label>
        </Col>
      </Row>
      <Row
        className="px-2 small"
        style={{
          borderTop: "1px solid #2d2d2d",
          borderBottom: "1px solid #2d2d2d",
          color: "#c7c7c7",
          backgroundColor: "#373737",
        }}
      >
        <Col>
          <ul className="horizontal-list">
            <li>Filter by: Subcategory</li>
            <li>Discount</li>
            <li>Price</li>
            <li>Age</li>
            <li>Gender</li>
            <li>Colors</li>
            <li>Material</li>
          </ul>
        </Col>
      </Row>
      <Row
        className=" py-2 px-4 small "
        style={{ color: "#c7c7c7", backgroundColor: "#3d3d3d" }}
      >
        <Col className="text-end">
          <input
            value="1400"
            readOnly
            className="bg-dark border-0 p-1"
            style={{ color: "#c7c7c7" }}
          />
          <span className="text-danger">check</span>
        </Col>
      </Row>
      <div className="pt-4 mb-1 " style={{ backgroundColor: "#2F2F2F" }}>
        <Container>
          <Row>
            {productList?.map((data, index) => (
              <Col lg={3} key={index} className="mb-4">
                <Card
                  style={{ cursor: "pointer" }}
                  onClick={() => {}}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardImg
                    top
                    width="100%"
                    height="100%"
                    src={data?.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    {hoveredCardIndex === index ? (
                      <div>
                        <div style={{ fontSize: "14px" }}>
                          &#8377;
                          <span className="fw-bold small me-1">
                            {data?.newPrice}
                          </span>{" "}
                          <span className="me-2 text-muted">|</span>
                          <span className="text-muted  p-0 m-0">
                            <del className="fw-bold small">
                              &#8377;{data?.oldPrice}
                            </del>
                          </span>
                        </div>
                        <div className="mt-2 mb-2">
                          <ul className="productHorizontal-list">
                            <li>4-5Y</li>
                            <li>4-5Y</li>
                            <li>4-5Y</li>
                            <li>+ more</li>
                          </ul>
                        </div>
                        <div style={{ clear: "both" }}>
                          <span className="rounded-square bg-primary mt-2 me-2"></span>
                          <span className="rounded-square bg-danger me-2 "></span>
                          <span className="rounded-square bg-warning "></span>
                        </div>

                        <div className="small">
                          Get it By
                          <span className="fw-bold">{data.date}</span>
                        </div>
                        <div className="mt-1">
                          <Button
                            className="me-3 border-0 "
                            style={{ backgroundColor: "#ff7043" }}
                            onClick={(e) => handleAddToCart(e, data)}
                          >
                            ADD TO CART
                          </Button>
                          <Button className="bg-transparent text-dark">
                            SHORTLIST
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className=" text-center">
                        <h6 className="text-truncate p-0 m-0">
                          {data?.productName}
                        </h6>
                        <div style={{ fontSize: "14px" }}>
                          <p className="text-muted  p-0 m-0 fs">
                            {data?.summary}
                          </p>
                          &#8377;
                          <span className="fw-bold small me-1">
                            {data?.newPrice}
                          </span>{" "}
                          <span className="me-2 text-muted">|</span>
                          <span className="text-muted  p-0 m-0">
                            &#8377;
                            <del className="fw-bold small">
                              {data?.oldPrice}
                            </del>
                          </span>
                        </div>

                        <div className="m-0 p-0" style={{ fontSize: "12px" }}>
                          <AiFillStar color="red" className="me-1" />
                          <span className="text-muted me-1 m-0 p-0">
                            Club price :
                            <span className="text-muted m-0 p-0 ">
                              {" "}
                              &#8377;{data?.clubPrice}
                            </span>
                            <span>
                              <AiOutlineRight />
                            </span>
                          </span>
                        </div>
                        <div className="m-0 p-0" style={{ fontSize: "12px" }}>
                          Get it By{" "}
                          <span className="fw-bold small">{data.date}</span>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
