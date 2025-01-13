import React, { useEffect, useState } from "react";

export default function ArmyQueueTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    setRemainingTime(timeOut);

    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(
        (prevRemainingTime) => Math.max(prevRemainingTime - 100, 0) // Ensure it doesn't go below 0
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className="w-20 h-2 rounded-3xl bg-purple-600 m-0"
      max={timeOut}
      value={remainingTime}
    ></progress>
  );
}
