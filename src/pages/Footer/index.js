import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="mt-1 px-5" style={{backgroundColor:"#D9F3F3"}}>
      <Container fluid>
        <Row>
          <Col>CATEGORIES</Col>
          <Col>FIRSTCRY PARENTING</Col>
          <Col>SHIPPING & POLICIES</Col>
          <Col>OUR APPS</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
