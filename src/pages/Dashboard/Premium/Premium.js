import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardImg, Button } from "reactstrap";
import img1 from "../../../assets/img1.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { boutiquesData, boutiqueList } from "./config";
import { AiFillCaretRight } from "react-icons/ai";

const Premium = () => {
    const navigate = useNavigate()
  const [hoveredCardIndex, setHoveredCardIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(-1);
  };

  return (
    <>
      <div className="d-flex justify-content-center p-3 pb-0">
        <h4>PREMIUM BOUTIQUES</h4>
      </div>
      <Row className="mb-3">

        {boutiqueList &&
          boutiqueList.map((data, index) => (
            <Col lg="4" key={index} className="mb-3">
              <Card
                className={`position-relative overflow-hidden transition-all duration-200 ${
                  hoveredCardIndex === index ? "card-hover" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={()=>navigate(`/product-page/${data?.id}`)}
              >
                <div style={{ position: "relative" }}>
                  <CardImg
                    top
                    width="100%"
                    height="300px"
                    src={data.img}
                    alt="Card image cap"
                  />
                  {hoveredCardIndex === index && (
                    <div
                      className="position-absolute w-100 d-flex justify-content-center px-4 pb-2"
                      style={{ bottom: "0" }}
                    >
                      <Button className="w-100 btn boutiqueButton">
                        {data.buttonTitle}
                      </Button>
                    </div>
                  )}
                </div>
                <CardBody >
                  <p className="card-text p-0 m-0">{data.title}</p>
                  <div className="d-flex justify-content-between p-0 m-0">
                    {hoveredCardIndex === index ? (
                      <Link
                        href="#"
                        className="card-link text-dark fw-bold link-no-underline "
                      >
                        SHOP NOW
                      </Link>
                    ) : (
                      <p className="text-secondary p-0 m-0 small">{data.details}</p>
                    )}
                    <Link
                      href="#"
                      className="card-link text-danger link-no-underline small "
                    >
                      NEW TODAY
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
      <Row className="mb-4"> 
        <Col>
          <Card className="cardShadow">
            <CardBody className="d-flex justify-content-center">
              <p className="p-0 m-0">
                View All Boutiques <AiFillCaretRight />
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Premium;
