import { createContext, useCallback, useState } from "react";
import { SpellsData } from "../spellData";
import LightningSpell from "../assets/LightningSpell.jpg";

export const SpellCTX = createContext({
  spellsList: [],
  spellQueue: [],
  trainedSpellsList: [
    {
      Name: "Lightning Spell",
      Image: LightningSpell,
      Type: "Damage",
      HousingSpace: 1,
      TrainingTime: "6m",
      TrainingTimeMilliseconds: 3000, // 6 minutes in milliseconds
      Level: 1, // You can add level if applicable
    },
  ],
  addSpellToQueue: () => {},
  removeSpellFromQueue: () => {},
  handleSpellChange: () => {},
  addTrainedSpellsList: () => {},
  removeTrainedSpellsList: () => {},
});

// Helper function to update spell lists
const updateSpellList = (list, index, countChange) => {
  debugger
  const spellToUpdate = list[index];

  if (spellToUpdate.count + countChange > 0) {
    const updatedSpell = {
      ...spellToUpdate,
      count: spellToUpdate.count + countChange,
    };
    return [...list.slice(0, index), updatedSpell, ...list.slice(index + 1)];
  }
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

// Function to add a spell to a list
const addSpellToList = (list, spell) => {
  const lastSpell = list[list.length - 1];
  if (lastSpell?.Name === spell.Name) {
    return updateSpellList(list, list.length - 1, 1);
  }
  return [...list, { ...spell, count: 1 }];
};

export default function SpellsContextProvider({ children }) {
  const [spellQueue, setSpellQueue] = useState([]);
  const [trainedSpellsList, setTrainedSpellsList] = useState([]);

  const addSpellToQueue = (spell) => {
    setSpellQueue((prevQueue) => addSpellToList(prevQueue, spell));
  };

  const removeSpellFromQueue = (index) => {
    setSpellQueue((prevQueue) => updateSpellList(prevQueue, index, -1));
  };

  const addTrainedSpellsList = (spell) => {
    setTrainedSpellsList((prevList) => addSpellToList(prevList, spell));
    console.log("trainedSpellsList", trainedSpellsList);
  };

  const removeTrainedSpellsList = (index) => {
    setTrainedSpellsList((prevList) => updateSpellList(prevList, index, -1));
  };

  const processFirstSpell = (list) => {
    const firstElement = list[0];
    if (!firstElement) return list;

    if (firstElement.count > 1) {
      addTrainedSpellsList(firstElement);
      const updatedSpell = { ...firstElement, count: firstElement.count - 1 };
      return [updatedSpell, ...list.slice(1)];
    }

    addTrainedSpellsList(firstElement);
    return list.slice(1);
  };

  const handleSpellProgressChange = useCallback(() => {
    setSpellQueue((prevState) => processFirstSpell(prevState));
  }, []);

  const handleSpellChange = useCallback(() => {
    handleSpellProgressChange();
  }, [handleSpellProgressChange]);

  const ctxValue = {
    spellsList: SpellsData,
    spellQueue,
    trainedSpellsList,
    addSpellToQueue,
    removeSpellFromQueue,
    handleSpellChange,
    addTrainedSpellsList,
    removeTrainedSpellsList,
  };

  return <SpellCTX.Provider value={ctxValue}>{children}</SpellCTX.Provider>;
}
