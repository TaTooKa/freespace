import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import coreOracleResults from '/src/datatables/core-oracles'

export default function CoreOracles() {
  const headings = [
    // {depth: 2, value: "ACTION"},
    // {depth: 2, value: "THEME"},
    // {depth: 2, value: "DESCRIPTOR"},
    // {depth: 2, value: "FOCUS"},
  ]


  const handleOnClick = (event) => {
    if ( event.target.id == "oracle-action-button") {
      var desiredElementId = "oracle-action-result";
    } else if ( event.target.id == "oracle-theme-button") {
      var desiredElementId = "oracle-theme-result";
    } else if ( event.target.id == "oracle-descriptor-button") {
      var desiredElementId = "oracle-descriptor-result";
    } else if ( event.target.id == "oracle-focus-button") {
      var desiredElementId = "oracle-focus-result";
    }
    const inputResult = document.getElementById(desiredElementId);
    const oracleResult = coreOracleResults[desiredElementId][Math.floor(Math.random()*coreOracleResults[desiredElementId].length)];
    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;

      if ( oracleResult.length <= 26 ) {
        inputResult.style.fontSize = "1em";
      } else if ( oracleResult.length <= 60 ) {
        inputResult.style.fontSize = "0.9em";
      } else if ( oracleResult.length <= 80 ) {
        inputResult.style.fontSize = "0.7em";
      } else {
        inputResult.style.fontSize = "0.6em";
      }
    }, 500);


  }

  return (
    <Layout title="CORE ORACLES" headings={headings}>
      <Seo title="Core Oracles" />
      <div class="oracles-container">
        <h2 id="action">ACTION</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-action-result" class="oracle-result"></span>
          <button type="button" id="oracle-action-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="action">THEME</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-theme-result" class="oracle-result"></span>
          <button type="button" id="oracle-theme-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use ACTION + THEME to get a result of something that's happening, the desire or objective of someone, the need or purpose of a challenge, etc.</p></blockquote>
        <br/>

        <h2 id="action">DESCRIPTOR</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-descriptor-result" class="oracle-result"></span>
          <button type="button" id="oracle-descriptor-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h2 id="action">FOCUS</h2>
        <div class="oracle-container">
          <span role="textbox" id="oracle-focus-result" class="oracle-result"></span>
          <button type="button" id="oracle-focus-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use DESCRIPTOR + FOCUS to get a result of a particular thing or happenstance, a finding, a revealed entity or phenomenon, etc.</p></blockquote>
      </div>
    </Layout>
  );
}