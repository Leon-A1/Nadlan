import React from "react";
import "./page-header.css";
import Slider from "../Slider/Slider";

export const PageHeader = () => {
  function hideSpinner() {
    document.getElementById("main-spinner").style.opacity = "0";
    document.getElementById("main-spinner").style.display = "none";
  }
  return (
    <div
      onLoadCapture={hideSpinner}
      style={{ backgroundColor: "var(--Black)" }}
    >
      <Slider></Slider>
    </div>
  );
};

export default PageHeader;
