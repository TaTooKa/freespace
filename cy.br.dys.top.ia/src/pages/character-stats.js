import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function CharacterStats() {
  const windowGlobal = typeof window !== 'undefined' && window

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {}
  })

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked, event.target.type)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    if (event.target.type == "radio") {
      //event.target.checked == "true"
    }
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
      <form>
        <label>Name:
        <input 
          type="text" 
          name="name" 
          value={inputs.name || ""} 
          onChange={handleChange}
        />
        </label>
        <label>XP:
          <input 
            type="number" 
            name="xp" 
            value={inputs.xp || ""} 
            onChange={handleChange}
          />
        </label>
        <fieldset>
          <label>IN CONTROL
            <input type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.inControl ? "yes" : "no"}/>
          </label>
          <label>IN A BAD SPOT
            <input type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.inABadSpot ? "yes": "no"}/>
          </label>
        </fieldset>
        
      </form>
    </Layout>
  )
}

export default CharacterStats