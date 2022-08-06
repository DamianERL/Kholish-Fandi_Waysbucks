import React from "react";
import { NavDropdown } from "react-bootstrap";

import Photo from "../../../assets/Ellipse 1.png";
import Profile from "../../../assets/user 2.svg";
import AddProduct from "../../../assets/AddProduct.svg";
import AddToping from "../../../assets/topping 1.svg";
import Logout from "../../../assets/logout 1.png";

export default function Dropdown() {
  return (
    <NavDropdown
      title={<img src={Photo} alt="photoProfile" className="navbarPhoto" />}
      className="navImg"
    >
      <NavDropdown.Item href="/profile">
        <img src={Profile} alt="profile" className="d-flex dropdown-img" />
        <p className="d-flex mb-0 dropCust pe-4">Profile</p>
      </NavDropdown.Item>

      <NavDropdown.Item href="/add-product" className="mb-2 mt-2 ps-3 d-none">
        <img
          src={AddProduct}
          alt="AddProduct"
          className="d-flex dropdown-img"
        />
        <p className="d-flex mb-0 ps-3 dropAdmin">AddProduct</p>
      </NavDropdown.Item>

      <NavDropdown.Item className="mb-2 mt-3 ps-3 d-none">
        <img
          src={AddToping}
          alt="AddToping"
          className="d-flex dropdown-img navAddTopping"
        />
        <p className="d-flex mb-0 dropAdmin ">AddToping</p>
      </NavDropdown.Item>
      <hr />
      <NavDropdown.Item>
        <img src={Logout} alt="logout" className="d-flex dropdown-img" />
        <p className="d-flex mb-0 dropCust pe-4">Logout</p>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
