import React from "react";
import Countdown, { zeroPad } from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
        <span className="dayCount">{zeroPad(days)}</span>:
        <span className="hourCount">{zeroPad(hours)}</span>: 
        <span className="minCount">{zeroPad(minutes)}</span>:
        <span className="secCount">{zeroPad(seconds)}</span>
      </div>
    );
  }
};


  const CountDownTimer = () => <Countdown
    className="countdown"
    date={"December 20, 2020"}
    renderer={renderer}
  />

  export default CountDownTimer