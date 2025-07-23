import React from "react";

function Brokerage() {
  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4 text-center">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted mt-5"
            style={{ lineHeight: "2", fontSize: "15px" }}
          >
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
            <li>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </li>
            <li>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4 text-center">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
