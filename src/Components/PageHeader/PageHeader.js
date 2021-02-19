import React from "react";
import "./page-header.css";
import Slider from "../Slider/App";

export const PageHeader = () => {
  function hideSpinner() {
    document.getElementById("main-spinner").style.opacity = "0";
    document.getElementById("main-spinner").style.display = "none";
  }
  return (
    <div onLoad={hideSpinner} style={{ backgroundColor: "black" }}>
      <Slider></Slider>
    </div>
  );
};

export default PageHeader;
