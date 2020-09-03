import React from "react";
import "../App.css";

const Button = ({ start, status, reset, pause, resume }) => {
  return (
    <div>
      {status === 0 ? (
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={pause}>
            Pause
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>
            Resume
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
