import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
  Button,
} from "reactstrap";
import { toast } from "react-toastify"

import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// import images
import profile from "../../assets/fc_logo.png";

// import logo from "assets/images/logo.svg"

const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string().test(
    "emailOrPhone",
    "Invalid email or phone number",
    function (value) {
      if (value) {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^\d{10}$/.test(value);
        return isEmail || isPhone;
      }
      return false;
    }
  ),
});

const Login = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://first-cry-j9l8.onrender.com/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);
  const navigate = useNavigate();
  const validation = useFormik({
    initialValues: {
      emailOrPhone: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const foundUser = users.find(
        (user) =>
          user.email === values.emailOrPhone ||
          user.mobile === values.emailOrPhone
      );
      if (foundUser) {
        localStorage.setItem("isAuth", true);
        navigate("/dashboard", {
          replace: true,
        });
        toast.success("Login Successfully")
      } else {
        toast.warning("User is not registered. Please register.")
        navigate("/register", {
          replace: true,
          state: {
            emailOrPhone: values.emailOrPhone,
          },
        });
      }
    },
  });

  return (
    <React.Fragment>
      <div className="my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={7} lg={5} xl={4}>
              <Card className="overflow-hidden border-0">
                <div className=" bg-soft">
                  <Row className="justify-content-center">
                    <Col className="col-5  ">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0 mt-4">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div>
                        <h6>Login / Register</h6>
                      </div>
                      <div className="mt-3">
                        <Label className="small">Email ID/Mobile No.</Label>
                        <Input
                          name="emailOrPhone"
                          className="form-control border-0 border-bottom outline-0 p-0"
                          placeholder="Enter your Email ID or Mobile NO"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.emailOrPhone}
                          invalid={
                            validation.touched.emailOrPhone &&
                            !!validation.errors.emailOrPhone
                          }
                        />
                        {validation.touched.emailOrPhone && (
                          <FormFeedback type="invalid">
                            {validation.errors.emailOrPhone}
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mt-4 d-grid">
                        <Button
                          color="primary"
                          type="submit"
                          className="border-0"
                          style={{ backgroundColor: "#ff7043" }}
                          disabled={
                            validation?.values?.email?.length === 0 ||
                            validation?.values?.password?.length === 0
                          }
                        >
                          Continue
                        </Button>
                      </div>
                      <div className="d-flex align-items-center mt-4 mb-4">
                        <hr className="flex-grow-1" />
                        <div className="mx-3">OR</div>
                        <hr className="flex-grow-1" />
                      </div>

                      <div>
                        <Button outline className="my-2 FcGoogle" block>
                          <AiFillFacebook className="me-2 text-primary" />
                          Login with Facebook
                        </Button>

                        <Button outline className="my-2 FcGoogle" block>
                          <FcGoogle className="me-2" />
                          Login with Google
                        </Button>
                      </div>
                      <div className="mt-4 text-center">
                        <Link
                          to="/register"
                          className="link-no-underline small"
                        >
                          New to FirstCry? Register Here
                        </Link>
                      </div>
                      <hr></hr>
                      <div>
                        <p style={{ fontSize: "12px" }}>
                          By continuing, you agree to Firstcry's{" "}
                          <Link className="link-no-underline ">
                            Conditions of Use
                          </Link>{" "}
                          and{" "}
                          <Link className="link-no-underline ">
                            Privacy Notice.
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
