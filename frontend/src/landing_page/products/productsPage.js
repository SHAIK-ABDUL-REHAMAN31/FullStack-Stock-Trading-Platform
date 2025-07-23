import React from "react";

import Hero from "./hero";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import Universe from "./universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="Assets\kite.png"
        produtName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        playStore="/"
        appStore="/"
      />
      <RightSection
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/"
        imgUrl="Assets\console.png"
      />
      <LeftSection
        imgUrl="Assets\coin.png"
        produtName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        playStore="/"
        appStore="/"
      />
      <p className="text-center fs-5 p-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
