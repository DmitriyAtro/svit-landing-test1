import React from "react";
import BG from "../Img/BG.jpg";
import "./Integrations.css";

const Integrations = () => {
  return (
    <div className="integrations-container">
      <div className="integration-text">
        <h1>More than the sum of its parts.</h1>
        <p>
          We integrate with all major smart home hardware to control it from a
          single place
        </p>
      </div>
      <div className="integration-animation">
        <img src={BG} alt=" " width={1440} />
      </div>
    </div>
  );
};
export default Integrations;
