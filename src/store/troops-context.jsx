import { createContext, useCallback, useState } from "react";
import { TroopsData } from "../troopsData";
export const TroopCTX = createContext({
  armyList: [],
  trainingArmy: [],
  removeTroopFromQueue: () => {},
  addTroopToQueue: () => {},
  handleTroopChange: () => {},
});

export default function TroopsContextProvider({ children }) {
  const [trainingArmy, setTrainingArmy] = useState([]);
  const addTroopToQueue = (troop) => {
    console.log("addTroopToQueue");
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

  const handleTroopProgressChange = useCallback(
    function handleTroopProgressChange() {
      console.log("handleTroopProgressChange");
      setTrainingArmy((prevState) => {
        const firstElement = prevState[0];
        let updatedArmy = {};
        if (firstElement.count > 1) {
          updatedArmy = { ...firstElement, count: firstElement.count - 1 };
        } else {
          return [...prevState.slice(1)];
        }
        console.log("updated army", [updatedArmy, ...prevState.slice(1)]); // Log the updated array
        return [updatedArmy, ...prevState.slice(1)];
      });
    },
    []
  );

  const handleTroopChange = useCallback(() => {
    console.log("handleTroopChange");
    handleTroopProgressChange();
  }, [handleTroopProgressChange]);

  const ctxValue = {
    armyList: TroopsData,
    trainingArmy: trainingArmy,
    addTroopToQueue: addTroopToQueue,
    removeTroopFromQueue: removeTroopFromQueue,
    handleTroopChange: handleTroopChange,
  };

  return <TroopCTX.Provider value={ctxValue}>{children}</TroopCTX.Provider>;
}
