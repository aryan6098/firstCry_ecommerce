import React, { useState } from "react";

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
  Alert,
  Toast,
} from "reactstrap";
import { toast } from "react-toastify"

import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// import images
import profile from "../../assets/fc_logo.png";

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  mobile: Yup.string().matches(/^\d{10}$/, "Invalid mobile number"),
  email: Yup.string().email("Invalid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Please enter a valid Password"),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();
  const history = useLocation();
  const emailOrPhone = history?.state?.emailOrPhone;
  const validation = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,

    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to register");
        }
        toast.success("Register Successfully")
        navigate("/", { replace: true });
      } catch (error) {
        toast.error(error?.message)
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
                      <p className="M18_42 txt-heading login-heading">
                        <Link to="/" className="text-black">
                          <IoIosArrowBack className="login-back-arrow me-2 bold" />
                        </Link>
                        Register
                      </p>
                      {emailOrPhone && (
                        <Alert color="secondary">
                          <p
                            className=" p-0 m-0 text-danger "
                            style={{ fontSize: "12px", lineHeight: "17px" }}
                          >
                            Kindly fill & submit the below information to create
                            your FirstCry account with{" "}
                            <span className="text-primary">{emailOrPhone}</span>
                          </p>
                        </Alert>
                      )}

                      <div className="mt-2">
                        <Label className="small">Full Name</Label>
                        <Input
                          name="fullName"
                          className="form-control border-0 border-bottom outline-0 p-0"
                          placeholder="Enter your full name"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.fullName}
                          invalid={
                            validation.touched.fullName &&
                            !!validation.errors.fullName
                          }
                        />
                        {validation.touched.fullName && (
                          <FormFeedback type="invalid">
                            {validation.errors.fullName}
                          </FormFeedback>
                        )}
                      </div>
                      <div className="mt-2">
                        <Label className="small">Mobile No.</Label>
                        <Input
                          name="mobile"
                          className="form-control border-0 border-bottom outline-0 p-0"
                          placeholder="Enter your mobile number"
                          type="tel"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.mobile}
                          invalid={
                            validation.touched.mobile &&
                            !!validation.errors.mobile
                          }
                        />
                        {validation.touched.mobile && (
                          <FormFeedback type="invalid">
                            {validation.errors.mobile}
                          </FormFeedback>
                        )}
                        <p className="fs">
                          OTP will be sent on this Mobile No. for verification.
                        </p>
                      </div>
                      <div>
                        <Label className="small">Email</Label>
                        <Input
                          name="email"
                          className="form-control border-0 border-bottom outline-0 p-0"
                          placeholder="Enter your email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email}
                          invalid={
                            validation.touched.email &&
                            !!validation.errors.email
                          }
                        />
                        {validation.touched.email && (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        )}
                      </div>
                      <div className="mt-2">
                        <Label className="small">Password</Label>
                        <div className="input-group position-relative">
                          <Input
                            name="password"
                            className="form-control border-0 border-bottom outline-0 p-0"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password}
                            invalid={
                              validation.touched.password &&
                              !!validation.errors.password
                            }
                          />

                          <i
                            className="position-absolute top-50 end-0 translate-middle-y"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {!validation.errors.password &&
                              (showPassword ? <FaEyeSlash /> : <FaEye />)}
                          </i>

                          {validation.touched.password && (
                            <FormFeedback type="invalid">
                              {validation.errors.password}
                            </FormFeedback>
                          )}
                        </div>
                        <div>
                          <p className="fs p-1">
                            Password must be at least 8 characters long with 1
                            Uppercase, 1 Lowercase & 1 Numeric character.
                          </p>
                        </div>
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

export default Register;
