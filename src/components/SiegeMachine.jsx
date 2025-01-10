import React, { useState } from "react";
import { SiegeMachinesData } from "../siegeData";

export default function SiegeMachine() {
  const [siegeQueue, setSiegeQueue] = useState([]);

  function addSiegeToQueue(siege) {
    setSiegeQueue((prevQueue) => [...prevQueue, siege]);
  }

  function removeSiegeFromQueue(siege) {
    setSiegeQueue((prevQueue) =>
      prevQueue.filter((item) => item.Name !== siege.Name)
    );
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      {/* Capacity Section */}
      <div className="bg-white w-[100%] m-1 p-2">
        <p className="text-lg font-semibold">Capacity: {siegeQueue.length}/100</p>
      </div>

      {/* Siege Queue */}
      <div className="bg-gray-200 rounded-lg w-[90%] h-[80px] m-1 flex justify-center items-center">
        {siegeQueue
          .slice()
          .reverse()
          .map((siege, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-2 flex items-center shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => removeSiegeFromQueue(siege)}
            >
              <img
                src={siege.Image}
                alt={siege.Name}
                className="w-10 h-10 mr-2"
              />
              <p className="text-sm font-semibold">{siege.Name}</p>
            </div>
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
