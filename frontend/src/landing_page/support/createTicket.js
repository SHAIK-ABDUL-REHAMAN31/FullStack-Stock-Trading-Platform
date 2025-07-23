import React from "react";
import "./createTicket.css";

function CreateTicket() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#387ed1", height: "400px" }}
    >
      <div className="support-wrapper p-2" id="support-wrapper">
        <div className="row text-center pt-5 headings">
          <div className="col-6">
            <h4>Support Portal</h4>
          </div>
          <div className="col-6">
            <h4>Track tickets</h4>
          </div>
        </div>
        <div className="row  text-center p-5">
          <div className="col-6 support-portal-content">
            <p className="text-start">
              Search for an answer or browse help topics to create a ticket
            </p>
            <div
              className="mb-3"
              style={{
                backgroundColor: "#fff",
                width: "80%",
                height: "60px",

                borderRadius: "3px",
              }}
            >
              <input
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                style={{
                  backgroundColor: "#fff",
                  width: "80%",
                  height: "60px",
                  border: "none",
                  borderRadius: "3px",
                }}
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="support-links text-start">
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href=""> Intraday margins</a>
            </div>
          </div>
          <div className="col-6 headings">
            <h4 className="text-start ">Featured</h4>
            <ol
              className="text-start track-tickets"
              style={{ lineHeight: "2.5", color: "#fff" }}
            >
              <li className="list-item">
                <a href="">Quarterly Settlement of Funds - July 2025</a>
              </li>
              <li className="list-item">
                <a href="">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
