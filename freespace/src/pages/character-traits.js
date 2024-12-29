import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Trait from '/src/@rocketseat/gatsby-theme-docs/components/Trait'

import placeholder_art from '/src/images/placeholder.png';
import acepilot_art from '/src/images/acepilot.jpg';
import astrogator_art from '/src/images/astrogator.jpg';
import bountyhunter_art from '/src/images/bountyhunter.jpg';
import colonist_art from '/src/images/colonist.jpg';
import commander_art from '/src/images/commander.jpg';
import diplomat_art from '/src/images/diplomat.jpg';
import explorer_art from '/src/images/explorer.jpg';
import freetrader_art from '/src/images/freetrader.jpg';
import hacker_art from '/src/images/hacker.jpg';
import infiltrator_art from '/src/images/infiltrator.jpg';
import journalist_art from '/src/images/journalist.jpg';
import lawenforcement_art from '/src/images/lawenforcement.jpg';
import marauder_art from '/src/images/marauder.jpg';
import mechanic_art from '/src/images/mechanic.jpg';
import medic_art from '/src/images/medic.jpg';
import performer_art from '/src/images/performer.jpg';
import pirate_art from '/src/images/pirate.jpg';
import scavenger_art from '/src/images/scavenger.jpg';
import scholar_art from '/src/images/scholar.jpg';
import scientist_art from '/src/images/scientist.jpg';
import scoundrel_art from '/src/images/scoundrel.jpg';
import sharpshooter_art from '/src/images/sharpshooter.jpg';
import shocktrooper_art from '/src/images/shocktrooper.jpg';
import sniper_art from '/src/images/sniper.jpg';
import spacemarine_art from '/src/images/spacemarine.jpg';

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

            <Trait type="skill" name="AcePilot" title="ACE PILOT" art={acepilot_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while piloting a ship in high-stakes situations or combat, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by maneuvering your ship into a superior position or exploiting weaknesses in enemy tactics. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of a risky piloting chase, escape or stunt, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Astrogator" title="ASTROGATOR" art={astrogator_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> about star systems, planets, or celestial phenomena, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by plotting the best course through space or identifying the safest routes through hazardous areas.</span>
            </Trait>

            <Trait type="skill" name="BountyHunter" title="BOUNTY HUNTER" art={bountyhunter_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty or the procurement of a person. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of capturing a bounty, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Colonist" title="COLONIST" art={colonist_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> in a situation or environment that is new to you or outside of your comfort zone. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that improves the well-being of a remote community or outpost, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Commander" title="COMMANDER" art={commander_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#lead-the-team">LEAD THE TEAM</a> in organizing, strategizing, and executing a complex mission or task, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by planning ahead, gaining crucial intelligence, or positioning your team effectively. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that is very impactful for your whole team, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Diplomat" title="DIPLOMAT" art={diplomat_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#compel">COMPEL</a> others in negotiations, resolving conflicts or forging alliances through your diplomacy skills, or when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> through subtle questioning, leveraging your understanding of politics and social dynamics. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of a social encounter or a negotiation, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Explorer" title="EXPLORER" art={explorer_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> about unknown worlds, species, or phenomena during your explorations, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by leveraging your expertise in survival or navigating uncharted territories. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to an important discovery, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="FreeTrader" title="FREE TRADER" art={freetrader_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#compel">COMPEL</a> others to make deals, leveraging your negotiating abilities or valuable resources, or when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by acquiring valuable materials or trade goods at a lower cost than expected. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to transporting something important or sorely needed, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Hacker" title="HACKER" art={hacker_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while infiltrating systems, breaking encryption, or manipulating digital networks, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by exploiting vulnerabilities in tech, sabotaging systems or harnessing the unintended capabilities of a device to your benefit. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> primarily related to hacking, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Infiltrator" title="INFILTRATOR" art={infiltrator_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> by infiltrating, eavesdropping, or gathering intel through covert means, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while evading detection or working in dangerous, high-stakes situations. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of stealth or espionage, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Journalist" title="JOURNALIST" art={journalist_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> by using your expertise and rapport. You are also a good listener; when others rely on you to <a href="/prompts/recovery-prompts#relax">RELAX</a>, they gain a <span class="boost">BOOST</span>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to publicly uncovering a hard truth, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="LawEnforcement" title="LAW ENFORCEMENT" art={lawenforcement_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or when you <a href="/prompts/general-prompts#compel">COMPEL</a> by using your privileged status of law officer. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to delivering justice, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Marauder" title="MARAUDER" art={marauder_art} inputs={inputs} handleChange={handleChange}>
                <span>An expert of close combat and melee weaponry. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#compel">COMPEL</a> with your <span class="stat">PHYSIQUE</span>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of melee combat, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Mechanic" title="MECHANIC" art={mechanic_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by finding creative solutions to mechanical problems or designing efficient systems, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while fixing or jury-rigging something under the heat of danger.</span>
            </Trait>

            <Trait type="skill" name="Medic" title="MEDIC" art={medic_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/recovery-prompts#heal">HEAL</a> or provide medical care. Additionally, you gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by finding or sourcing medical supplies for yourself or others.</span>
            </Trait>
            
            <Trait type="skill" name="Performer" title="PERFORMER" art={performer_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> through your charisma or stage presence, or when you <a href="/prompts/general-prompts#compel">COMPEL</a> others using your persuasive talents or emotional appeal. When you entertain others to <a href="/prompts/recovery-prompts#relax">RELAX</a>, they gain a <span class="boost">BOOST</span>.</span>
            </Trait>

            <Trait type="skill" name="Pirate" title="PIRATE" art={pirate_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies during raids or space combat, using your ruthless and unpredictable methods, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by intimidating or deceiving your targets, or when you use your knowledge of piracy to outmaneuver rivals.</span>
            </Trait>

            <Trait type="skill" name="Scavenger" title="SCAVENGER" art={scavenger_art} inputs={inputs} handleChange={handleChange}>
                <span>Whenever you <a href="/prompts/general-prompts#use-your-gear">USE YOUR GEAR</a> or <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>, you spend one less than expected (minimum of 1). Also gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by scavenging or crafting.</span>
            </Trait>

            <Trait type="skill" name="Scholar" title="SCHOLAR" art={scholar_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> through research, study, or analyzing ancient texts or artifacts, or when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by applying your knowledge to solve problems or uncover hidden truths.</span>
            </Trait>

            <Trait type="skill" name="Scientist" title="SCIENTIST" art={scientist_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> by applying your scientific knowledge to solve technical or theoretical problems, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> by leveraging your out-of-the-box insights in the heat of the moment.</span>
            </Trait>

            <Trait type="skill" name="Scoundrel" title="SCOUNDREL" art={scoundrel_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> while performing criminal acts or pulling off high-risk schemes, or when you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies or rivals using clever tricks, traps, or other devious methods. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a con, a heist or swindle, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="Sharpshooter" title="SHARPSHOOTER" art={sharpshooter_art} inputs={inputs} handleChange={handleChange}>
                <span>Either when you take your time to aim or when you attempt a hip-shot, you gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">DEXTERITY</span> to shoot when you <a href="/prompts/general-prompts#clash">CLASH</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> that mainly involved ranged combat, you gain double XP.</span>
            </Trait>

            <Trait type="skill" name="ShockTropper" title="SHOCK TROOPER" art={shocktrooper_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> of deadly combat or tense action in which you are pitted against overwhelming odds, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> in chaotic, high-stakes situations.</span>
            </Trait>

            <Trait type="skill" name="Sniper" title="SNIPER" art={sniper_art} inputs={inputs} handleChange={handleChange}>
                <span>While attacking at long range, gain a <span class="boost">BOOST</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <i>IN CONTROL</i>.</span>
            </Trait>

            <Trait type="skill" name="SpaceMarine" title="SPACE MARINE" art={spacemarine_art} inputs={inputs} handleChange={handleChange}>
                <span>Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#clash">CLASH</a> with enemies in combat, using your specialized training in warfare, or when you <a href="/prompts/general-prompts#lead-the-team">LEAD THE TEAM</a> in battle, directing your allies with military precision. When you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> of dangerous combat, you gain double XP.</span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>
        
        <div class="traits-container" id="gear-container">

            <h2 id="items-and-gear">ITEMS AND GEAR</h2>
            
            <Trait type="gear" name="CombatBot" title="COMBAT BOT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="CombatExosuit" title="COMBAT EXOSUIT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="EnergyShield" title="ENERGY SHIELD" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="HeavyWeapon" title="HEAVY WEAPON" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="HoloDisguise" title="HOLO-DISGUISE" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="Jetpack" title="JETPACK" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="RepairTool" title="REPAIR TOOL" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="NanoMedkit" title="NANO-MEDKIT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="PersonalAssistant" title="PERSONAL ASSISTANT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="PlasmaCutter" title="PLASMA CUTTER" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="ProtocolBot" title="PROTOCOL BOT" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="ReconDrone" title="RECON DRONE" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

            <Trait type="gear" name="SmartGun" title="SMART GUN" art={placeholder_art} inputs={inputs} handleChange={handleChange}>
                <span></span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>

        <div class="traits-container" id="modules-container">

            <h2 id="vehicle-modules">VEHICLE MODULES</h2>

            <blockquote><p>If you have a vehicle like a <b>Spaceship</b>, <b>Exocraft</b> or <b>Mecha</b>, you can acquire any of these traits to improve it. If the vehicle is shared by the entire crew, any member can collaborate by purchasing different modules for it with their own XP.</p></blockquote>

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