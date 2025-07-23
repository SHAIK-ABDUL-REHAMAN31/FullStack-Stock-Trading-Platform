import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="container border-bottom  mb-5 p-5">
      <div className="row text-center mt-5 pt-5 products-hero">
        <h1>Zerodha Products</h1>
        <p className="p1">Sleek, modern, and intuitive trading platforms</p>
        <p className="p2">
          Check out our &nbsp;
          <a href="">
            investment offerings
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
