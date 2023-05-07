import React from "react";
import { Container } from "reactstrap";

const Layout = (props) => {
  const {  backgroundColor } = props;

  return (
    <div className="d-flex p-0" style={{backgroundColor: backgroundColor}}>
      <Container fluid className="container p-0" >
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
