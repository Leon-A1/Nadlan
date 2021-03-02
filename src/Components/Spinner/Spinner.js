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
        marginTop: "10vh",
        marginBottom: "50vh",
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
