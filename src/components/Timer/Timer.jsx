import React, { useState } from "react";
import './Timer.css'

const Timer = () => {
  const [countdownDays, setCountdownDays] = useState(0);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);

  const getRemainingTime = () => {
    const targetDate = new Date("2024-06-15 00:00:00");
    const currentDate = new Date();

    const millisecondsRemaining = targetDate - currentDate;
    const daysRemaining = Math.floor(millisecondsRemaining / 1000 / 60 / 60 / 24);
    const hoursRemaining = Math.floor(
      (millisecondsRemaining % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
    );
    const minutesRemaining = Math.floor(
      (millisecondsRemaining % (1000 * 60 * 60)) / 1000 / 60
    );

    setCountdownDays(daysRemaining);
    setCountdownHours(hoursRemaining);
    setCountdownMinutes(minutesRemaining);
  };

  // Update the countdown every second
  setInterval(getRemainingTime, 1000);

  var daysText = 'Dias'
  var hoursText = 'Horas'
  var minutesText = 'Mins'

  if (countdownDays <= 1) { daysText = 'Dia' } else { daysText = 'Dias' }

  if (countdownHours <= 1) { hoursText = 'Hora' } else { hoursText = 'Horas' }

  if (countdownMinutes <= 1) { minutesText = 'Min' } else { minutesText = 'Mins' }

  return (
    <div className="timerMainContainer">
      <div className="daysSection">
        <h1>{countdownDays}</h1>
        <h3>{daysText}</h3>
      </div>
      <p className="twoDots">:</p>
      <div className="hoursSection">
        <h1>{countdownHours}</h1>
        <h3>{hoursText}</h3>
      </div>
      <p className="twoDots">:</p>
      <div className="minutesSection">
        <h1>{countdownMinutes}</h1>
        <h3 className="minutosText">{minutesText}</h3>
      </div>
    </div>
  );
};

export default Timer;