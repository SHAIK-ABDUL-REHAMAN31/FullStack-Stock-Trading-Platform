import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
