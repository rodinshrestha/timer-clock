import React from "react";
import "../App.css";

const Button = ({ start }) => {
  return (
    <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
      Start
    </button>
  );
};

export default Button;
