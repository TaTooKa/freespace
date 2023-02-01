
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

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc1">CHALLENGE DESCRIPTION</label>
              <input id="chDesc1" type="text" name="chDesc1" class="description" value={inputs.chDesc1} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress1">PROGRESS</label>
              <input id="chProgress1" type="number" name="chProgress1" class="progress" value={inputs.chProgress1} onChange={handleChange}/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_1" value={inputs.chRank1_1 || "1"} onChange={handleChange} checked={inputs.chRank1==="1"}/>
              <label for="chRank1_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_2" value={inputs.chRank1_2 || "2"} onChange={handleChange} checked={inputs.chRank1==="2"}/>
              <label for="chRank1_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_3" value={inputs.chRank1_3 || "3"} onChange={handleChange} checked={inputs.chRank1==="3"}/>
              <label for="chRank1_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_4" value={inputs.chRank1_4 || "4"} onChange={handleChange} checked={inputs.chRank1==="4"}/>
              <label for="chRank1_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank1" id="chRank1_5" value={inputs.chRank1_5 || "5"} onChange={handleChange} checked={inputs.chRank1==="5"}/>
              <label for="chRank1_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
        </div>

        <div class="challenge-container">
          <div class="challenge-inputs">
            <div class="description-container">
              <label for="chDesc2">CHALLENGE DESCRIPTION</label>
              <input id="chDesc2" type="text" name="chDesc2" class="description" value={inputs.chDesc2} onChange={handleChange}/>
            </div>
            <div class="progress-container">
              <label for="chProgress2">PROGRESS</label>
              <input id="chProgress2" type="number" name="chProgress2" class="progress" value={inputs.chProgress2} onChange={handleChange}/>
            </div>
          </div>
          <div class="ranks-container">
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_1" value={inputs.chRank2_1 || "1"} onChange={handleChange} checked={inputs.chRank2==="1"}/>
              <label for="chRank2_1"><span class="rank-type">SHORT:</span> +30%; 2XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_2" value={inputs.chRank2_2 || "2"} onChange={handleChange} checked={inputs.chRank2==="2"}/>
              <label for="chRank2_2"><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_3" value={inputs.chRank2_3 || "3"} onChange={handleChange} checked={inputs.chRank2==="3"}/>
              <label for="chRank2_3"><span class="rank-type">LONG:</span> +10%; 10XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_4" value={inputs.chRank2_4 || "4"} onChange={handleChange} checked={inputs.chRank2==="4"}/>
              <label for="chRank2_4"><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
            </div>
            <div class="rank-button">
              <input type="radio" name="chRank2" id="chRank2_5" value={inputs.chRank2_5 || "5"} onChange={handleChange} checked={inputs.chRank2==="5"}/>
              <label for="chRank2_5"><span class="rank-type">EPIC:</span> +2%; 50XP</label>
            </div>
          </div>
        </div>

      </form>
    </Layout>

  )
}

export default Challenges

