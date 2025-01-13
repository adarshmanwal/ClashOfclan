import React, { useState } from "react";
import { SiegeMachinesData } from "../siegeData";

export default function SiegeMachine() {
  const [siegeQueue, setSiegeQueue] = useState([]);
  const capacityLimit = 100;
  const currentCapacity = siegeQueue.reduce(
    (total, siege) => total + (siege.count * siege.HousingSpace || 1),
    0
  );

  function addSiegeToQueue(siege) {
    setSiegeQueue((prevQueue) => {
      const lastSiege = prevQueue[prevQueue.length - 1];
      if (lastSiege?.Name === siege.Name) {
        const updatedLastSiege = {
          ...lastSiege,
          count: (lastSiege.count || 1) + 1,
        };
        return [...prevQueue.slice(0, -1), updatedLastSiege];
      }
      if (!siege.count) {
        siege.count = 1;
      }
      return [...prevQueue, siege];
    });
  }

  function removeSiegeFromQueue(index) {
    setSiegeQueue((prevQueue) => {
      const removeSiege = prevQueue[index];
      if (removeSiege.count > 1) {
        const updatedSiege = {
          ...removeSiege,
          count: removeSiege.count - 1,
        };
        return [
          ...prevQueue.slice(0, index),
          updatedSiege,
          ...prevQueue.slice(index + 1),
        ];
      } else {
        return [...prevQueue.slice(0, index), ...prevQueue.slice(index + 1)];
      }
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Capacity Section */}
      <div className="bg-white w-full">
        <p className="text-lg font-semibold">
          Capacity: {currentCapacity}/{capacityLimit}
        </p>
      </div>
      {/* Siege Queue */}
      <div className="bg-gray-200 rounded-lg w-[100%] h-[80px] m-1 flex justify-start items-center">
        {siegeQueue.map((siege, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-2 flex items-center shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => removeSiegeFromQueue(index)}
          >
            <img
              src={siege.Image}
              alt={siege.Name}
              className="w-10 h-10 mr-2"
            />
            <p className="text-sm font-semibold">
              {siege.Name} (x{siege.count})
            </p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="bg-white w-[100%] h-[25%] m-1 flex justify-end">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Boost
        </button>
      </div>

      {/* Full Siege Machines List Section */}
      <div className="bg-gray-200 rounded-lg w-[100%] h-[200px] m-1 grid grid-cols-8 gap-2 p-2 overflow-y-auto">
        {SiegeMachinesData.map((siege, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-2 flex flex-col items-center shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => addSiegeToQueue(siege)}
          >
            <img
              src={siege.Image}
              alt={siege.Name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm font-semibold">{siege.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
