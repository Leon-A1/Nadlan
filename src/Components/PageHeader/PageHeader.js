import React from "react";
import "./page-header.css";
import headerimage from "./pageHeaderImage.jpg";

export const PageHeader = () => {
  function hideSpinner() {
    document.getElementById("main-spinner").style.opacity = "0";
    document.getElementById("main-spinner").style.display = "none";
  }
  return (
    <div className="header-slides">
      <div
        // style={{ backgroundImage: { headerimage }, backgroundColor: "red" }}
        className="slide"
      >
        <img onLoad={hideSpinner} src={headerimage} alt=""></img>
        <h1>Nadlan.co.il</h1>
        <p>Realestate agency that cares...</p>
      </div>
    </div>
  );
};

export default PageHeader;
