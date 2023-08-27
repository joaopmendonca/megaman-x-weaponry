import React from "react";

import bannerImage from "../../assets/images/megaman-x-banner.jpg";

import "./index.css";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="banner site" />
    </div>
  );
}

export default Banner;
