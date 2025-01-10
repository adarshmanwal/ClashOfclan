import React, { useState } from "react";
import { TroopsData } from "../troopsData";
import Troop from "./Troop";
export default function TrainArmy() {
  const [trainingArmy, setTrainingArmy] = React.useState([]);

  function addTroopToQueue(troop) {
    const newTroop = { ...troop };
    setTrainingArmy((prevTroops) => {
      const lastTroop = prevTroops[prevTroops.length - 1];
      if (lastTroop?.Name === newTroop.Name) {
        const updatedLastTroop = {
          ...lastTroop,
          count: (lastTroop.count || 1) + 1,
        };
        return [...prevTroops.slice(0, -1), updatedLastTroop];
      }
      if (!newTroop.count) {
        newTroop.count = 1;
      }
      return [...prevTroops, newTroop];
    });
  }

  function removeTroopFromQueue(troop,index) {
    setTrainingArmy((prevTroops) => {
      const removeTroop = trainingArmy[index];
      if (removeTroop.count > 1) {
        const updatedTroop = {
          ...removeTroop,
          count: removeTroop.count - 1,
        };
        return [...prevTroops.slice(0, index), updatedTroop, ...prevTroops.slice(index + 1)];
      }else{
        return [...prevTroops.slice(0, index), ...prevTroops.slice(index + 1)];
      }


    });
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* Capacity Section */}
      <div className="bg-white w-[100%] m-1 p-2">
        <p className="text-lg font-semibold">Capacity: 50/100</p>
      </div>

      {/* Army Section */}

      <div className="bg-gray-200 rounded-lg w-[100%] h-[80px] m-1 flex justify-start items-center">
        {trainingArmy
          .slice() // Create a shallow copy to avoid mutating the original array// Reverse the array
          .map((troop, index) => (
            <Troop
              troop={troop}
              key={index}
              index={index}
              handleTroopOnClick={() => removeTroopFromQueue(troop,index)}
              troopQueue={true}
            ></Troop>
          ))}
      </div>

      {/* Button Section */}
      <div className="bg-white w-[100%] h-[25%] m-1 flex justify-end ">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Boost
        </button>
      </div>

      {/* Full Army List Section */}
      <div className="bg-gray-200 rounded-lg w-[100%] h-[200px] m-1 grid grid-cols-8 gap-2 p-2 overflow-y-auto">
        {TroopsData.map((troop, index) => (
          <Troop
            troop={troop}
            key={index}
            index={index}
            handleTroopOnClick={() => addTroopToQueue(troop)}
          ></Troop>
        ))}
      </div>
    </div>
  );
}
