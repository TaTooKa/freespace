import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Trait from '/src/@rocketseat/gatsby-theme-docs/components/Trait'

// import placeholder_art from '/src/images/placeholder.png';
// import acepilot_art from '/src/images/acepilot.jpg';
// import astrogator_art from '/src/images/astrogator.jpg';
// import bountyhunter_art from '/src/images/bountyhunter.jpg';
// import colonist_art from '/src/images/colonist.jpg';
// import commander_art from '/src/images/commander.jpg';
// import diplomat_art from '/src/images/diplomat.jpg';
// import explorer_art from '/src/images/explorer.jpg';
// import freetrader_art from '/src/images/freetrader.jpg';
// import hacker_art from '/src/images/hacker.jpg';
// import infiltrator_art from '/src/images/infiltrator.jpg';
// import journalist_art from '/src/images/journalist.jpg';
// import lawenforcement_art from '/src/images/lawenforcement.jpg';
// import marauder_art from '/src/images/marauder.jpg';
// import mechanic_art from '/src/images/mechanic.jpg';
// import medic_art from '/src/images/medic.jpg';
// import performer_art from '/src/images/performer.jpg';
// import pirate_art from '/src/images/pirate.jpg';
// import scavenger_art from '/src/images/scavenger.jpg';
// import scholar_art from '/src/images/scholar.jpg';
// import scientist_art from '/src/images/scientist.jpg';
// import scoundrel_art from '/src/images/scoundrel.jpg';
// import sharpshooter_art from '/src/images/sharpshooter.jpg';
// import shocktrooper_art from '/src/images/shocktrooper.jpg';
// import sniper_art from '/src/images/sniper.jpg';
// import spacemarine_art from '/src/images/spacemarine.jpg';
// import combatbot_art from '/src/images/combatbot.jpg';
// import combatexosuit_art from '/src/images/combatexosuit.jpg';
// import energyshield_art from '/src/images/energyshield.jpg';

  export const traits = {
    "skill": [
        {
            "name": "AcePilot",
            "title": "ACE PILOT",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while piloting a ship in high-stakes situations or combat, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by maneuvering your ship into a superior position or exploiting weaknesses in enemy tactics. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of a risky piloting chase, escape or stunt, you gain double XP.',
            "affectedPrompts": ["ActUnderPressure", "SecureAnAdvantage", "FulfillAChallenge"]
        },
        {
            "name": "Astrogator",
            "title": "ASTROGATOR",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> about star systems, planets, or celestial phenomena, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by plotting the best course through space or identifying the safest routes through hazardous areas.',
            "affectedPrompts": ["GatherInformation", "SecureAnAdvantage"]
        },
        {
            "name": "BountyHunter",
            "title": "BOUNTY HUNTER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty or the procurement of a person. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of capturing a bounty, you gain double XP.',
            "affectedPrompts": ["GatherInformation", "AcceptAChallenge", "FulfillAChallenge"]
        },
        {
            "name": "Brawler", 
            "title": "BRAWLER",
            "description": 'An expert of close combat and melee weaponry. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> with your <span class="stat">PHYSIQUE</span>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of melee combat, you gain double XP.',
            "affectedPrompts": ["Clash", "Compel", "FulfillAChallenge"]
        },
        {
            "name": "Colonist",
            "title": "COLONIST",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> in a situation or environment that is new to you or outside of your comfort zone. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that improves the well-being of a remote community or outpost, you gain double XP.',
            "affectedPrompts": ["ActUnderPressure", "GatherInformation", "FulfillAChallenge"]
        },
        {
            "name": "Commander",
            "title": "COMMANDER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#lead-the-team">LEAD THE TEAM</a> in organizing, strategizing, and executing a complex mission or task, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by planning ahead, gaining crucial intelligence, or positioning your team effectively. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that is very impactful for your whole team, you gain double XP.',
            "affectedPrompts": ["LeadTheTeam", "SecureAnAdvantage", "FulfillAChallenge"]
        },
        {
            "name": "Diplomat",
            "title": "DIPLOMAT",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#compel">COMPEL</a> others in negotiations, resolving conflicts or forging alliances through your diplomacy skills, or when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> through subtle questioning, leveraging your understanding of politics and social dynamics. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of a social encounter or a negotiation, you gain double XP.',
            "affectedPrompts": ["Compel", "GatherInformation", "FulfillAChallenge"]
        },
        {
            "name": "Explorer",
            "title": "EXPLORER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> about unknown worlds, species, or phenomena during your explorations, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by leveraging your expertise in survival or navigating uncharted territories. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to an important discovery, you gain double XP.',
            "affectedPrompts": ["GatherInformation", "SecureAnAdvantage", "FulfillAChallenge"]
        },
        {
            "name": "FreeTrader",
            "title": "FREE TRADER",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> others to make deals, leveraging your negotiating abilities or valuable resources, or when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by acquiring valuable materials or trade goods at a lower cost than expected. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to transporting something important or sorely needed, you gain double XP.',
            "affectedPrompts": ["Compel", "Resupply", "FulfillAChallenge"]
        },
        {
            "name": "Hacker",
            "title": "HACKER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while infiltrating systems, breaking encryption, or manipulating digital networks, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by exploiting vulnerabilities in tech, sabotaging systems or harnessing the unintended capabilities of a device to your benefit. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> primarily related to hacking, you gain double XP.',
            "affectedPrompts": ["ActUnderPressure", "SecureAnAdvantage", "FulfillAChallenge"]
        },
        {
            "name": "Infiltrator",
            "title": "INFILTRATOR",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> others to make deals, leveraging your negotiating abilities or valuable resources, or when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by acquiring valuable materials or trade goods at a lower cost than expected. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to transporting something important or sorely needed, you gain double XP.',
            "affectedPrompts": ["Compel", "Resupply", "FulfillAChallenge"]
        },
        {
            "name": "Journalist",
            "title": "JOURNALIST",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> by using your expertise and rapport. You are also a good listener; when others rely on you to <a href="/prompts/recovery-prompts#relax">RELAX</a>, they gain a <span class="boost">BOOST</span>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to publicly uncovering a hard truth, you gain double XP.',
            "affectedPrompts": ["GatherInformation", "Compel", "Relax", "FulfillAChallenge"]
        },
        {
            "name": "LawEnforcement",
            "title": "LAW ENFORCEMENT",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or when you <a href="/prompts/general-prompts#compel">COMPEL</a> by using your privileged status of law officer. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to delivering justice, you gain double XP.',
            "affectedPrompts": ["GatherInformation", "Compel", "FulfillAChallenge"]
        },
        {
            "name": "Mechanic",
            "title": "MECHANIC",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by finding creative solutions to mechanical problems or designing efficient systems, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while fixing or jury-rigging something under the heat of danger.',
            "affectedPrompts": ["SecureAnAdvantage", "ActUnderPressure"]
        },
        {
            "name": "Medic",
            "title": "MEDIC",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/recovery-prompts#heal">HEAL</a> or provide medical care. Additionally, you gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by finding or sourcing medical supplies for yourself or others.',
            "affectedPrompts": ["Heal", "Resupply"]
        },
        {
            "name": "Performer",
            "title": "PERFORMER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> through your charisma or stage presence, or when you <a href="/prompts/general-prompts#compel">COMPEL</a> others using your persuasive talents or emotional appeal. When you entertain others to <a href="/prompts/recovery-prompts#relax">RELAX</a>, they gain a <span class="boost">BOOST</span>.',
            "affectedPrompts": ["SecureAnAdvantage", "Compel", "Relax"]
        },
        {
            "name": "Pirate",
            "title": "PIRATE",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies during raids or space combat, using your ruthless and unpredictable methods, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by intimidating or deceiving your targets, or when you use your knowledge of piracy to outmaneuver rivals.',
            "affectedPrompts": ["Clash", "SecureAnAdvantage"]
        },
        {
            "name": "Scavenger",
            "title": "SCAVENGER",
            "description": 'Whenever you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> or <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>, you spend one less than expected (minimum of 1). Also gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by scavenging or crafting.',
            "affectedPrompts": ["UseYourGear", "SacrificeResources", "Resupply"]
        },
        {
            "name": "Scholar",
            "title": "SCHOLAR",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> through research, study, or analyzing ancient texts or artifacts, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by applying your knowledge to solve problems or uncover hidden truths.',
            "affectedPrompts": ["GatherInformation", "SecureAnAdvantage"]
        },
        {
            "name": "Scientist",
            "title": "SCIENTIST",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by applying your scientific knowledge to solve technical or theoretical problems, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> by leveraging your out-of-the-box insights in the heat of the moment.',
            "affectedPrompts": ["SecureAnAdvantage", "ActUnderPressure"]
        },
        {
            "name": "Scoundrel",
            "title": "SCOUNDREL",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while performing criminal acts or pulling off high-risk schemes, or when you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies or rivals using clever tricks, traps, or other devious methods. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a con, a heist or swindle, you gain double XP.',
            "affectedPrompts": ["ActUnderPressure", "Clash", "FulfillAChallenge"]
        },
        {
            "name": "Sharpshooter",
            "title": "SHARPSHOOTER",
            "description": 'Either when you take your time to aim or when you attempt a hip-shot, you gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">DEXTERITY</span> to shoot when you <a href="/prompts/general-prompts#clash">CLASH</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that mainly involved ranged combat, you gain double XP.',
            "affectedPrompts": ["Clash", "SecureAnAdvantage", "ActUnderPressure", "FulfillAChallenge"]
        },
        {
            "name": "ShockTrooper",
            "title": "SHOCK TROOPER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> of deadly combat or tense action in which you are pitted against overwhelming odds, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> in chaotic, high-stakes situations.', 
            "affectedPrompts": ["AcceptAChallenge", "ActUnderPressure"]
        },
        {
            "name": "Sniper",
            "title": "SNIPER",
            "description": 'While attacking at long range, gain a <span class="boost">BOOST</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <i>IN CONTROL</i>.',
            "affectedPrompts": ["Clash", "SecureAnAdvantage"]
        },
        {
            "name": "SpaceMarine",
            "title": "SPACE MARINE",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies in combat, using your specialized training in warfare, or when you <a href="/prompts/general-prompts#lead-the-team">LEAD THE TEAM</a> in battle, directing your allies with military precision. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of dangerous combat, you gain double XP.',
            "affectedPrompts": ["Clash", "LeadTheTeam", "FulfillAChallenge"]
        }
    ],
    "gear": [
        {
            "name": "CombatBot",
            "title": "COMBAT BOT",
            "description": 'This combat robot is equipped with advanced weaponry and combat protocols. Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies using your combat bot, or when it helps you to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> in battle.',
            "affectedPrompts": ["Clash", "ActUnderPressure"]
        },
        {
            "name": "CombatExosuit",
            "title": "COMBAT EXOSUIT",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#clash">CLASH</a> in combat using your combat exosuit, which enhances strength and endurance, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while enduring damage or operating in extreme conditions, as the suit offers protection and increased physical capabilities.',
            "affectedPrompts": ["Clash", "ActUnderPressure"]    
        },
        {
            "name": "EnergyShield",
            "title": "ENERGY SHIELD",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/suffer-prompts#endure-harm">ENDURE HARM</a> to resist or deflect incoming attacks using your personal energy shield. Whenever you would have to <a href="/prompts/suffer-prompts#endure-harm">ENDURE HARM</a>, if you have enough <b>RESOURCES</b>, you can <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a> instead, by deviating more energy to your shields.',
            "affectedPrompts": ["ActUnderPressure", "EndureHarm", "SacrificeResources"]
        },
        {
            "name": "HeavyWeapon",
            "title": "HEAVY WEAPON",
            "description": 'Your weapon is stronger than normal. You can make a dent against armored targets (like vehicles or ships), and you gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> against regular targets.',
            "affectedPrompts": ["Clash"]
        },
        {
            "name": "HoloDisguise",
            "title": "HOLO-DISGUISE",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#compel">COMPEL</a>, by deceiving others or avoiding detection by using your holo-disguise to project a false identity or camouflage.',
            "affectedPrompts": ["ActUnderPressure", "Compel"]
        },
        {
            "name": "Jetpack",
            "title": "JETPACK",
            "description": 'You have the ability to fly a short distance or hover in place for a while. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> with <span class="stat">DEXTERITY</span>.',
            "affectedPrompts": ["Clash", "ActUnderPressure"]
        },
        {
            "name": "RepairTool",
            "title": "REPAIR TOOL",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to quickly repair broken or damaged items, vehicles, or equipment, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by using it to patch up critical systems or enhance a tech device or other machinery.',
            "affectedPrompts": ["ActUnderPressure", "SecureAnAdvantage"]
        },
        {
            "name": "NanoMedKit",
            "title": "NANO-MEDKIT",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/recovery-prompts#heal">HEAL</a> or provide medical care using your advanced nano-medkit, which can rapidly treat injuries and other illnesses.',
            "affectedPrompts": ["Heal"]
        },
        {
            "name": "PersonalAssistant",
            "title": "PERSONAL ASSISTANT",
            "description": 'This embedded computer or portable device understands your inquiries and gives you detailed data on any topic that might be useful for the current context. Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>.',
            "affectedPrompts": ["GatherInformation"]
        },
        {
            "name": "PlasmaCutter",
            "title": "PLASMA CUTTER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> to cut through barriers, armor, or obstacles with your plasma cutter, especially when breaking into secure locations or dismantling dangerous devices.',
            "affectedPrompts": ["ActUnderPressure", "SecureAnAdvantage"]
        },
        {
            "name": "ProtocolBot",
            "title": "PROTOCOL BOT",
            "description": 'This protocol droid is programmed with knowledge of cultures, languages, and customs. Gain a <span class="boost">BOOST</span> whenever you use its help to <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">RESOLVE</span> or <span class="stat">SUBTERFUGE</span>, or when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> by having it ask in a polite and diplomatic way.',
            "affectedPrompts": ["GatherInformation", "Compel"]
        },
        {
            "name": "ReconDrone",
            "title": "RECON DRONE",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by deploying your recon drone for stealthy reconnaissance, surveillance, or scouting missions. It can gather information on enemy positions, terrain, or hidden threats, allowing you to make better-informed decisions. You also gain a <span class="boost">BOOST</span> when it helps you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by scavenging with <span class="stat">INTELLECT</span>.',
            "affectedPrompts": ["SecureAnAdvantage", "Resupply"]
        },
        {
            "name": "SmartGun",
            "title": "SMART GUN",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by using your smart gun, which automatically adjusts for target distance, movement, and environmental conditions.',
            "affectedPrompts": ["Clash", "SecureAnAdvantage"]
        }
    ],
    "vehicleModule": [
        {
            "name": "AestheticCustomizations",
            "title": "AESTHETIC CUSTOMIZATIONS",
            "description": 'Your vehicle has been inventively customized and decorated to look impressive. Whether it’s awe-inspiring or intimidating, it gives you a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> from inside it or by leveraging its presence.',
            "affectedPrompts": ["Compel"]
        },
        {
            "name": "Afterburner",
            "title": "AFTERBURNER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> while benefiting from a momentary surge in speed and maneuverability.',
            "affectedPrompts": ["ActUnderPressure", "SecureAnAdvantage"]
        },
        {
            "name": "EnhancedSensors",
            "title": "ENHANCED SENSORS",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> by scanning your vehicle`s surroundings or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> by reacting to something that could be preemptively detected by your vehicle`s passive scanners.',
            "affectedPrompts": ["GatherInformation", "ActUnderPressure"]
        },
        {
            "name": "ExpandedHold",
            "title": "EXPANDED HOLD",
            "description": 'Your vehicle can transport more volume than normal. Also, if you have access to your vehicle cargo hold, whenever you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> you can gain an instant <span class="turquoise bold">SUCCESS</span> without rolling. Do this only once, until you have an opportunity to restock your vehicle properly.',
            "affectedPrompts": ["Resupply"]
        },
        { 
            "name": "Grappler",
            "title": "GRAPPLER",
            "description": 'Gain a <span class="boost">BOOST</span> whenever you try to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> against an enemy craft by restraining it with your Grappler. If you <a href="/prompts/general-prompts#clash">CLASH</a> against an enemy vehicle that is grappled by yours, you gain a <span class="boost">BOOST</span> to that roll.',
            "affectedPrompts": ["SecureAnAdvantage", "Clash"]
        },
        {
            "name": "Medbay",
            "title": "MEDBAY",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a> by perusing the Medbay in your vehicle.', 
            "affectedPrompts": ["Heal"]
        },
        {
            "name": "MissileArray",
            "title": "MISSILE ARRAY",
            "description": 'While in vehicle combat, if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (-2)</a> you can ready a missile. First you need to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> to acquire a lock. On a <span class="turquoise bold">SUCCESS</span>, you lock onto your target and maintain it as long as you are <i>IN CONTROL</i>. If you <a href="/prompts/general-prompts#clash">CLASH</a> successfully against that target, you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a> twice against it.',
            "affectedPrompts": ["SecureAnAdvantage", "Clash", "MakeProgress", "SacrificeResources"]
        },
        {
            "name": "ReinforcedHull",
            "title": "REINFORCED HULL",
            "description": 'Your vehicle is heavily armored. Whenever you would <a href="/prompts/suffer-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a> by withstanding damage to it, and the most obvious outcome would be to have your vehicle disabled or destroyed, you can ignore that fact by having its armor take the brunt of that damage instead. You can do this only once until you have an opportunity to properly fix or patch its Reinforced Hull.',
            "affectedPrompts": ["PayTheConsequences"]
        },
        {
            "name": "RelaxingArea",
            "title": "RELAXING AREA",
            "description": 'You have customized a corner, a compartment or a whole area of your vehicle to your liking, with cozy decorations and/or comfortable amenities. Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/recovery-prompts#relax">RELAX</a> by enjoying those conveniences.',
            "affectedPrompts": ["Relax"]
        },
        {
            "name": "ResearchLab",
            "title": "RESEARCH LAB",
            "description": 'Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> by harnessing the advantages of the Research Lab in your vehicle.',
            "affectedPrompts": ["GatherInformation"]
        },
        {
            "name": "Shields",
            "title": "SHIELDS",
            "description": 'While in your vehicle, whenever you would <a href="/prompts/suffer-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a> because it receives damage, if you are <i>IN CONTROL</i> disregard that outcome; instead the Shields flicker and you are put <i>IN A BAD SPOT</i>. If you already were <i>IN A BAD SPOT</i>, disregard that outcome but your vehicle’s shields are completely depleted. With your shields down, the next source of damage could be lethal. You can only bring your shields up again if you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">INTELLECT</span> and you succeed.',
            "affectedPrompts": ["PayTheConsequences"]
        },
        {
            "name": "StealthTech",
            "title": "STEALTH TECH",
            "description": 'Your vehicle has been modded for silent running or some other sort of cloaking technology. While in this mode, if you are <i>IN CONTROL</i> you can achieve an automatic <span class="turquoise bold">SUCCESS</span> in any prompt that would benefit from being “invisible”. If you are <i>IN A BAD SPOT</i>, you gain a <span class="boost">BOOST</span> to that prompt instead. Afterwards, your vehicle is revealed to your opponents and you are automatically put <i>IN A BAD SPOT</i>. The only way to regain the stealth mode is to be <i>IN CONTROL</i> and <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with <span class="stat">SUBTERFUGE</span>.',
            "affectedPrompts": ["SecureAnAdvantage"]
        },
        {
            "name": "WeaponryOvercharge",
            "title": "WEAPONRY OVERCHARGE",
            "description": 'If you are in vehicle combat and you are <i>IN CONTROL</i>, you can overcharge your weapons and gain a <span class="boost">BOOST</span> to <a href="/prompts/general-prompts#clash">CLASH</a>, but the gamble puts you <i>IN A BAD SPOT</i> afterwards.',
            "affectedPrompts": ["Clash"]
        },
        {
            "name": "Workshop",
            "title": "WORKSHOP",
            "description": 'Gain a <span class="boost">BOOST</span> if you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> with <span class="stat">INTELLECT</span> to craft something in your vehicle’s Workshop. Also, whenever you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> by leveraging whatever spare parts or junk you can find in the Workshop, spend 1 less RESOURCE (minimum of 1). Do this only once, until you have an opportunity to restock your Workshop properly.',
            "affectedPrompts": ["UseYourGear", "Resupply"]
        }
    ],
  }

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "SKILLS AND BACKGROUND"},
    {depth: 2, value: "ITEMS AND GEAR"},
    {depth: 2, value: "VEHICLE MODULES"},
]

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [inputs, setInputs] = useState(() => {
    const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
    const savedTraits = JSON.parse(savedTraitsStr)
    const defaultTraits = {'trait-toggle': 'toggleVisibilityAll'};
    turnOnForm();

    return savedTraits || defaultTraits;
  })

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        if ( name == "trait-toggle") {
          toggleVisibility(event.target.id);
        }
        setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("traits", JSON.stringify(inputs))
    }

    // Update current traits textbox
    var active_traits_el = document.getElementById('active-traits-text');
    var all_traits_names_and_links = [];
    Object.keys(inputs).map((key, index) => {
        var element = document.getElementById(key);
        if ( element && element.type == "checkbox" ) {
            var trait_label = element.nextElementSibling;
            var trait_name = trait_label.querySelector('.trait-name').innerHTML;
            if ( element.checked == true ) {
                all_traits_names_and_links.push({'name': trait_name, 'id': key});
            }
        }
    })
    var all_traits_anchors = [];
    var activeTraits = "";
    if ( all_traits_names_and_links.length > 0 ) {
        all_traits_names_and_links.forEach((element) => {
            all_traits_anchors.push('<a href="/character-traits#'+element.id+'">'+element.name+'</a>');
        })
        activeTraits = all_traits_anchors.join(", ");
        active_traits_el.innerHTML = activeTraits;
    } else {
        activeTraits = "NONE YET. Pick 3 TRAITS to start."
        active_traits_el.textContent = activeTraits;
    }
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("activeTraits", activeTraits);
      toggleVisibility(inputs['trait-toggle']);
    }
  }

  async function toggleVisibility(setting) {
    if ( setting == "toggleVisibilityAll") {
      var elements = document.getElementsByClassName('trait');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
      }
      await delay(200);
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('invisible');
      }
    } else {
      var elements = document.getElementsByClassName('trait inactive');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('invisible');
      }
      await delay(600);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    }
  }

  async function turnOnForm() {
    await delay(1500);
    var loadingEl = document.getElementById("traits-loading-container");
    if ( !Object.is(loadingEl, null) ) {
      loadingEl.style.display = "none";
      var traitsFormEl = document.getElementById("character-traits-form");
      traitsFormEl.style.display = "block";
      
      // scroll to anchor, if present in url
      const hash = window.location.hash.substring(1);
      if ( hash.length !== 0 )  {
        window.location = window.location;
      }
    }
  }

  return (
    <Layout title="CHARACTER TRAITS" headings={headings}>
      <Seo title="Character Traits" />
      <div class="active-traits">
        <span id="active-traits-title">Your current TRAITS: </span>
        <span id="active-traits-text"></span>
      </div>

      <div id="traits-loading-container">
        <span class="glitch" data-text="LOADING">LOADING...</span>
      </div>
      <form class="character-traits" id="character-traits-form">

        <div id="toggle-visibility-container">
          <input id="toggleVisibilityAll" class="toggleVisibilityInput" type="radio" name="trait-toggle" value={inputs.toggleVisibilityAll || "toggleVisibilityAll"} onChange={handleChange} checked={inputs['trait-toggle']==="toggleVisibilityAll"}/><label for="toggleVisibilityAll" class="toggleVisibilityLabel">SHOW ALL</label>
          <input id="toggleVisibilityActiveOnly" class="toggleVisibilityInput" type="radio" name="trait-toggle" value={inputs.toggleVisibilityActiveOnly || "toggleVisibilityActiveOnly"} onChange={handleChange} checked={inputs['trait-toggle']==="toggleVisibilityActiveOnly"}/><label for="toggleVisibilityActiveOnly" class="toggleVisibilityLabel">ACTIVE ONLY</label>
        </div>

        <div class="traits-container" id="skills-container">
            <h2 id="skills-and-background">SKILLS AND BACKGROUND</h2>

            {Object.entries(traits.skill).map(([index, trait]) => (
                <Trait type="skill" name={trait.name} title={trait.title} inputs={inputs} handleChange={handleChange}>
                    <span dangerouslySetInnerHTML={{ __html: trait.description }} />
                </Trait>
            ))}

        </div>

        <br/>
        <hr/>
        <br/>
        
        <div class="traits-container" id="gear-container">

            <h2 id="items-and-gear">ITEMS AND GEAR</h2>
            
            {Object.entries(traits.gear).map(([index, trait]) => (
                <Trait type="gear" name={trait.name} title={trait.title} inputs={inputs} handleChange={handleChange}>
                    <span dangerouslySetInnerHTML={{ __html: trait.description }} />
                </Trait>
            ))}

        </div>

        <br/>
        <hr/>
        <br/>

        <div class="traits-container" id="modules-container">

            <h2 id="vehicle-modules">VEHICLE MODULES</h2>

            <blockquote><p>If you have a vehicle like a <b>Spaceship</b>, <b>Exocraft</b> or <b>Mecha</b>, you can acquire any of these traits to improve it. If the vehicle is shared by the entire crew, any member can collaborate by purchasing different modules for it with their own XP.</p></blockquote>

            {Object.entries(traits.vehicleModule).map(([index, trait]) => (
                <Trait type="vehicleModule" name={trait.name} title={trait.title} inputs={inputs} handleChange={handleChange}>
                    <span dangerouslySetInnerHTML={{ __html: trait.description }} />
                </Trait>
            ))}

        </div>

        <br/>
        <hr/>
        <br/>
        <br/>

        
      </form>
    </Layout>
  )
}

export default CharacterStats