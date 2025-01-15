import LightningSpell from "./assets/LightningSpell.jpg";
import HealingSpell from "./assets/HealingSpell.jpg";
import RageSpell from "./assets/RageSpell.jpg";
import JumpSpell from "./assets/JumpSpell.jpg";
import FreezeSpell from "./assets/FreezeSpell.jpg";
import CloneSpell from "./assets/CloneSpell.jpg";

export const SpellsData = [
  {
    Name: "Lightning Spell",
    Image: LightningSpell,
    Type: "Damage",
    HousingSpace: 1,
    TrainingTime: "6m",
    TrainingTimeMilliseconds: 3000, // 6 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
  {
    Name: "Healing Spell",
    Image: HealingSpell,
    Type: "Healing",
    HousingSpace: 2,
    TrainingTime: "6m",
    TrainingTimeMilliseconds: 360000, // 6 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
  {
    Name: "Rage Spell",
    Image: RageSpell,
    Type: "Boost",
    HousingSpace: 2,
    TrainingTime: "6m",
    TrainingTimeMilliseconds: 360000, // 6 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
  {
    Name: "Jump Spell",
    Image: JumpSpell,
    Type: "Support",
    HousingSpace: 2,
    TrainingTime: "6m",
    TrainingTimeMilliseconds: 360000, // 6 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
  {
    Name: "Freeze Spell",
    Image: FreezeSpell,
    Type: "Control",
    HousingSpace: 1,
    TrainingTime: "3m",
    TrainingTimeMilliseconds: 180000, // 3 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
  {
    Name: "Clone Spell",
    Image: CloneSpell,
    Type: "Summon",
    HousingSpace: 4,
    TrainingTime: "6m",
    TrainingTimeMilliseconds: 360000, // 6 minutes in milliseconds
    Level: 1, // You can add level if applicable
  },
];
