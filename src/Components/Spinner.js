import React from "react";
// import spinner from '../../img/spinner.gif'
import spinner from "../Assets/img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        marginTop: "250px",
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
