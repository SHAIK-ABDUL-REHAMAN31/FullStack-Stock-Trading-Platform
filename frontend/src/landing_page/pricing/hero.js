import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 mb-5">
        <h1 className="text-center ">Charges</h1>
        <p className="text-muted text-center fs-5">
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5">
        <div className="col-4 p-5">
          <img
            src="Assets\pricingEquity.svg"
            className="pricing-img"
            alt="pricing-image"
          />
          <h1 className="fs-3 mb-5">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="Assets\intradayTrades.svg"
            className="pricing-img"
            alt="pricing-image"
          />
          <h1 className="fs-3 mb-5">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="Assets\pricingMF.svg"
            className="pricing-img"
            alt="pricing-image"
          />
          <h1 className="fs-3 mb-5">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
