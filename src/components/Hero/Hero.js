import React from "react";
import VideoBackground from "../Img/VideoBackground.png";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero-banner-container">
        {/* <div className="hero-bannerImage-container">
          <img src={VideoBackground} alt="" />
        </div> */}
        <div className="hero-text-section">
          <h1 className="primary-heading">Build your own world of comfort</h1>
          <p className="primary-text">A smart home system</p>
          <button className="secondary-button">Get free consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
