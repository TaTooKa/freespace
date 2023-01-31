import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {
      name: "",
      xpCurrent: "0",
      xpTotal: "0",
      state: "inControl",
      grit: "5",
      psyche: "5",
      gear: "5",
      angleProgress: "1",
    }
  })

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked, event.target.type)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    // console.log(inputs);
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("character", JSON.stringify(inputs))
    }
  }

  return (
    <Layout title="CHARACTER STATS">
      <Seo title="Character Stats" />
      <form class="character-stats">

        <fieldset>
          <label>NAME / ALIAS <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/></label>
          <label>XP Current <input type="number" name="xpCurrent" value={inputs.xpCurrent || ""} onChange={handleChange} /></label>
          <label>XP Total <input type="number" name="xpTotal" value={inputs.xpTotal || ""} onChange={handleChange} /></label>
        </fieldset>

        <fieldset>
          <label>IN CONTROL <input type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/></label>
          <label>IN A BAD SPOT <input type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/></label>
        </fieldset>

        <div class="stat-container">
          <label class="stat">BRAIN <input type="number" name="brain" value={inputs.brain || ""} onChange={handleChange}/></label><span>Cunning and Knowledge</span>
        </div>

        <div class="stat-container">
          <label class="stat">CHROME <input type="number" name="chrome" value={inputs.chrome || ""} onChange={handleChange}/></label>
        </div>

        <div class="stat-container">
          <label class="stat">EDGE <input type="number" name="edge" value={inputs.edge || ""} onChange={handleChange} /></label>
        </div>

        <div class="stat-container">
          <label class="stat">FLASH <input type="number" name="flash" value={inputs.flash || ""} onChange={handleChange} /></label>
        </div>

        <div class="stat-container">
          <label class="stat">SHADE <input type="number" name="shade" value={inputs.shade || ""} onChange={handleChange} /></label>
        </div>

        <fieldset class="stat-bar" id="grit-stat-bar">
          <label>GRIT</label>
          <label>0 <input type="radio" name="grit" value={inputs.grit0 || "0"} onChange={handleChange} checked={inputs.grit==="0"}/></label>
          <label>1 <input type="radio" name="grit" value={inputs.grit1 || "1"} onChange={handleChange} checked={inputs.grit==="1"}/></label>
          <label>2 <input type="radio" name="grit" value={inputs.grit2 || "2"} onChange={handleChange} checked={inputs.grit==="2"}/></label>
          <label>3 <input type="radio" name="grit" value={inputs.grit3 || "3"} onChange={handleChange} checked={inputs.grit==="3"}/></label>
          <label>4 <input type="radio" name="grit" value={inputs.grit4 || "4"} onChange={handleChange} checked={inputs.grit==="4"}/></label>
          <label>5 <input type="radio" name="grit" value={inputs.grit5 || "5"} onChange={handleChange} checked={inputs.grit==="5"}/></label>
        </fieldset>

        <fieldset class="stat-bar" id="psyche-stat-bar">
          <label>PSYCHE</label>
          <label>0 <input type="radio" name="psyche" value={inputs.psyche0 || "0"} onChange={handleChange} checked={inputs.psyche==="0"}/></label>
          <label>1 <input type="radio" name="psyche" value={inputs.psyche1 || "1"} onChange={handleChange} checked={inputs.psyche==="1"}/></label>
          <label>2 <input type="radio" name="psyche" value={inputs.psyche2 || "2"} onChange={handleChange} checked={inputs.psyche==="2"}/></label>
          <label>3 <input type="radio" name="psyche" value={inputs.psyche3 || "3"} onChange={handleChange} checked={inputs.psyche==="3"}/></label>
          <label>4 <input type="radio" name="psyche" value={inputs.psyche4 || "4"} onChange={handleChange} checked={inputs.psyche==="4"}/></label>
          <label>5 <input type="radio" name="psyche" value={inputs.psyche5 || "5"} onChange={handleChange} checked={inputs.psyche==="5"}/></label>
        </fieldset>

        <fieldset class="stat-bar" id="gear-stat-bar">
          <label>GEAR</label>
          <label>0 <input type="radio" name="gear" value={inputs.gear0 || "0"} onChange={handleChange} checked={inputs.gear==="0"}/></label>
          <label>1 <input type="radio" name="gear" value={inputs.gear1 || "1"} onChange={handleChange} checked={inputs.gear==="1"}/></label>
          <label>2 <input type="radio" name="gear" value={inputs.gear2 || "2"} onChange={handleChange} checked={inputs.gear==="2"}/></label>
          <label>3 <input type="radio" name="gear" value={inputs.gear3 || "3"} onChange={handleChange} checked={inputs.gear==="3"}/></label>
          <label>4 <input type="radio" name="gear" value={inputs.gear4 || "4"} onChange={handleChange} checked={inputs.gear==="4"}/></label>
          <label>5 <input type="radio" name="gear" value={inputs.gear5 || "5"} onChange={handleChange} checked={inputs.gear==="5"}/></label>
        </fieldset>

        <div class="angle-container">
          <span>ANGLE</span>
          <fieldset class="angle-options">
            <label>Choose One</label>
            <label>Get Out <input type="radio" name="angle" value={inputs.angle1 || "Get Out"} onChange={handleChange} checked={inputs.angle==="Get Out"}/></label>
            <label>Upgrade Life <input type="radio" name="angle" value={inputs.angle2 || "Upgrade Life"} onChange={handleChange} checked={inputs.angle==="Upgrade Life"}/></label>
            <label>Learn The Truth <input type="radio" name="angle" value={inputs.angle3 || "Learn The Truth"} onChange={handleChange} checked={inputs.angle==="Learn The Truth"}/></label>
            <label>Make'em Pay <input type="radio" name="angle" value={inputs.angle4 || "Make'em Pay"} onChange={handleChange} checked={inputs.angle==="Make'em Pay"}/></label>
            <label>Look After Them <input type="radio" name="angle" value={inputs.angle5 || "Look After Them"} onChange={handleChange} checked={inputs.angle==="Look After Them"}/></label>
            <label>Take A Stand <input type="radio" name="angle" value={inputs.angle6 || "Take A Stand"} onChange={handleChange} checked={inputs.angle==="Take A Stand"}/></label>
          </fieldset>
          <label class="angle-progress">PROGRESS <input type="number" name="angleProgress" value={inputs.angleProgress || ""} onChange={handleChange} /></label>
        </div>

        <div class="notes-container">
          <label class="equipment_notes">EQUIPMENT + NOTES <textarea name="notes" value={inputs.notes || ""} onChange={handleChange} /></label>
        </div>

        
      </form>
    </Layout>
  )
}

export default CharacterStats