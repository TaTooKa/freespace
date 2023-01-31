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
      xp: "0",
      state: "inControl",
      grit: "5",
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
            <input type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/>
          </label>
          <label>IN A BAD SPOT
            <input type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/>
          </label>
        </fieldset>

        <label>BRAIN:
        <input 
          type="number" 
          name="brain" 
          value={inputs.brain || ""} 
          onChange={handleChange}
        />
        </label>
        <label>CHROME:
        <input 
          type="number" 
          name="chrome" 
          value={inputs.chrome || ""} 
          onChange={handleChange}
        />
        </label>
        <label>EDGE:
        <input 
          type="number" 
          name="edge" 
          value={inputs.edge || ""} 
          onChange={handleChange}
        />
        </label>
        <label>FLASH:
        <input 
          type="number" 
          name="flash" 
          value={inputs.flash || ""} 
          onChange={handleChange}
        />
        </label>
        <label>SHADE:
        <input 
          type="number" 
          name="shade" 
          value={inputs.shade || ""} 
          onChange={handleChange}
        />
        </label>

        <fieldset>
          <label>GRIT</label>
          <label>0
            <input type="radio" name="grit" value={inputs.grit0 || "0"} onChange={handleChange} checked={inputs.grit==="0"}/>
          </label>
          <label>1
            <input type="radio" name="grit" value={inputs.grit1 || "1"} onChange={handleChange} checked={inputs.grit==="1"}/>
          </label>
          <label>2
            <input type="radio" name="grit" value={inputs.grit2 || "2"} onChange={handleChange} checked={inputs.grit==="2"}/>
          </label>
          <label>3
            <input type="radio" name="grit" value={inputs.grit3 || "3"} onChange={handleChange} checked={inputs.grit==="3"}/>
          </label>
          <label>4
            <input type="radio" name="grit" value={inputs.grit4 || "4"} onChange={handleChange} checked={inputs.grit==="4"}/>
          </label>
          <label>5
            <input type="radio" name="grit" value={inputs.grit5 || "5"} onChange={handleChange} checked={inputs.grit==="5"}/>
          </label>
        </fieldset>
        
      </form>
    </Layout>
  )
}

export default CharacterStats