
import React, { useState, useEffect } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

function Challenges() {
  const windowGlobal = typeof window !== 'undefined' && window

  const [inputs, setInputs] = useState(() => {
    const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}"
    const savedChallenges = JSON.parse(savedChallengesStr)
    return savedChallenges || {}
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
    const timeOutId = setTimeout(() => saveChallenges(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("challenges", JSON.stringify(inputs))
    }
  }

  return (
    <Layout title="CHALLENGES">
      <Seo title="Challenges" />
      <form class="challenges">
        <input id="challenge1" type="text" name="challenge1" value={inputs.challenge1} onChange={handleChange}/>

      </form>
    </Layout>

  )
}

export default Challenges

