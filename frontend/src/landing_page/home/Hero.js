import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="Assets\homeHero.png" alt="Hero image" className="mb-5" />
        <h1 className="mt-2">Invest in everything</h1>
        <p className="mt-3" style={{ fontSize: "1.2rem" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary p-2 fs-5  mt-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
