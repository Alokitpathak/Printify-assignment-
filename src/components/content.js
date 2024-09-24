import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="b1">

          <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="" className="img" />
          <h2 >Higher Profits</h2>
          <span className="description">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</span>
        </div>
        <div className="b2">
          <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="" className="img"/>
          <h2>Robust Scaling</h2>
          <span className="description">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</span>

        </div>
        <div className="b3">
          <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="" className="img"/>
          <h2>Best Selection</h2>
          <span className="description">With 900+ products and top quality brands, you can choose the best products for your business.</span>

        </div>
      </div>
    </div>
  );
};

export default Content;
