import React from "react";
import "./page-loader.css";

const Spinner = () => {
  return (
    <>
      <div id="main-spinner" className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Spinner;
