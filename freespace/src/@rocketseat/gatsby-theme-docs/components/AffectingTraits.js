import React from 'react';

const AffectingTraits = ({ promptName }) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
  const savedTraits = JSON.parse(savedTraitsStr) || {}

  const prompts = {
    "ActUnderPressure": ["skillAcePilot", "skillColonist", "skillHacker", "skillInfiltrator", "skillMechanic", "skillScientist", "skillScoundrel", "skillSharpshooter", "skillShockTrooper", "gearCombatBot", "gearCombatExosuit", "gearEnergyShield", "gearHoloDisguise", "gearJetpack", "gearRepairTool", "gearPlasmaCutter", "vehicleModuleAfterburner", "vehicleModuleEnhancedSensors"],
    "SecureAnAdvantage": ["skillAcePilot", "skillAstrogator", "skillCommander", "skillExplorer", "skillHacker", "skillMechanic", "skillPerformer", "skillPirate", "skillScholar", "skillScientist", "skillSharpshooter", "skillSniper", "gearRepairTool", "gearPlasmaCutter", "gearReconDrone", "gearSmartGun", "vehicleModuleAfterburner", "vehicleModuleGrappler", "vehicleModuleMissileArray", "vehicleModuleShields", "vehicleModuleStealthTech"],
    "LeadTheTeam": ["skillCommander", "skillSpaceMarine"],
    "GatherInformation": ["skillAstrogator", "skillBountyHunter", "skillColonist", "skillDiplomat", "skillExplorer", "skillInfiltrator", "skillJournalist", "skillLawEnforcement", "skillScholar", "gearPersonalAssistant", "gearProtocolBot", "vehicleModuleEnhancedSensors", "vehicleModuleResearchLab"],
    "Compel": ["skillBrawler", "skillDiplomat", "skillFreeTrader", "skillJournalist", "skillLawEnforcement", "skillPerformer", "gearHoloDisguise", "gearProtocolBot", "vehicleModuleAestheticCustomizations"],
    "UseYourGear": ["skillScavenger", "vehicleModuleWorkshop"],
    "Clash": ["skillBrawler", "skillPirate", "skillScoundrel", "skillSharpshooter", "skillSniper", "skillSpaceMarine", "gearCombatBot", "gearCombatExosuit", "gearHeavyWeapon", "gearJetpack", "gearSmartGun", "vehicleModuleGrappler", "vehicleModuleMissileArray", "vehicleModuleWeaponryOvercharge"],
    "AcceptAChallenge": ["skillBountyHunter", "skillShockTrooper"],
    "MakeProgress": ["vehicleModuleMissileArray"],
    "FulfillAChallenge": ["skillAcePilot", "skillBountyHunter", "skillBrawler", "skillColonist", "skillCommander", "skillDiplomat", "skillExplorer", "skillFreeTrader", "skillHacker", "skillInfiltrator", "skillJournalist", "skillLawEnforcement", "skillScoundrel", "skillSharpshooter", "skillSpaceMarine"],
    "FailAChallenge": [],
    "EndureHarm": ["gearEnergyShield"],
    "EndureStress": [],
    "SacrificeResources": ["skillScavenger", "gearEnergyShield", "vehicleModuleMissileArray"],
    "FaceDeath": [],
    "FaceDesolation": [],
    "Heal": ["skillMedic", "gearNanoMedKit", "vehicleModuleMedbay"],
    "Relax": ["skillJournalist", "skillPerformer", "vehicleModuleRelaxingArea"],
    "Resupply": ["skillFreeTrader", "skillMedic", "skillScavenger", "gearReconDrone", "vehicleModuleExpandedHold", "vehicleModuleWorkshop"],
    "PayTheConsequences": ["vehicleModuleReinforcedHull", "vehicleModuleShields"],
    "QueryTheFates": [],
    "ImproveYourself": [],
    "Retire": [],
  }

  const traits = {
    "skillAcePilot": "ACE PILOT",
    "skillAstrogator": "ASTROGATOR",
    "skillBountyHunter": "BOUNTY HUNTER",
    "skillBrawler": "BRAWLER",
    "skillColonist": "COLONIST",
    "skillCommander": "COMMANDER",
    "skillDiplomat": "DIPLOMAT",
    "skillExplorer": "EXPLORER",
    "skillFreeTrader": "FREE TRADER",
    "skillHacker": "HACKER",
    "skillInfiltrator": "INFILTRATOR",
    "skillJournalist": "JOURNALIST",
    "skillLawEnforcement": "LAW ENFORCEMENT",
    "skillMechanic": "MECHANIC",
    "skillMedic": "MEDIC",
    "skillPerformer": "PERFORMER",
    "skillPirate": "PIRATE",
    "skillScavenger": "SCAVENGER",
    "skillScholar": "SCHOLAR",
    "skillScientist": "SCIENTIST",
    "skillScoundrel": "SCOUNDREL",
    "skillSharpshooter": "SHARPSHOOTER",
    "skillShockTrooper": "SHOCK TROOPER",
    "skillSniper": "SNIPER",
    "skillSpaceMarine": "SPACE MARINE",
    "gearCombatBot": "COMBAT BOT",
    "gearCombatExosuit": "COMBAT EXOSUIT",
    "gearEnergyShield": "ENERGY SHIELD",
    "gearHeavyWeapon": "HEAVY WEAPON",
    "gearHoloDisguise": "HOLO-DISGUISE",
    "gearJetpack": "JETPACK",
    "gearRepairTool": "REPAIR TOOL",
    "gearNanoMedKit": "NANO-MEDKIT",
    "gearPersonalAssistant": "PERSONAL ASSISTANT",
    "gearPlasmaCutter": "PLASMA CUTTER",
    "gearProtocolBot": "PROTOCOL BOT",
    "gearReconDrone": "RECON DRONE",
    "gearSmartGun": "SMART GUN",
    "vehicleModuleAestheticCustomizations": "AESTHETIC CUSTOMIZATIONS",
    "vehicleModuleAfterburner": "AFTERBURNER",
    "vehicleModuleEnhancedSensors": "ENHANCED SENSORS",
    "vehicleModuleExpandedHold": "EXPANDED HOLD",
    "vehicleModuleGrappler": "GRAPPLER",
    "vehicleModuleMedbay": "MEDBAY",
    "vehicleModuleMissileArray": "MISSILE ARRAY",
    "vehicleModuleReinforcedHull": "REINFORCED HULL",
    "vehicleModuleRelaxingArea": "RELAXING AREA",
    "vehicleModuleResearchLab": "RESEARCH LAB",
    "vehicleModuleShields": "SHIELDS",
    "vehicleModuleStealthTech": "STEALTH TECH",
    "vehicleModuleWeaponryOvercharge": "WEAPONRY OVERCHARGE",
    "vehicleModuleWorkshop": "WORKSHOP",
  }

  var affectingTraits = {};

  if (prompts[promptName] !== undefined) {
    prompts[promptName].forEach(traitKey => {
      if (savedTraits[traitKey] !== undefined && savedTraits[traitKey] == true) {
        affectingTraits[traitKey] = traits[traitKey];
      }
    });
  }

  if (Object.keys(affectingTraits).length > 0) {
    return (
      <div class="affecting_traits">
        <span class="descriptive_text" title="Some of your TRAITS reference this PROMPT under specific circumstances; check to see if they apply to the current situation.">Active <b>TRAITS</b> affecting this <b>PROMPT</b>: </span>
        {Object.entries(affectingTraits).map(([key, value], index) => (
            <span class="trait_link">{ index ? ', ' : ''}<a href={"/character-traits#" + key}>{value}</a></span>
          ))}
      </div>
    );
  } else {
    return null;
  }

};

export default AffectingTraits;