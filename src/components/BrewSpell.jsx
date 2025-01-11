import React, { useState } from "react";
import { SpellsData } from "../spellData";

export default function BrewSpell() {
  const [spellQueue, setSpellQueue] = useState([]);

  function addSpellToQueue(spell) {
    const newSpell = { ...spell };
    setSpellQueue((prevQueue) => {
      const lastSpell = prevQueue[prevQueue.length - 1];
      if (lastSpell?.Name === newSpell.Name) {
        const updatedLastSpell = {
          ...lastSpell,
          count: (lastSpell.count || 1) + 1,
        };
        return [...prevQueue.slice(0, -1), updatedLastSpell];
      }
      if (!newSpell.count) {
        newSpell.count = 1;
      }
      return [...prevQueue, newSpell];
    });
  }

  function removeSpellFromQueue(index) {
    setSpellQueue((prevQueue) => {
      const removeSpell = prevQueue[index];
      if (removeSpell.count > 1) {
        const updatedSpell = {
          ...removeSpell,
          count: removeSpell.count - 1,
        };
        return [
          ...prevQueue.slice(0, index),
          updatedSpell,
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
      <div className="bg-white w-[100%] m-1 p-2">
        <p className="text-lg font-semibold">
          Capacity: {spellQueue.length}/100
        </p>
      </div>

      {/* Spell Queue */}
      <div className="bg-gray-200 rounded-lg w-[100%] h-[80px] m-1 flex justify-start items-center">
        {spellQueue.map((spell, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-2 flex items-center shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => removeSpellFromQueue(index)}
          >
            <img
              src={spell.Image}
              alt={spell.Name}
              className="w-10 h-10 mr-2"
            />
            <p className="text-sm font-semibold">
              {spell.Name} (x{spell.count})
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

      {/* Full Spells List Section */}
      <div className="bg-gray-200 rounded-lg w-[100%] h-[200px] m-1 grid grid-cols-8 gap-2 p-2 overflow-y-auto">
        {SpellsData.map((spell, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-2 flex flex-col items-center shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => addSpellToQueue(spell)}
          >
            <img
              src={spell.Image}
              alt={spell.Name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm font-semibold">{spell.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
