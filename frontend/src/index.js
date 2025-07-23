import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/homepage";
import PricingPage from "./landing_page/pricing/pricingpage";
import SignupPage from "./landing_page/signup/signupPage";
import LoginPage from "./landing_page/signup/LoginPage";
import AboutPage from "./landing_page/about/aboutPage";
import ProductsPage from "./landing_page/products/productsPage";
import SupportPage from "./landing_page/support/supportpage";
import DashboardPage from "./landing_page/signup/DashboardPage";
import Navbar from "./landing_page/navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/notFound";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
