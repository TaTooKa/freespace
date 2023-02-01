import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

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
    console.log(event, event.target.name, event.target.value, event.target.checked)
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
  }

  return (
    <Layout title="CHARACTER TRAITS" headings={headings}>
      <Seo title="Character Traits" />
      <form class="character-traits">

        <div class="traits-container" id="skills-container">
            <h2 id="skills-and-background">SKILLS AND BACKGROUND</h2>
            <div class="trait skill">
                <input id="skillNetrunner" type="checkbox" name="skillNetrunner" value={inputs.skillNetrunner} onChange={handleChange} defaultChecked={inputs.skillNetrunner}/>
                <label for="skillNetrunner"> <span class="trait-name">NETRUNNER</span>: gain a <b>BOOST</b> for any test involving hacking or surfing the NET.</label>
            </div>
            <div class="trait skill">
                <input id="skillBlademaster" type="checkbox" name="skillBlademaster" value={inputs.skillBlademaster} onChange={handleChange} defaultChecked={inputs.skillBlademaster}/>
                <label for="skillBlademaster"> <span class="trait-name">BLADEMASTER</span>: when wielding a long blade, gain a <b>BOOST</b> when you test <span class="stat">CHROME</span> to <a href="/prompts/general-prompts#clash">CLASH</a> or when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> to defend.</label>
            </div>
            <div class="trait skill">
                <input id="skillStreetRat" type="checkbox" name="skillStreetRat" value={inputs.skillStreetRat} onChange={handleChange} defaultChecked={inputs.skillStreetRat}/>
                <label for="skillStreetRat"> <span class="trait-name">STREET RAT</span>: gain a <b>BOOST</b> for any test involving lying, bluffing, stealing or cheating.</label>
            </div>
            <div class="trait skill">
                <input id="skillBountyHunter" type="checkbox" name="skillBountyHunter" value={inputs.skillBountyHunter} onChange={handleChange} defaultChecked={inputs.skillBountyHunter}/>
                <label for="skillBountyHunter"> <span class="trait-name">BOUNTY HUNTER</span>: gain a <b>BOOST</b> whenever you <a href="/prompts/general-prompts#gather-information">GATHER INFORMATION</a>, <a href="/prompts/challenge-prompts#accept-a-challenge">ACCEPT A CHALLENGE</a> or <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL A CHALLENGE</a> related to a bounty.</label>
            </div>
        </div>

        <hr/>
        
        <div class="traits-container" id="gear-container">
            <h2 id="gear-and-cyberware">GEAR AND CYBERWARE</h2>
            <div class="trait skill">
                <input id="gearArmored" type="checkbox" name="gearArmored" value={inputs.gearArmored} onChange={handleChange} defaultChecked={inputs.gearArmored}/>
                <label for="gearArmored"> <span class="trait-name">ARMORED</span>: <i>Shiny and Chrome</i>. gain a <b>BOOST</b> when you <a href="/prompts/general-prompts#act-under-pressure">ACT UNDER PRESSURE</a> or <a href="/prompts/general-prompts#clash">CLASH</a> against physical attacks or impact damage.</label>
            </div>
        </div>

        <hr/>
        
        <div class="traits-container" id="contacts-container">
            <h2 id="contacts">CONTACTS</h2>
        </div>

        <br/>

      </form>
    </Layout>
  )
}

export default CharacterStats