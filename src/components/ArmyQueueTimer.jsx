import React, { useContext, useEffect, useState } from "react";
import { TroopCTX } from "../store/troops-context";
export default function ArmyQueueTimer({ timeOut ,troopCount}) {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  const troopCTX = useContext(TroopCTX)
  useEffect(() => {
    console.log("onTimeOut");
    setRemainingTime(timeOut);

    const timer = setTimeout(() => {
      troopCTX.handleTroopChange()
    }, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut,troopCount]);

  useEffect(() => {
    console.log("setInterval");
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
