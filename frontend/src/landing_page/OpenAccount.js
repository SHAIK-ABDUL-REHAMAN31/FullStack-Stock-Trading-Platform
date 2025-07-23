import React from "react";
function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 pt-5 text-center">
        <h1
          style={{ fontSize: "2.15rem", opacity: "0.85" }}
          className="Openaccount-heading"
        >
          Open a Zerodha account
        </h1>
        <p className="mt-3" style={{ fontSize: "1.1rem" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary p-2 fs-5 mb-5 mt-3"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
