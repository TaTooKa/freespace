
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

  const [archivedChallenges, setArchivedChallenges] = useState(() => {
    // initial value of archived challenges
    const savedArchivedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("archivedChallenges") : "{}";
    const savedArchivedChallenges = JSON.parse(savedArchivedChallengesStr);

    return savedArchivedChallenges || [];

  });

  async function addChallenge()  {
    setChallenges(prevChallenges => ([...prevChallenges, getNewChallenge()]));

    // scroll and created effect
    await delay(500);
    var lastChallengeEl = document.getElementById("challenge-container-regular-"+challenges.length);
    lastChallengeEl.classList.add("created");
    lastChallengeEl.scrollIntoView({behavior: "smooth"});
    await delay(700);
    lastChallengeEl.classList.remove("created");
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => saveChallenges(challenges), 500);
    return () => clearTimeout(timeOutId);
  }, [challenges]);

  useEffect(() => {
    const timeOutId = setTimeout(() => saveArchivedChallenges(archivedChallenges), 500);
    return () => clearTimeout(timeOutId);
  }, [archivedChallenges]);

  const saveChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("challenges", JSON.stringify(challenges));
    }
  }

  const saveArchivedChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("archivedChallenges", JSON.stringify(archivedChallenges));
    }
  }

  return (
    <Layout title="CHALLENGES">
      <Seo title="Challenges" />
      <h2>CHALLENGE TRACKER</h2>
      <button id="add-challenge-button" onClick={addChallenge}>ADD CHALLENGE</button>
      <form class="challenges" id="challenge-form">

        {challenges.length > 0 && challenges.map((challenge, i) => <Challenge challenge={challenge} index={i} challenges={challenges} setChallenges={setChallenges} chType="regular" otherChallenges={archivedChallenges} otherSetChallenges={setArchivedChallenges} />)}

        <br/>
        <hr/>
        <br/>
        <h2>ARCHIVED CHALLENGES</h2>
        <blockquote><p>Challenges that are deleted are first sent to this ARCHIVE for safe-keeping. Click on the trash button one more time to delete them definitely, or use the RESTORE button to bring them back to the active list above.</p></blockquote>
        <div id="archived-challenges-container">
          {archivedChallenges.length > 0 && archivedChallenges.map((challenge, i) => <Challenge challenge={challenge} index={i} challenges={archivedChallenges} setChallenges={setArchivedChallenges} chType="archived" otherChallenges={challenges} otherSetChallenges={setChallenges} />)}
        </div>

      </form>
    </Layout>
  )
}

export default Challenges

