import React, { useEffect, useRef, useState } from "react";
import summer from "../../../assets/summer.jpeg";
import summer2 from "../../../assets/summer2.jpeg";
import summer3 from "../../../assets/summer3.jpeg";
import summer5 from "../../../assets/summer5.jpeg";
import summer6 from "../../../assets/summer6.jpeg";
import summer7 from "../../../assets/summer7.jpeg";
import summer8 from "../../../assets/summer8.jpeg";
import summer9 from "../../../assets/summer9.jpeg";
import summer10 from "../../../assets/summer10.jpeg";
import summer11 from "../../../assets/summer11.jpeg";
import summer12 from "../../../assets/summer12.jpeg";
import summer13 from "../../../assets/summer13.jpeg";
import brands from "../../../assets/brands.jpeg";
import brand1 from "../../../assets/brand1.jpeg";
import brand2 from "../../../assets/brand2.jpeg";
import brand3 from "../../../assets/brand3.jpeg";
import brand4 from "../../../assets/brand4.jpeg";
import brand5 from "../../../assets/brand5.jpeg";
import brand6 from "../../../assets/brand6.jpeg";
import brand7 from "../../../assets/brand7.jpeg";
import brand8 from "../../../assets/brand8.jpeg";
import fashion1 from "../../../assets/fashion1.jpeg";
import fashion2 from "../../../assets/fashion2.jpeg";
import fashion3 from "../../../assets/fashion3.jpeg";
import party1 from "../../../assets/party1.jpeg";
import party2 from "../../../assets/party2.jpeg";
import acces1 from "../../../assets/acces1.jpeg";
import access2 from "../../../assets/access2.jpeg";
import acess3 from "../../../assets/acess3.jpeg";
import acess4 from "../../../assets/acess4.jpeg";
import acess5 from "../../../assets/acess5.jpeg";
import acess6 from "../../../assets/acess6.jpeg";
import acess7 from "../../../assets/acess7.jpeg";

import { Card, Col, Row } from "reactstrap";
// import brand9 from "../../../assets/brand9.jpeg";
let accessoriesList = [
  { img: acess3 },
  { img: acess4 },
  { img: acess5 },
  { img: acess6 },
  { img: acess7 },
];
let imageList = [
  { img: summer6 },
  { img: summer7 },
  { img: summer8 },
  { img: summer9 },
  { img: summer10 },
  { img: summer11 },
  { img: summer12 },
  { img: summer13 },
];
let brandList = [
  {
    img: brand1,
  },
  { img: brand2 },
  { img: brand3 },
  { img: brand4 },
  { img: brand5 },
  { img: brand6 },
  { img: brand7 },
  { img: brand8 },
];
const SummerSection = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const numImages = imageList.length;
      const padding = 0;
      const totalPadding = (numImages - 1) * padding;
      const width = Math.floor((containerWidth - totalPadding) / numImages);
      setImageWidth(width);
    }
  }, []);
  return (
    <div>
      <Row className="mb-4">
        <Col>
          <img src={summer} className="w-100" alt="" />
          <img src={summer2} className="w-100" alt="" />
          <img src={summer3} className="w-100" alt="" />
          <img src={summer5} className="w-100" alt="" />
          <div className="d-flex flex-wrap" ref={containerRef}>
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img.img}
                style={{ maxWidth: imageWidth, flexBasis: "16%" }}
                alt=""
              />
            ))}
          </div>
          <img src={brands} className="w-100" alt="" />
          <div className="d-flex flex-wrap">
            {brandList.map((img, index) => (
              <img
                key={index}
                src={img.img}
                style={{ maxWidth: imageWidth, flexBasis: "16%" }}
                alt=""
              />
            ))}
          </div>
          <div className="d-flex flex-wrap">
            {brandList.map((img, index) => (
              <img
                key={index}
                src={img.img}
                style={{ maxWidth: imageWidth, flexBasis: "16%" }}
                alt=""
              />
            ))}
          </div>
          <div className="d-flex flex-wrap">
            {brandList.map((img, index) => (
              <img
                key={index}
                src={img.img}
                style={{ maxWidth: imageWidth, flexBasis: "16%" }}
                alt=""
              />
            ))}
          </div>
          <div className="d-flex flex-wrap">
            {brandList.map((img, index) => (
              <img
                key={index}
                src={img.img}
                style={{ maxWidth: imageWidth, flexBasis: "16%" }}
                alt=""
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={24} lg={24} xl={24}>
          <img src={fashion1} className="w-100" alt="" />
          <img src={fashion2} className="w-100" alt="" />
          <img src={fashion3} className="w-100" alt="" />
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <Card className="border-0 border-radius-0">
          <Row className="">
            <Col className="ms-3">
              <img src={party1} className="w-100" alt="" />
            </Col>
            <Col className="me-3">
              <img src={party2} className="w-100" alt="" />
            </Col>
          </Row>
        </Card>
      </Row>

      <Card className="border-0 border-radius-0">
        <Row>
          <Col>
            <img src={acces1} className="w-100" alt="" />
          </Col>
          <Col>
            <img src={access2} className="w-100" alt="" />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SummerSection;
