import React from "react";
import productImage from "../assets/images/12.jpg";
import "./Productsection.css";

const Productsection = () => {
  return (
    <div className="container-main">
      <div className="image">
        <img src={productImage} alt="Product" className="product-image" />
      </div>
      <div className="body">
        <div className="B">
          <h2 className="heading">
            Easily add your design to a wide range of products
          </h2>
        </div>
        <span className="description">
          {" "}
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </span>
        <br />
        <a _ngcontent-ng-c2931980995="" href="/app/products" className="link">
        All products</a>
      </div>
     
    </div>
  );
};

export default Productsection;
