import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedIn} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="blur footer-blur"></div>
    </div>
  );
};

export default Footer;
