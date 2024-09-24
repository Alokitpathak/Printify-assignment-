import React from "react";
import { Button } from "react-bootstrap";
import tshirtImage from "../assets/images/t-shirt.png";
import './Herosection.css';
const Herosection = () => {
  return (
    <div >
        <div className="hero-section">
            <div>
      <h1 className="heading">Create and sell custom products</h1>
      <div className="list">
      <ul >
        <li>100% Free to use</li>
        <li>900+ High-Quality Products</li>
        <li>Largest global print network</li>
      </ul>
<div className="how-btns">
    <button className="btn btn-primary button-navigation button-start-selling">Start for Free </button>
    <butto  className="btn btn-secondary button-start-selling">How it Works</butto>
</div>


<div className="trust">Trusted by over 8M sellers around the world</div>
      </div>
      </div>
      <div className="img1">
      <img src={tshirtImage} alt="T-shirt" />
      </div>
      </div>
<div>

</div>

    </div>
  );
};

export default Herosection;
