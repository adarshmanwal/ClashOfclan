import React, { useContext } from "react";
import Troop from "./Troop";
import { TroopCTX } from "../store/troops-context";

export default function TrainArmy() {
  const troopsData = useContext(TroopCTX);

  const capacityLimit = 100;
  const currentCapacity = troopsData.trainingArmy.reduce(
    (total, troop) => total + (troop.count * troop.HousingSpace || 1),
    0
  );

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Capacity Section */}
      <div className="bg-white w-full">
        <p className="text-lg font-semibold">
          Capacity: {currentCapacity}/{capacityLimit}
        </p>
      </div>

      {/* Army Queue Section */}
      <div className="bg-gray-200 rounded-lg w-full h-full m-1 flex justify-start items-center overflow-x-auto">
        {troopsData.trainingArmy.map((troop, index) => (
          <Troop
            troop={troop}
            key={index}
            index={index}
            handleTroopOnClick={() => troopsData.removeTroopFromQueue(index)}
            troopQueue
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="bg-white w-full h-10 m-1 flex justify-end gap-2">
        <ActionButton label="Delete" color="red" />
        <ActionButton label="Boost" color="green" />
      </div>

      {/* Troop Selection Section */}
      <div className="bg-gray-200 rounded-lg w-full h-48 m-1 grid grid-cols-8 gap-2 p-2 overflow-y-auto">
        {troopsData.armyList.map((troop, index) => (
          <Troop
            troop={troop}
            key={index}
            index={index}
            handleTroopOnClick={() => troopsData.addTroopToQueue(troop)}
          />
        ))}
      </div>
    </div>
  );
}

function ActionButton({ label, color }) {
  return (
    <button
      className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600 transition`}
    >
      {label}
    </button>
  );
}
