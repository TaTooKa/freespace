import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function CharacterStats() {
  const [inputs, setInputs] = useState(() => {
    const savedCharacter = JSON.parse(localStorage.getItem("character"))
    return savedCharacter || {}
  })

  const handleChange = (event) => {
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
    localStorage.setItem("character", JSON.stringify(inputs))
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
      </form>
    </Layout>
  )
}

export default CharacterStats