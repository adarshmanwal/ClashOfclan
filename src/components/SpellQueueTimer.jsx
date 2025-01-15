import React, { useContext, useEffect, useState } from "react";
import { SpellCTX } from "../store/spell-context";

export default function SpellQueueTimer({ timeOut, spellCount }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  const spellCTX = useContext(SpellCTX);

  useEffect(() => {
    console.log("Spell Timer Timeout Triggered");
    setRemainingTime(timeOut);

    const timer = setTimeout(() => {
      console.log('timeOut completed')
      spellCTX.handleSpellChange();
    }, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, spellCount]);

  useEffect(() => {
    console.log("Spell Timer Interval Started");
    const interval = setInterval(() => {
      setRemainingTime(
        (prevRemainingTime) => Math.max(prevRemainingTime - 100, 0) // Prevent negative time
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className="w-20 h-2 rounded-3xl bg-blue-600 m-0"
      max={timeOut}
      value={remainingTime}
    ></progress>
  );
}
