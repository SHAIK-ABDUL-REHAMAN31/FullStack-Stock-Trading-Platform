import React from "react";
import "./pricing-education.css";

function Pricing() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4 pricing-desc mt-5">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. <br />
            Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 border text-center mt-5 p-2">
              <h1 className="mt-3">&#8377;0</h1>
              <p className="mt-4">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col-6 border text-center mt-5 p-2">
              <h1 className="mt-3">&#8377;20</h1>
              <p className="mt-4">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
