import React from "react";
import SpellQueueTimer from "./SpellQueueTimer";

export default function Spell({
  spell,
  index,
  handleSpellOnClick,
  spellQueue,
  brewedQueue,
}) {
  console.log(spellQueue, brewedQueue, index);

  return (
    <button onClick={handleSpellOnClick} className="focus:outline-none">
      <div className="bg-gray-100 m-1 rounded-lg p-2 flex flex-col items-center shadow-md hover:shadow-lg transition">
        <img
          src={spell.Image}
          alt={`Spell ${index + 1}`}
          className="w-16 h-16 mb-2"
        />
        {spellQueue || brewedQueue ? (
          <p className="text-sm font-semibold">
            {spell.Name} (x{spell.count})
          </p>
        ) : (
          <p className="text-sm font-semibold">{spell.Name}</p>
        )}
        {spellQueue && !brewedQueue && index === 0 && (
          <SpellQueueTimer
            key={index}
            timeOut={spell.TrainingTimeMilliseconds}
            spellCount={spell.count}
          />
        )}
      </div>
    </button>
  );
}
