import React from "react";
import "./CTA.css";
import Logo from "../Img/Logo.svg";

const CTA = () => {
  return (
    <div className="cta-container">
      <img src={Logo} />
      <h1>Start your journey to the world of comfort</h1>
      <button className="secondary-button">Get free consultation</button>
    </div>
  );
};
export default CTA;
