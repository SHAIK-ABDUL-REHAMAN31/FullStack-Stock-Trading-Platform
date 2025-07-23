import React from "react";
import "./stats.css";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row ">
        <div className="col-6 stats-trust" style={{ padding: "0% 8%" }}>
          <h1 className="mb-5">Trust with confidence</h1>
          <h2>Customer-first always</h2>
          <p className="mb-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br></br>
            lakh crores of equity investments and contribute to 15% <br></br>of
            daily retail exchange volumes in India.
          </p>
          <h2>No spam or gimmicks</h2>
          <p className="mb-5">
            No gimmicks, spam, "gamification", or annoying push <br></br>
            notifications. High quality apps that you use at your <br></br>pace,
            the way you like. Our philosophies.
          </p>
          <h2>The Zerodha universe</h2>
          <p className="mb-5">
            Not just an app, but a whole ecosystem. Our investments <br></br>in
            30+ fintech startups offer you tailored services <br></br>specific
            to your needs.
          </p>
          <h2>Do better with money</h2>
          <p className="mb-5">
            With initiatives like Nudge and Kill Switch, we don't just <br></br>
            facilitate transactions, but actively help you do better <br></br>{" "}
            with your money.
          </p>
        </div>
        <div className="col-6 mt-5 ">
          <img
            src="Assets/ecosystem.png"
            style={{ width: "95%", alignItems: "center" }}
            className="ml-5"
          />
          <div className="text-center mt-3 stats-links">
            <a href="" className="fs-5">
              Explore our products &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="fs-5">
              Try Kite demo &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
