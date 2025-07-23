import React from "react";
import "./pricing-education.css";

function Education() {
  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-6 mt-5">
          <img src="Assets\education.svg" alt="varsity" />
        </div>
        <div className="col-6 open-market-education mt-5">
          <h1 className="mt-5">Free and open market education</h1>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
