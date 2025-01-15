import { createContext, useCallback, useState } from "react";
import { TroopsData } from "../troopsData";

export const TroopCTX = createContext({
  armyList: [],
  trainedTroopsList: [],
  trainingArmy: [],
  addTroopToQueue: () => {},
  removeTroopFromQueue: () => {},
  handleTroopChange: () => {},
  addTrainedArmyList: () => {},
  removeTrainedArmyList: () => {},
});

// Helper function to update troop lists
const updateTroopList = (list, index, countChange) => {
  const troopToUpdate = list[index];

  if (troopToUpdate.count + countChange > 0) {
    const updatedTroop = {
      ...troopToUpdate,
      count: troopToUpdate.count + countChange,
    };
    return [...list.slice(0, index), updatedTroop, ...list.slice(index + 1)];
  }
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

// Function to add a troop to a list
const addTroopToList = (list, troop) => {
  const lastTroop = list[list.length - 1];
  if (lastTroop?.Name === troop.Name) {
    return updateTroopList(list, list.length - 1, 1);
  }
  return [...list, { ...troop, count: 1 }];
};

export default function TroopsContextProvider({ children }) {
  const [trainingArmy, setTrainingArmy] = useState([]);
  const [trainedArmyList, setTrainedArmyList] = useState([]);

  const addTroopToQueue = (troop) => {
    setTrainingArmy((prevTroops) => addTroopToList(prevTroops, troop));
  };

  const removeTroopFromQueue = (index) => {
    setTrainingArmy((prevTroops) => updateTroopList(prevTroops, index, -1));
  };

  const addTrainedArmyList = (troop) => {
    setTrainedArmyList((prevList) => addTroopToList(prevList, troop));
  };

  const removeTrainedArmyList = (index) => {
    setTrainedArmyList((prevList) => updateTroopList(prevList, index, -1));
  };

  const processFirstTroop = (list) => {
    const firstElement = list[0];
    if (!firstElement) return list;

    if (firstElement.count > 1) {
      addTrainedArmyList(firstElement);
      const updatedArmy = { ...firstElement, count: firstElement.count - 1 };
      return [updatedArmy, ...list.slice(1)];
    }

    addTrainedArmyList(firstElement);
    return list.slice(1);
  };

  const handleTroopProgressChange = useCallback(() => {
    setTrainingArmy((prevState) => processFirstTroop(prevState));
  }, []);

  const handleTroopChange = useCallback(() => {
    handleTroopProgressChange();
  }, [handleTroopProgressChange]);

  const ctxValue = {
    armyList: TroopsData,
    trainedTroopsList: trainedArmyList,
    trainingArmy: trainingArmy,
    addTroopToQueue,
    removeTroopFromQueue,
    handleTroopChange,
    addTrainedArmyList,
    removeTrainedArmyList,
  };

  return <TroopCTX.Provider value={ctxValue}>{children}</TroopCTX.Provider>;
}
