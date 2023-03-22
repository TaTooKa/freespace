import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import blademaster_art from '/src/images/blademaster.jpg';
import bountyhunter_art from '/src/images/bountyhunter.jpg';
import brawler_art from '/src/images/brawler.jpg';
import diplomat_art from '/src/images/diplomat.jpg';
import driver_art from '/src/images/driver.jpg';
import face_art from '/src/images/face.jpg';
import infiltrator_art from '/src/images/infiltrator.jpg';
import medic_art from '/src/images/medic.jpg';
import netrunner_art from '/src/images/netrunner.jpg';
import sniper_art from '/src/images/sniper.jpg';
import streetrat_art from '/src/images/streetrat.jpg';
import armored_art from '/src/images/armored.jpg';
import brainbox_art from '/src/images/brainbox.jpg';
import cyberclaws_art from '/src/images/cyberclaws.jpg';
import cyberdeck_art from '/src/images/cyberdeck.jpg';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "SKILLS AND BACKGROUND"},
    {depth: 2, value: "GEAR AND CYBERWARE"},
    {depth: 2, value: "CONTACTS"},
]

  const [inputs, setInputs] = useState(() => {
    const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
    const savedTraits = JSON.parse(savedTraitsStr)
    return savedTraits || {
    }
  })

  const handleChange = (event) => {
    // console.log(event, event.target.name, event.target.value, event.target.checked)
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
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
        if ( element.type == "checkbox" ) {
            var trait_label = element.nextElementSibling;
            var trait_name = trait_label.querySelector('.trait-name').innerHTML;
            if ( element.checked == true ) {
                all_traits_names_and_links.push({'name': trait_name, 'id': key});
            }
        }
    })
    var all_traits_anchors = [];
    if ( all_traits_names_and_links.length > 0 ) {
        all_traits_names_and_links.forEach((element) => {
            all_traits_anchors.push('<a href="/character-traits#'+element.id+'">'+element.name+'</a>');
        })
        active_traits_el.innerHTML = all_traits_anchors.join(", ");
    } else {
        active_traits_el.textContent = "NONE YET. Pick 3 TRAITS to start."
    }
  }

  return (
    <Layout title="CHARACTER TRAITS" headings={headings}>
      <Seo title="Character Traits" />
      <div class="active-traits">
        <span id="active-traits-title">Your current TRAITS: </span>
        <span id="active-traits-text"></span>
      </div>

      <form class="character-traits">

        <div class="traits-container" id="skills-container">
            <h2 id="skills-and-background">SKILLS AND BACKGROUND</h2>
            <div class="trait skill">
                <input id="skillBlademaster" type="checkbox" name="skillBlademaster" value={inputs.skillBlademaster} onChange={handleChange} defaultChecked={inputs.skillBlademaster}/>
                <label for="skillBlademaster"> <span class="trait-name">BLADEMASTER</span>: when wielding a long blade, gain a <span class="boost">BOOST</span> when you test <span class="stat">CHROME</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</label>
                <img src={blademaster_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillBountyHunter" type="checkbox" name="skillBountyHunter" value={inputs.skillBountyHunter} onChange={handleChange} defaultChecked={inputs.skillBountyHunter}/>
                <label for="skillBountyHunter"> <span class="trait-name">BOUNTY HUNTER</span>: gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty.</label>
                <img src={bountyhunter_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillBrawler" type="checkbox" name="skillBrawler" value={inputs.skillBrawler} onChange={handleChange} defaultChecked={inputs.skillBrawler}/>
                <label for="skillBrawler"> <span class="trait-name">BRAWLER</span>: gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> as long as you are leveraging your unarmed fighting prowess.</label>
                <img src={brawler_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillDiplomat" type="checkbox" name="skillDiplomat" value={inputs.skillDiplomat} onChange={handleChange} defaultChecked={inputs.skillDiplomat}/>
                <label for="skillDiplomat"> <span class="trait-name">DIPLOMAT</span>: gain a <span class="boost">BOOST</span> for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement.</label>
                <img src={diplomat_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillDriver" type="checkbox" name="skillDriver" value={inputs.skillDriver} onChange={handleChange} defaultChecked={inputs.skillDriver}/>
                <label for="skillDriver"> <span class="trait-name">DRIVER</span>: gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while piloting a vehicle.</label>
                <img src={driver_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillFace" type="checkbox" name="skillFace" value={inputs.skillFace} onChange={handleChange} defaultChecked={inputs.skillFace}/>
                <label for="skillFace"> <span class="trait-name">FACE</span>: gain a <span class="boost">BOOST</span> when attempting to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with leadership, coordination or planning; or when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> by testing your <span class="stat">FLASH</span>.</label>
                <img src={face_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillInfiltrator" type="checkbox" name="skillInfiltrator" value={inputs.skillInfiltrator} onChange={handleChange} defaultChecked={inputs.skillInfiltrator}/>
                <label for="skillInfiltrator"> <span class="trait-name">INFILTRATOR</span>: gain a <span class="boost">BOOST</span> for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy.</label>
                <img src={infiltrator_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillMedic" type="checkbox" name="skillMedic" value={inputs.skillMedic} onChange={handleChange} defaultChecked={inputs.skillMedic}/>
                <label for="skillMedic"> <span class="trait-name">MEDIC</span>: gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a>, and if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a> for it, spend 1 less GEAR than needed to gain the same benefits.</label>
                <img src={medic_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillNetrunner" type="checkbox" name="skillNetrunner" value={inputs.skillNetrunner} onChange={handleChange} defaultChecked={inputs.skillNetrunner}/>
                <label for="skillNetrunner"> <span class="trait-name">NETRUNNER</span>: gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</label>
                <img src={netrunner_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillSniper" type="checkbox" name="skillSniper" value={inputs.skillSniper} onChange={handleChange} defaultChecked={inputs.skillSniper}/>
                <label for="skillSniper"> <span class="trait-name">SNIPER</span>: while attacking at long range, gain a <span class="boost">BOOST</span> in <a href="/prompts/general-prompts#clash">CLASH</a> and <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <i>IN CONTROL</i>.</label>
                <img src={sniper_art} class="art"/>
            </div>
            <div class="trait skill">
                <input id="skillStreetRat" type="checkbox" name="skillStreetRat" value={inputs.skillStreetRat} onChange={handleChange} defaultChecked={inputs.skillStreetRat}/>
                <label for="skillStreetRat"> <span class="trait-name">STREET RAT</span>: gain a <span class="boost">BOOST</span> for any test involving lying, bluffing, stealing or cheating.</label>
                <img src={streetrat_art} class="art"/>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="gear-container">
            <h2 id="gear-and-cyberware">GEAR AND CYBERWARE</h2>
            <div class="trait gear">
                <input id="gearArmored" type="checkbox" name="gearArmored" value={inputs.gearArmored} onChange={handleChange} defaultChecked={inputs.gearArmored}/>
                <label for="gearArmored"> <span class="trait-name">ARMORED</span>: <i>Shiny and Chrome</i>. gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> against physical attacks or impact damage.</label>
                <img src={armored_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearBrainbox" type="checkbox" name="gearBrainbox" value={inputs.gearBrainbox} onChange={handleChange} defaultChecked={inputs.gearBrainbox}/>
                <label for="gearBrainbox"> <span class="trait-name">BRAINBOX</span>: <i>A blackbox for your brain</i>. Ignore a <span class="fuchsia">FAILURE</span> when you <a href="/prompts/suffer-prompts#face-death">FACE DEATH</a>, but then <a href="/prompts/fate-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a> of having your <i>mind-backup</i> reinserted in a new body, and lose the BRAINBOX.</label>
                <img src={brainbox_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearCyberClaws" type="checkbox" name="gearCyberClaws" value={inputs.gearCyberClaws} onChange={handleChange} defaultChecked={inputs.gearCyberClaws}/>
                <label for="gearCyberClaws"> <span class="trait-name">CYBERCLAWS</span>: <i>Retracting Mollies or Logans</i>. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> of violence, when you <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">CHROME</span>.</label>
                <img src={cyberclaws_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearCyberdeck" type="checkbox" name="gearCyberdeck" value={inputs.gearCyberdeck} onChange={handleChange} defaultChecked={inputs.gearCyberdeck}/>
                <label for="gearCyberdeck"> <span class="trait-name">CYBERDECK</span>: <i>Tool of the netrunner’s trade</i>. gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</label>
                <img src={cyberdeck_art} class="art"/>
            </div>
            <div class="trait gear">
                <input id="gearMirrorShades" type="checkbox" name="gearMirrorShades" value={inputs.gearMirrorShades} onChange={handleChange} defaultChecked={inputs.gearMirrorShades}/>
                <label for="gearMirrorShades"> <span class="trait-name">MIRRORSHADES</span>: <i>excessively cool</i>. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">FLASH</span>.</label>
            </div>
            <div class="trait gear">
                <input id="gearNeuralink" type="checkbox" name="gearNeuralink" value={inputs.gearNeuralink} onChange={handleChange} defaultChecked={inputs.gearNeuralink}/>
                <label for="gearNeuralink"> <span class="trait-name">NEURALINK</span>: <i>Jack me in</i>. gain a <span class="boost">BOOST</span> when netrunning in <i>deep mode</i> (full sensory immersion).</label>
            </div>
            <div class="trait gear">
                <input id="gearSmartCosmetics" type="checkbox" name="gearSmartCosmetics" value={inputs.gearSmartCosmetics} onChange={handleChange} defaultChecked={inputs.gearSmartCosmetics}/>
                <label for="gearSmartCosmetics"> <span class="trait-name">SMART COSMETICS</span>: Change hairstyle, makeup or facial features <i>at will</i>. Gain a <span class="boost">BOOST</span> when you take advantage of this to <a href="/prompts/general-prompts#compel">COMPEL</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by awing or seducing others with <span class="stat">FLASH</span>.</label>
            </div>
            <div class="trait gear">
                <input id="gearSubdermalShockers" type="checkbox" name="gearSubdermalShockers" value={inputs.gearSubdermalShockers} onChange={handleChange} defaultChecked={inputs.gearSubdermalShockers}/>
                <label for="gearSubdermalShockers"> <span class="trait-name">SUBDERMAL SHOCKERS</span>: <i>no touching!</i> gain a <span class="boost">BOOST</span> when you test <span class="stat">CHROME</span> to defend yourself while you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</label>
            </div>
            <div class="trait gear">
                <input id="gearSynapseChip" type="checkbox" name="gearSynapseChip" value={inputs.gearSynapseChip} onChange={handleChange} defaultChecked={inputs.gearSynapseChip}/>
                <label for="gearSynapseChip"> <span class="trait-name">SYNAPSE CHIP</span>: <i>smarter on demand</i>. gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">BRAIN</span>.</label>
            </div>
            <div class="trait gear">
                <input id="gearThermopticCamo" type="checkbox" name="gearThermopticCamo" value={inputs.gearThermopticCamo} onChange={handleChange} defaultChecked={inputs.gearThermopticCamo}/>
                <label for="gearThermopticCamo"> <span class="trait-name">THERMOPTIC CAMO</span>: <i>now you see me</i>... gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">SHADE</span> by going almost invisible.</label>
            </div>
            <div class="trait gear">
                <input id="gearWiredReflexes" type="checkbox" name="gearWiredReflexes" value={inputs.gearWiredReflexes} onChange={handleChange} defaultChecked={inputs.gearWiredReflexes}/>
                <label for="gearWiredReflexes"> <span class="trait-name">WIRED REFLEXES</span>: <i>Sandevistan!</i> gain a <span class="boost">BOOST</span> when you test your <span class="stat">EDGE</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</label>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="contacts-container">
            <h2 id="contacts">CONTACTS</h2>
            <div class="trait contact">
                <input id="contactDealer" type="checkbox" name="contactDealer" value={inputs.contactDealer} onChange={handleChange} defaultChecked={inputs.contactDealer}/>
                <label for="contactDealer"> <span class="trait-name">DEALER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#relax">RELAX</a> by using addictive substances or simchips, or gain an automatic <span class="turquoise">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <div class="name-container">
                    <label for="contactDealerName">NAME / ALIAS:</label>
                    <input id="contactDealerName" type="text" name="contactDealerName" value={inputs.contactDealerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactFixer" type="checkbox" name="contactFixer" value={inputs.contactFixer} onChange={handleChange} defaultChecked={inputs.contactFixer}/>
                <label for="contactFixer"> <span class="trait-name">FIXER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> or when you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> for a contract or mission that they facilitated.</label>
                <div class="name-container">
                    <label for="contactFixerName">NAME / ALIAS:</label>
                    <input id="contactFixerName" type="text" name="contactFixerName" value={inputs.contactFixerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactInfoBroker" type="checkbox" name="contactInfoBroker" value={inputs.contactInfoBroker} onChange={handleChange} defaultChecked={inputs.contactInfoBroker}/>
                <label for="contactInfoBroker"> <span class="trait-name">INFOBROKER</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, or gain an automatic <span class="turquoise">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</label>
                <div class="name-container">
                    <label for="contactInfoBrokerName">NAME / ALIAS:</label>
                    <input id="contactInfoBrokerName" type="text" name="contactInfoBrokerName" value={inputs.contactInfoBrokerName} onChange={handleChange}/>
                </div>
            </div>
            <div class="trait contact">
                <input id="contactStreetDoc" type="checkbox" name="contactStreetDoc" value={inputs.contactStreetDoc} onChange={handleChange} defaultChecked={inputs.contactStreetDoc}/>
                <label for="contactStreetDoc"> <span class="trait-name">STREET DOC</span>: gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#heal">HEAL</a>, or gain an automatic SUCCESS if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (X)</a>.</label>
                <div class="name-container">
                    <label for="contactStreetDocName">NAME / ALIAS:</label>
                    <input id="contactStreetDocName" type="text" name="contactStreetDocName" value={inputs.contactStreetDocName} onChange={handleChange}/>
                </div>
            </div>
        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats