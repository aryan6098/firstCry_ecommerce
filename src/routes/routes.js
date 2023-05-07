import React from "react";
import { Navigate } from "react-router-dom";
const Authmiddleware = (props) => {
  const token = localStorage.getItem("isAuth");

  if (token) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};

export default Authmiddleware;
