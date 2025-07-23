import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mb-5">
      <div className="row m-6">
        <h1 className="text-center mb-5">People</h1>
        <div className="col-6 pl-5 text-center">
          <img
            src="Assets/nithinKamath.jpg"
            style={{ width: "50%", borderRadius: " 50%" }}
            className="mt-5 "
          />

          <p className="mt-3 fs-5">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div
          className="col-6 pt-5 "
          style={{
            lineHeight: "1.8",
            fontSize: "1.08rem",
            opacity: "0.9",
            paddingRight: " 9rem",
          }}
        >
          <p>
            Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha
            in 2010 to overcome the hurdles he faced during his decade long
            stint as a trader. Today, Zerodha has changed the landscape of the
            Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="people-links">
            Connect on <Link to="/">Homepage</Link> /
            <Link to="/">TradingQnA</Link> / <Link to="/">Twitter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
