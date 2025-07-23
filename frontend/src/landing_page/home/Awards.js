import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 ">
          <img src="Assets/largestBroker.svg" className="mb-5" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-5">Largest stockbroker in india</h1>
          <p className="mt-5">
            2+ million Zeroha clients contributes to cover 15% of all retail
            order <br></br>volumes in india daily by trading and invevsting in :
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="Assets\pressLogos.png"
            style={{ width: "90%" }}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
