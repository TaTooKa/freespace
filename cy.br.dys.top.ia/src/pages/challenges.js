
import React, { useState, useEffect } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import Challenge from '/src/@rocketseat/gatsby-theme-docs/components/Challenge'

function Challenges() {
  const windowGlobal = typeof window !== 'undefined' && window;

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const getNewChallenge = () => {
      return {
        "name": "",
        "progress": 1,
        "rank": "short",
        "state": "active",
        "indent": 0,
        "minimized": false,
      }
  }

  const [challenges, setChallenges] = useState(() => {
    // initial value of challenges
    const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}";
    const savedChallenges = JSON.parse(savedChallengesStr);

    // defaults
    var defaultChallenges = [getNewChallenge()];

    return savedChallenges || defaultChallenges;
  });

  async function addChallenge()  {
    setChallenges(prevChallenges => ([...prevChallenges, getNewChallenge()]));

    // scroll and created effect
    await delay(500);
    var lastChallengeEl = document.getElementById("challenge-container-"+challenges.length);
    lastChallengeEl.classList.add("created");
    lastChallengeEl.scrollIntoView({behavior: "smooth"});
    await delay(700);
    lastChallengeEl.classList.remove("created");
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => saveChallenges(challenges), 500);
    return () => clearTimeout(timeOutId);
  }, [challenges]);

  const saveChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("challenges", JSON.stringify(challenges));
    }
  }

  return (
    <Layout title="CHALLENGES">
      <Seo title="Challenges" />
      <h2>CHALLENGE TRACKER</h2>
      <button id="add-challenge-button" onClick={addChallenge}>ADD CHALLENGE</button>
      <form class="challenges" id="challenge-form">
        {challenges.length > 0 && challenges.map((challenge, i) => <Challenge challenge={challenge} index={i} challenges={challenges} setChallenges={setChallenges}/>)}
      </form>
    </Layout>
  )
}

export default Challenges

