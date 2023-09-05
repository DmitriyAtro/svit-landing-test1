import React from "react";
import "./Application.css";
import apple from "../Img/apple.png";
import google from "../Img/google.png";
import iphone from "../Img/iphone.png";

const Application = () => {
  return (
    <div className="application-container">
      <div className="application-text">
        <h1>The app as an extension of your home</h1>
        <p>
          Fine-tuned for each customer individually, our app puts control over
          your home at your fingertips.
        </p>
      </div>
      <div className="appliction-links">
        <a href="">
          {" "}
          <img src={apple} />{" "}
        </a>
        <a href="">
          {" "}
          <img src={google} />{" "}
        </a>
      </div>
      <div className="application-device">
        <img src={iphone} />
      </div>
    </div>
  );
};

export default Application;
