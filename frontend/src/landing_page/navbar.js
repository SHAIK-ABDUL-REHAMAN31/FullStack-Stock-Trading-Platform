import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom nav-bar"
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        zIndex: "10",
        top: 0,
      }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/" style={{ paddingLeft: "8rem" }}>
          <img src="Assets/logo.svg" style={{ width: "22%" }} alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item "></li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item ">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
