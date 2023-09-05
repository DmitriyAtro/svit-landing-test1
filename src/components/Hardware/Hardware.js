import React from "react";
import "./Hardware.css";

const Hardware = () => {
  return (
    <div className="hardware-container">
      <div className="hardware-card1">
        <div className="hardware-text-container">
          <h1>Start small</h1>
          <p>
            A single module can controls one type of hardware — e.g. lights or
            curtains.
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="hardware-card2">
        <div className="hardware-text-container">
          <h1>Plug in</h1>
          <p>
            A single module can control one type of hardware — e.g. lights or
            curtains.
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="hardware-card3">
        <div className="hardware-text-container">
          <h1>Control everything</h1>
          <p>
            A single module can control one type of hardware — e.g. lights or
            curtains.
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
    </div>
  );
};
export default Hardware;
