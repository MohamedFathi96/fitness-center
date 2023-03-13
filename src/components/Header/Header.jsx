import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="home">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#program">Programs</a>
        </li>
        <li>
          <a href="#why-us">Why Us</a>
        </li>
        <li>
          <a href="#plains">Plans</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
