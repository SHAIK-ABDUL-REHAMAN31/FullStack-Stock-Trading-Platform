import React from "react";
import "./leftSection.css";

function LeftSection({
  imgUrl,
  produtName,
  productDesc,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5 sec-img">
          <img src={imgUrl} />
        </div>
        <div className="col-6  kite-img p-5">
          <h1>{produtName}</h1>
          <p>{productDesc}</p>

          <div className="kite-links">
            <a href={tryDemo}>
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;
            <a href={learnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="kite-store-links mt-4">
            <a href={playStore}>
              <img src="Assets\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="Assets\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
