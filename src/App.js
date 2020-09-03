import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Button from "./Components/Button";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);
  const start = () => {
    run();
    setStatus(1);
    setInter(setInterval(run, 0.1));
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const pause = () => {
    clearInterval(inter);
    setStatus(2);
  };

  const resume = () => start();

  const reset = () => {
    clearInterval(inter);
    setStatus(0);
    return setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <div className="main-section">
      <div className=" clock-holer">
        <div className="stopwatch">
          <Display time={time} />
          <Button
            start={start}
            status={status}
            reset={reset}
            pause={pause}
            resume={resume}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
