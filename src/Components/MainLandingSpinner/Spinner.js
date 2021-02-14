import React from "react";
import "./page-loader.css";

const Spinner = () => {
  return (
    <>
      <div id="main-spinner" class="loader-wrapper">
        <span class="loader">
          <span class="loader-inner"></span>
        </span>
      </div>
    </>
  );
};

export default Spinner;
