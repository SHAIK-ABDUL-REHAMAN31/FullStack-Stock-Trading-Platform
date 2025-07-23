import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="container  main-container mb-5">
      <h3 className="text-muted fs-5 mb-5">
        To create a ticket, select a relevant topic
      </h3>
      <div className="row hero-sections">
        <div className="col-4">
          <h4>
            <a href="">
              <i class="fa-regular fa-square-plus"></i>&nbsp;Account Opening
            </a>
          </h4>
          <span>
            <a href="">Resident individual</a>
          </span>
          <br />
          <span>
            <a href="">Minor</a>
          </span>
          <br />
          <span>
            <a href="">Non Resident Indian (NRI)</a>
          </span>
          <br />
          <span>
            <a href="">Company, Partnership, HUF and LLP</a>
          </span>
          <br />
          <span>
            <a href="">Glossary</a>
          </span>
          <br />
        </div>
        <div className="col-4 hero-sections ">
          <h4>
            <a href="">
              <i class="fa-solid fa-user"></i>&nbsp;Your Zerodha Account
            </a>
          </h4>
          <span>
            <a href="">Your Profile</a>
          </span>
          <br />
          <span>
            <a href="">Account modification</a>
          </span>
          <br />
          <span>
            <a href="">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
          </span>
          <br />
          <span>
            <a href="">Nomination</a>
          </span>
          <br />
          <span>
            <a href="">Transfer and conversion of securities</a>
          </span>
        </div>
        <div className="col-4">
          <h4>
            <a href="">
              <i class="fa-solid fa-chart-simple"></i>&nbsp;Kite
            </a>
          </h4>
          <span>
            <a href="">IPO</a>
          </span>
          <br />
          <span>
            <a href="">Trading FAQs</a>
          </span>
          <br />
          <span>
            <a href="">Margin Trading Facility (MTF) and Margins</a>
          </span>
          <br />
          <span>
            <a href="">Charts and orders</a>
          </span>
          <br />
          <span>
            <a href="">Alerts and Nudges</a>
          </span>
          <span>
            <br />
            <a href="">General</a>
          </span>
        </div>
      </div>
      <div className="row hero-sections mt-5 ">
        <div className="col-4">
          <h4>
            <a href="">
              <i class="fa-solid fa-wallet"></i>&nbsp;Funds
            </a>
          </h4>
          <span>
            <a href="">Resident individual</a>
          </span>
          <br />
          <span>
            <a href="">Minor</a>
          </span>
          <br />
          <span>
            <a href="">Non Resident Indian (NRI)</a>
          </span>
          <br />
          <span>
            <a href="">Company, Partnership, HUF and LLP</a>
          </span>
          <br />
          <span>
            <a href="">Glossary</a>
          </span>
          <br />
        </div>
        <div className="col-4 hero-sections ">
          <h4>
            <a href="">
              <i class="fa-solid fa-circle-notch"></i>&nbsp; Console
            </a>
          </h4>
          <span>
            <a href="">Your Profile</a>
          </span>
          <br />
          <span>
            <a href="">Account modification</a>
          </span>
          <br />
          <span>
            <a href="">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
          </span>
          <br />
          <span>
            <a href="">Nomination</a>
          </span>
          <br />
          <span>
            <a href="">Transfer and conversion of securities</a>
          </span>
        </div>
        <div className="col-4">
          <h4>
            <a href="">
              <i class="fa-solid fa-circle-dot"></i>&nbsp;Coin
            </a>
          </h4>
          <span>
            <a href="">IPO</a>
          </span>
          <br />
          <span>
            <a href="">Trading FAQs</a>
          </span>
          <br />
          <span>
            <a href="">Margin Trading Facility (MTF) and Margins</a>
          </span>
          <br />
          <span>
            <a href="">Charts and orders</a>
          </span>
          <br />
          <span>
            <a href="">Alerts and Nudges</a>
          </span>
          <span>
            <br />
            <a href="">General</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
