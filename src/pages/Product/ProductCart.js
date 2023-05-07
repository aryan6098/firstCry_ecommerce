import React, { useState } from "react";
import { Col, Row, Card, CardBody, Table, Input } from "reactstrap";
import Navbar from "../Dashboard/Navbar";
import { Link } from "react-router-dom";
const ProductCart = () => {
  const price = 465;
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const incrementQunatity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + price);
  };
  const decresetQunatity = () => {
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - price);
  };
  return (
    <>
      <Navbar />
      <Row>
        <Col xl={8}>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table align-middle mb-0 table-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Product Desc</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th colSpan="2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={"product.img"}
                          alt="product-img"
                          title="product-img"
                          className="avatar-md"
                        />
                      </td>
                      <td>
                        <h5 className="font-size-14 text-truncate">abc</h5>
                      </td>
                      <td> &#8377; {price}</td>
                      <td>
                        <div style={{ width: "120px" }}>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={incrementQunatity}
                              >
                                +
                              </button>
                            </div>
                            <Input
                              type="text"
                              value={quantity}
                              name="demo_vertical"
                              readOnly
                              className="border-0"
                            />
                            <div className="input-group-append">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={decresetQunatity}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>&#8377; {totalPrice}</td>
                      <td>
                        <Link to="#" className="action-icon text-danger">
                          {" "}
                          <i className="mdi mdi-trash-can font-size-18" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Row className="mt-4">
                <Col sm="6">
                  <Link to="/ecommerce-products" className="btn btn-secondary">
                    <i className="mdi mdi-arrow-left me-1" /> Continue Shopping{" "}
                  </Link>
                </Col>
                <Col sm="6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <Link to="/ecommerce-checkout" className="btn btn-success">
                      <i className="mdi mdi-cart-arrow-right me-1" /> Checkout{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductCart;
