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
    console.log(inputs);
    localStorage.setItem("character", JSON.stringify(inputs))
  }

  return (
    <Layout title="Character Stats">
      <Seo title="Character Stats" />
      <form>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
      </form>
    </Layout>
  )
}

export default CharacterStats