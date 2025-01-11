import React, { useState } from "react";
import { TroopsData } from "../troopsData";
import Troop from "./Troop";

export default function TrainArmy() {
  const [trainingArmy, setTrainingArmy] = useState([]);

  const capacityLimit = 100;
  const currentCapacity = trainingArmy.reduce(
    (total, troop) => total + (troop.count * troop.HousingSpace || 1),
    0
  );

  const addTroopToQueue = (troop) => {
    setTrainingArmy((prevTroops) => {
      const lastTroop = prevTroops[prevTroops.length - 1];
      if (lastTroop?.Name === troop.Name) {
        const updatedLastTroop = {
          ...lastTroop,
          count: (lastTroop.count || 1) + 1,
        };
        return [...prevTroops.slice(0, -1), updatedLastTroop];
      }
      return [...prevTroops, { ...troop, count: 1 }];
    });
  };

  const removeTroopFromQueue = (index) => {
    setTrainingArmy((prevTroops) => {
      const troopToRemove = prevTroops[index];
      if (troopToRemove.count > 1) {
        const updatedTroop = {
          ...troopToRemove,
          count: troopToRemove.count - 1,
        };
        return [
          ...prevTroops.slice(0, index),
          updatedTroop,
          ...prevTroops.slice(index + 1),
        ];
      }
      return [...prevTroops.slice(0, index), ...prevTroops.slice(index + 1)];
    });
  };

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
        {trainingArmy.map((troop, index) => (
          <Troop
            troop={troop}
            key={index}
            index={index}
            handleTroopOnClick={() => removeTroopFromQueue(index)}
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
        {TroopsData.map((troop, index) => (
          <Troop
            troop={troop}
            key={index}
            index={index}
            handleTroopOnClick={() => addTroopToQueue(troop)}
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
