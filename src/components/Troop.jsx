import React from "react";
import ArmyQueueTimer from "./ArmyQueueTimer";

export default function Troop({
  troop,
  index,
  handleTroopOnClick,
  troopQueue,
  handleTroopProgressChange,
}) {
  if(troopQueue){
    console.log('first',index)
  }
  
  return (
    <button onClick={handleTroopOnClick} className="focus:outline-none">
      <div className="bg-gray-100 m-1 rounded-lg p-2 flex flex-col items-center shadow-md hover:shadow-lg transition">
        <img
          src={troop.Image}
          alt={`Army ${index + 1}`}
          className="w-16 h-16 mb-2"
        />
        {troopQueue ? (
          <p className="text-sm font-semibold">
            {troop.Name} (x{troop.count})
          </p>
        ) : (
          <p className="text-sm font-semibold">{troop.Name}</p>
        )}
        {troopQueue && index == 0 && (
          <ArmyQueueTimer
            key={index}
            timeOut={troop.TrainingTimeMilliseconds}
            onTimeOut={handleTroopProgressChange}
          ></ArmyQueueTimer>
        )}
      </div>
    </button>
  );
}
