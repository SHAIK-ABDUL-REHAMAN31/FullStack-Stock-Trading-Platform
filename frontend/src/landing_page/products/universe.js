import React from "react";
import "./universe.css";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h1 className="text-center pb-3 fs-2">The Zerodha Universe</h1>
        <p className="text-center fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5 universe-object">
          <img
            src="Assets/zerodhaFundhouse.png"
            className="universe-image diff-img"
            alt="universe-image"
          />
          <p className="text-muted text-small universe-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 universe-object">
          <img
            src="Assets\sensibullLogo.svg"
            className="universe-image"
            alt="universe-image"
          />
          <p className="text-muted text-small universe-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 universe-object">
          <img
            src="Assets\goldenpiLogo.png"
            className="universe-image pb-3"
            alt="universe-image"
          />
          <p className="text-muted text-small universe-text">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5 universe-object">
          <img
            src="Assets\streakLogo.png"
            className="universe-image diff-img"
            alt="universe-image"
          />
          <p className="text-muted text-small universe-text">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5 universe-object">
          <img
            src="Assets\smallcaseLogo.png"
            className="universe-image"
            alt="universe-image"
          />
          <p className="text-muted text-small universe-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 universe-object">
          <img
            src="Assets\dittoLogo.png"
            className="universe-image pb-5 "
            alt="universe-image"
            style={{ width: "9rem" }}
          />
          <p className="text-muted text-small universe-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="btn btn-primary p-2 fs-5  mt-3 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
