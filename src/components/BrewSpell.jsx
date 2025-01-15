import React, { useContext } from "react"; // Import the Spell component
import { SpellCTX } from "../store/spell-context";
import Spell from "./Spell"
export default function BrewSpell() {
  const spellData = useContext(SpellCTX);
  const capacityLimit = 100;
  const currentCapacity = spellData.spellQueue.reduce(
    (total, spell) => total + spell.count,
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

      {/* Spell Queue Section */}
      <div className="bg-gray-200 rounded-lg w-full h-full m-1 flex justify-start items-center overflow-x-auto">
        {spellData.spellQueue.map((spell, index) => (
          <Spell
            key={index}
            index={index}
            spell={spell}
            spellQueue={true}
            brewedQueue={false}
            handleSpellOnClick={() => spellData.removeSpellFromQueue(index)}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="bg-white w-full h-10 m-1 flex justify-end gap-2">
        <ActionButton label="Delete" color="red" />
        <ActionButton label="Boost" color="green" />
      </div>


      {/* Full Spells List Section */}
      <div className="bg-gray-200 rounded-lg w-full h-48 m-1 grid grid-cols-8 gap-2 p-2 overflow-y-auto">
        {spellData.spellsList.map((spell, index) => (
          <Spell
            key={index}
            spell={spell}
            handleSpellOnClick={() => spellData.addSpellToQueue(spell)}
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
