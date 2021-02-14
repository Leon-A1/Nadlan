import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        marginTop: "5vh",
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
