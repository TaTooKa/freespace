
import React, { useState, useEffect } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import Challenge from '/src/@rocketseat/gatsby-theme-docs/components/Challenge'

function Challenges() {
  const windowGlobal = typeof window !== 'undefined' && window

  const [inputs, setInputs] = useState(() => {
    const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}"
    const savedChallenges = JSON.parse(savedChallengesStr)
    return savedChallenges || {}
  })

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
      <h2>CHALLENGE TRACKER</h2>
      <form class="challenges">

        <Challenge challengeIndex={1} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={2} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={3} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={4} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={5} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={6} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={7} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={8} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={9} inputs={inputs} setInputs={setInputs}/>
        <Challenge challengeIndex={10} inputs={inputs} setInputs={setInputs}/>

      </form>
    </Layout>

  )
}

export default Challenges

