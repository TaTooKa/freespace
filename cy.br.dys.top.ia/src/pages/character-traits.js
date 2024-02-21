import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Trait from '/src/@rocketseat/gatsby-theme-docs/components/Trait'

import blademaster_art from '/src/images/blademaster.jpg';
import bountyhunter_art from '/src/images/bountyhunter.jpg';
import brawler_art from '/src/images/brawler.jpg';
import diplomat_art from '/src/images/diplomat.jpg';
import driver_art from '/src/images/driver.jpg';
import face_art from '/src/images/face.jpg';
import gunkata_art from '/src/images/gunkata.jpg';
import infiltrator_art from '/src/images/infiltrator.jpg';
import medic_art from '/src/images/medic.jpg';
import netrunner_art from '/src/images/netrunner.jpg';
import sniper_art from '/src/images/sniper.jpg';
import streetrat_art from '/src/images/streetrat.jpg';
import armored_art from '/src/images/armored.jpg';
import brainbox_art from '/src/images/brainbox.jpg';
import cyberclaws_art from '/src/images/cyberclaws.jpg';
import cyberdeck_art from '/src/images/cyberdeck.jpg';
import mirrorshades_art from '/src/images/mirrorshades.jpg';
import neuralink_art from '/src/images/neuralink.jpg';
import retinalhud_art from '/src/images/retinalhud.jpg';
import smartcosmetics_art from '/src/images/smartcosmetics.jpg';
import specialammomod_art from '/src/images/specialammomod.jpg';
import subdermalshockers_art from '/src/images/subdermalshockers.jpg';
import synapsechip_art from '/src/images/synapsechip.jpg';
import thermopticcamo_art from '/src/images/thermopticcamo.jpg';
import wiredreflexes_art from '/src/images/wiredreflexes.jpg';
import dealer_art from '/src/images/dealer.jpg';
import fixer_art from '/src/images/fixer.jpg';
import infobroker_art from '/src/images/infobroker.jpg';
import streetdoc_art from '/src/images/streetdoc.jpg';
import plaskin_art from '/src/images/plaskin.jpg';
import simsenserecorder_art from '/src/images/simsenserecorder.jpg';
import voicemod_art from '/src/images/voicemod.jpg';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const headings = [
    {depth: 2, value: "SKILLS AND BACKGROUND"},
    {depth: 2, value: "GEAR AND CYBERWARE"},
    {depth: 2, value: "CONTACTS"},
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

            <Trait type="skill" name="Blademaster" title="BLADEMASTER" art={blademaster_art} inputs={inputs} handleChange={handleChange}>
                <span>when wielding a long blade, gain a <span class="boost">BOOST</span> when you test <span class="stat">CHROME</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</span>
            </Trait>

            <Trait type="skill" name="BountyHunter" title="BOUNTY HUNTER" art={bountyhunter_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty or the procurement of a person.</span>
            </Trait>

            <Trait type="skill" name="Brawler" title="BRAWLER" art={brawler_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> as long as you are leveraging your unarmed fighting prowess.</span>
            </Trait>

            <Trait type="skill" name="Diplomat" title="DIPLOMAT" art={diplomat_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement.</span>
            </Trait>

            <Trait type="skill" name="Driver" title="DRIVER" art={driver_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> whenever you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> while piloting a vehicle.</span>
            </Trait>

            <Trait type="skill" name="Face" title="FACE" art={face_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when attempting to <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> with leadership, coordination or planning; or when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> by testing your <span class="stat">FLASH</span>.</span>
            </Trait>

            <Trait type="skill" name="GunKata" title="GUN KATA" art={gunkata_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> whenever you use firearms in close quarters and you test your <span class="stat">EDGE</span> to <a href="/prompts/general-prompts#clash">CLASH</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>.</span>
            </Trait>

            <Trait type="skill" name="Infiltrator" title="INFILTRATOR" art={infiltrator_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy.</span>
            </Trait>

            <Trait type="skill" name="Medic" title="MEDIC" art={medic_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you <a href="/prompts/recovery-prompts#heal">HEAL</a>, and if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a> for it, spend 1 less GEAR than needed to gain the same benefits.</span>
            </Trait>

            <Trait type="skill" name="Netrunner" title="NETRUNNER" art={netrunner_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</span>
            </Trait>

            <Trait type="skill" name="Sniper" title="SNIPER" art={sniper_art} inputs={inputs} handleChange={handleChange}>
                <span>while attacking at long range, gain a <span class="boost">BOOST</span> in <a href="/prompts/general-prompts#clash">CLASH</a> and <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> as long as you are <i>IN CONTROL</i>.</span>
            </Trait>

            <Trait type="skill" name="StreetRat" title="STREET RAT" art={streetrat_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> for any test involving lying, bluffing, stealing or cheating, or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> in the underbelly of the city.</span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="gear-container">

            <h2 id="gear-and-cyberware">GEAR AND CYBERWARE</h2>

            <Trait type="gear" name="Armored" title="ARMORED" art={armored_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Shiny and Chrome</i>. Muscle+Bone lace and/or metallic alloy plating. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> against physical attacks or impact damage.</span>
            </Trait>

            <Trait type="gear" name="Brainbox" title="BRAINBOX" art={brainbox_art} inputs={inputs} handleChange={handleChange}>
                <span><i>A blackbox for your brain</i>. Ignore a <span class="fuchsia bold">FAILURE</span> when you <a href="/prompts/suffer-prompts#face-death">FACE DEATH</a>, but then <a href="/prompts/fate-prompts#pay-the-consequences">PAY THE CONSEQUENCES</a> of having your <i>mind-backup</i> reinserted in a new body, and lose the BRAINBOX.</span>
            </Trait>

            <Trait type="gear" name="CyberClaws" title="CYBERCLAWS" art={cyberclaws_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Retracting Mollies or Logans</i>. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> of violence, when you <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#compel">COMPEL</a> with <span class="stat">CHROME</span>.</span>
            </Trait>

            <Trait type="gear" name="Cyberdeck" title="CYBERDECK" art={cyberdeck_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Tool of the netrunner’s trade</i>. gain a <span class="boost">BOOST</span> for any test involving hacking or surfing the NET.</span>
            </Trait>

            <Trait type="gear" name="MirrorShades" title="MIRRORSHADES" art={mirrorshades_art} inputs={inputs} handleChange={handleChange}>
                <span><i>excessively cool</i>. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">FLASH</span>.</span>
            </Trait>

            <Trait type="gear" name="Neuralink" title="NEURALINK" art={neuralink_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Jack me in</i>. gain a <span class="boost">BOOST</span> when netrunning in <i>deep mode</i> (full sensory immersion).</span>
            </Trait>

            <Trait type="gear" name="Plaskin" title="PLASKIN" art={plaskin_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Better than real skin™.</i> A patch of flexible carbon-fiber polymer mesh over muscle tissue, covered in artificial plastic skin (a self-healing material). Sensitive feedback can be tuned up or down at will. Installable in any part of the body you want. Gain a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to resist electric/cold/heat damage on that body part, or when you <a href="/prompts/recovery-prompts#heal">HEAL</a> from burns, cuts or scratches. </span>
            </Trait>

            <Trait type="gear" name="RetinalHud" title="RETINAL HUD" art={retinalhud_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Target acquired</i>. Your cybereyes project an augmented display with target acquisition, IFF software (identify friend/foe), vulnerability analysis, personal data retrieval, etc. Gain a <span class="boost">BOOST</span> whenever that would give you an advantage in action-packed situations or investigation scenes.</span>
            </Trait>
            
            <Trait type="gear" name="SimsenseRecorder" title="SIMSENSE RECORDER" art={simsenserecorder_art} inputs={inputs} handleChange={handleChange}>
                <span>Live <i>Better Than Life™</i> experiences. SimSense allows to record/playback someone's experience in full five senses. Filtered simchips translate physical sensations only; unfiltered (hacked) ones also replay emotions and thoughts. Apart from being able to replay simchips from others, you can record your own ones to replay later (which gives a <span class="boost">BOOST</span> when you <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> related to that scene, or when you <a href="/prompts/recovery-prompts#relax">RELAX</a> by reliving a pleasant moment).
</span>
            </Trait>

            <Trait type="gear" name="SmartCosmetics" title="SMART COSMETICS" art={smartcosmetics_art} inputs={inputs} handleChange={handleChange}>
                <span>Change hairstyle, makeup or facial features <i>at will</i>. Gain a <span class="boost">BOOST</span> when you take advantage of this to <a href="/prompts/general-prompts#compel">COMPEL</a>, <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a> or <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> by awing or seducing others with <span class="stat">FLASH</span>.</span>
            </Trait>

            <Trait type="gear" name="SpecialAmmoMod" title="SPECIAL AMMO MOD" art={specialammomod_art} inputs={inputs} handleChange={handleChange}>
                <span>Your firearm has a voice-activated mod that switches between <i>special ammo on demand</i>. Including but not limited to: Armor-piercing, Incendiary, Heat-seeker, Flashbang, Cyber-scrambler,  Rubber-ricochet. <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (1)</a> to gain <i>Narrative Permission</i> and a <span class="boost">BOOST</span> when you use one for a particular situation.</span>
            </Trait>

            <Trait type="gear" name="SubdermalShockers" title="SUBDERMAL SHOCKERS" art={subdermalshockers_art} inputs={inputs} handleChange={handleChange}>
                <span><i>no touching!</i> gain a <span class="boost">BOOST</span> when you test <span class="stat">CHROME</span> to defend yourself while you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</span>
            </Trait>

            <Trait type="gear" name="SynapseChip" title="SYNAPSE CHIP" art={synapsechip_art} inputs={inputs} handleChange={handleChange}>
                <span><i>smarter on demand</i>. gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">BRAIN</span>.</span>
            </Trait>

            <Trait type="gear" name="ThermopticCamo" title="THERMOPTIC CAMO" art={thermopticcamo_art} inputs={inputs} handleChange={handleChange}>
                <span><i>now you see me</i>... Camouflage with nano cameras that records what's behind and reproduces it in front. Gain a <span class="boost">BOOST</span> whenever you test your <span class="stat">SHADE</span> by going almost invisible.</span>
            </Trait>

            <Trait type="gear" name="VoiceMod" title="VOICE MOD" art={voicemod_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Change your voice on demand</i>. This throat+larynx implant includes settings for Ventriloquism, Velvet Singer, Extra-Loud, Screamo Growl, Autotune, Voice-Copy, Instant-Translate, Polyphone, Sound FX, among others. Gain a <span class="boost">BOOST</span> whenever using those features could give you an advantage.</span>
            </Trait>

            <Trait type="gear" name="WiredReflexes" title="WIRED REFLEXES" art={wiredreflexes_art} inputs={inputs} handleChange={handleChange}>
                <span><i>Sandevistan!</i> Spine implant with neural boosters and adrenaline stimulators that makes you abnormaly fast. Gain a <span class="boost">BOOST</span> when you test your <span class="stat">EDGE</span> to <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a>, <a href="/prompts/general-prompts#secure-an-advantage">SECURE AN ADVANTAGE</a> or <a href="/prompts/general-prompts#clash">CLASH</a>.</span>
            </Trait>

        </div>

        <br/>
        <hr/>
        <br/>
        <br/>
        
        <div class="traits-container" id="contacts-container">
            <h2 id="contacts">CONTACTS</h2>

            <Trait type="contact" name="Dealer" title="DEALER" art={dealer_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#relax">RELAX</a> by using addictive substances or simchips, or gain an automatic <span class="turquoise">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</span>
                <div class="name-container">
                    <label for="contactDealerName">NAME / ALIAS:</label>
                    <input id="contactDealerName" type="text" name="contactDealerName" value={inputs.contactDealerName} onChange={handleChange}/>
                </div>
            </Trait>

            <Trait type="contact" name="Fixer" title="FIXER" art={fixer_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#resupply">RESUPPLY</a> or when you <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> for a contract or mission that they facilitated.</span>
                <div class="name-container">
                    <label for="contactFixerName">NAME / ALIAS:</label>
                    <input id="contactFixerName" type="text" name="contactFixerName" value={inputs.contactFixerName} onChange={handleChange}/>
                </div>
            </Trait>
            
            <Trait type="contact" name="InfoBroker" title="INFOBROKER" art={infobroker_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, or gain an automatic <span class="turquoise">SUCCESS</span> if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES</a>.</span>
                <div class="name-container">
                    <label for="contactInfoBrokerName">NAME / ALIAS:</label>
                    <input id="contactInfoBrokerName" type="text" name="contactInfoBrokerName" value={inputs.contactInfoBrokerName} onChange={handleChange}/>
                </div>
            </Trait>

            <Trait type="contact" name="StreetDoc" title="STREET DOC" art={streetdoc_art} inputs={inputs} handleChange={handleChange}>
                <span>gain a <span class="boost">BOOST</span> when you resort to this contact to <a href="/prompts/recovery-prompts#heal">HEAL</a>, or gain an automatic SUCCESS if you <a href="/prompts/suffer-prompts#sacrifice-resources">SACRIFICE RESOURCES (X)</a>.</span>
                <div class="name-container">
                    <label for="contactStreetDocName">NAME / ALIAS:</label>
                    <input id="contactStreetDocName" type="text" name="contactStreetDocName" value={inputs.contactStreetDocName} onChange={handleChange}/>
                </div>
            </Trait>

        </div>

        <br/>
        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats