
import React, { useState, useEffect, useRef } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import Challenge from '/src/@rocketseat/gatsby-theme-docs/components/Challenge'

function Challenges() {
  const windowGlobal = typeof window !== 'undefined' && window;

  var challengeIndexes = useRef([]);
  const savedNumOfChallenges = windowGlobal ? windowGlobal.localStorage.getItem("numOfChallenges") : null;
  if ( savedNumOfChallenges ) {
    challengeIndexes.current = [];
    for (let i=1; i<=savedNumOfChallenges; i++) {
      challengeIndexes.current.push(i);
    }
  } else {
    challengeIndexes.current = [1];
  }

  const [challenges, setChallenges] = useState(challengeIndexes.current);

  const updateChallenges = () => {
    var newState = () => {
    let challengeArr = challengeIndexes.current.map((index) => {
      return <Challenge challengeIndex={index} inputs={inputs} setInputs={setInputs} deleteChallengeFunction={deleteChallenge}/>
    });
    return challengeArr;
    };
    setChallenges(newState);
  }

  const addChallenge = (event) => {
    event.preventDefault();
    var lastIndex = challengeIndexes.current.length;
    var newIndex = lastIndex+1;
    challengeIndexes.current.push(newIndex);

    inputs["chProgress"+newIndex.toString()] = "1";
    inputs["chRank"+newIndex.toString()] = "1";
    inputs["chState"+newIndex.toString()] = "1";
    inputs["chDesc"+newIndex.toString()] = "";

    updateChallenges();
    saveChallenges();

    async function scrollToBottom() {
      await delay(50);
      var challengeContainerEl = document.getElementById("challenge-container-"+newIndex.toString());
      challengeContainerEl.classList.add("created");
      await delay(50);
      window.scrollTo({behavior: "smooth", top: document.body.scrollHeight});
      await delay(1500);
      challengeContainerEl.classList.remove("created");
    }

    scrollToBottom();
  }

  const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

  const deleteChallenge = (event) => {
    var buttonEl = event.target.closest("span.button");
    var index = parseInt(buttonEl.attributes['data-challengeindex'].value);

    // shift all values (chProgressN, chRankN, chStateN, chNameN) 1 down from current index
    for (let i=index; i<challengeIndexes.current.length; i++) {
      var currentIndex = i.toString();
      var nextIndex = (1+i).toString();
      inputs["chProgress"+currentIndex] = inputs["chProgress"+nextIndex];
      inputs["chRank"+currentIndex] = inputs["chRank"+nextIndex];
      inputs["chState"+currentIndex] = inputs["chState"+nextIndex];
      inputs["chDesc"+currentIndex] = inputs["chDesc"+nextIndex];
    }

    // delete values from last challenge
    var lastIndex = challengeIndexes.current.length.toString();
    delete inputs["chProgress"+lastIndex];
    delete inputs["chRank"+lastIndex];
    delete inputs["chState"+lastIndex];
    delete inputs["chDesc"+lastIndex];

    // remove last challenge index
    challengeIndexes.current.pop();

    updateChallenges();
    saveChallenges();
  }

  const [inputs, setInputs] = useState(() => {
    const savedChallengesStr = windowGlobal ? windowGlobal.localStorage.getItem("challenges") : "{}";
    const savedChallenges = JSON.parse(savedChallengesStr);

    // defaults
    var defaultChallenges = {};
    for (let i=1; i<=10; i++) {
      defaultChallenges["chProgress"+i] = "1";
      defaultChallenges["chRank"+i] = "1";
    }

    return savedChallenges || defaultChallenges;
  })

  useEffect(() => {
    updateChallenges();
    const timeOutId = setTimeout(() => saveChallenges(inputs), 500);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveChallenges = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("challenges", JSON.stringify(inputs));
      windowGlobal.localStorage.setItem("numOfChallenges", challengeIndexes.current.length);
    }
  }

  return (
    <Layout title="CHALLENGES">
      <Seo title="Challenges" />
      <h2>CHALLENGE TRACKER</h2>
      <button id="add-challenge-button" onClick={addChallenge}>ADD CHALLENGE</button>
      <form class="challenges" id="challenge-form">
        {challenges}
      </form>
    </Layout>

  )
}

export default Challenges

