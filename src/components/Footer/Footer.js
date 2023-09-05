import React from "react";
import "./Footer.css";
import Logo from "../Img/Logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column1">
        <ul>
          <li>Svit home</li>
          <li>Overwiev</li>
          <li>Software</li>
          <li>Modules</li>
          <li>Optional Equipment</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="footer-column2">
        <ul>
          <li>Main</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="footer-column3">
        <ul>
          <li>Contact us</li>
          <li>
            <a href="sales@svit.io">sales@svit.io</a>
          </li>
          <li>+380(97) 642 09 78</li>
        </ul>
      </div>
      <div className="footer-column4">
        <li>Subscribe to newsletter</li>
      </div>
      <div className="footer-column5">
        <ul>
          <li>
            <img src={Logo} />
          </li>
          <li>All rights reserved ©2023 SVIT</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
