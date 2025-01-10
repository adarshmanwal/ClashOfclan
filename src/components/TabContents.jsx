import React from "react";
import TrainArmy from "./TrainArmy";
import BrewSpell from "./BrewSpell";
import SiegeMachine from "./SiegeMachine";
import Army from "./Army";

export default function TabContents({ selectedTab }) {
  return (
    <div>
      {selectedTab === "ARMY" && (
        <Army></Army>
      )}
      {selectedTab === "TRAIN-TROOPS" && (
        <TrainArmy></TrainArmy>
      )}
      {selectedTab === "BREW-SPELLS" && (
        <BrewSpell></BrewSpell>
      )}
      {selectedTab === "BUILD-SIEGE" && (
        <SiegeMachine></SiegeMachine>
      )}
      {selectedTab === "QUICK-TRAIN" && (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Quick Train</h1>
          <p>
            Use the quick train feature to save time and deploy pre-set troop
            combinations instantly for your next battle.
          </p>
        </div>
      )}
    </div>
  );
}
