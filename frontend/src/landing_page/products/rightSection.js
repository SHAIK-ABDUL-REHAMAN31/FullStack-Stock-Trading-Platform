import React from "react";
import "./rightSection.css";

function RightSection({ productName, productDesc, learnMore, imgUrl }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ">
          <div className="pt-5 rightsection-content">
            <h1>{productName}</h1>
            <p>{productDesc}</p>
            <a href={learnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
