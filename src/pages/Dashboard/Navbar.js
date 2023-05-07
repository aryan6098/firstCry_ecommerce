import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import profile from "../../assets/fc_logo.png";
import { useNavigate } from "react-router-dom";
const Example = (props) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        className="px-5"
        style={{ height: "60px" }}
      >
        <NavbarBrand href="/dashboard">
          <img src={profile} alt="" className="img-fluid" />
        </NavbarBrand>

        <div className="flex-grow-1 ">
          <InputGroup className="w-50">
            <Input placeholder="Search" />
            <Button color="primary">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
        <Nav navbar>
          <NavItem>
            <NavLink href="#">Select Location</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Store & preschools</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Track Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">FirstCry Parenting</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Categories
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Category 1</DropdownItem>
              <DropdownItem>Category 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Category 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Brands</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/product-cart">
              <div style={{ position: "relative" }}>
                <FaShoppingCart />
                {
                  <span
                    className="cartBadge"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {totalQuantity && totalQuantity}
                  </span>
                }
              </div>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="" onClick={logout}>
              <FaSignOutAlt className="logout-icon" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;
