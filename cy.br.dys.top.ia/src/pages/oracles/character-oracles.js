import React from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import characterOracleResults from '/src/datatables/character-oracles'

export default function CoreOracles() {
  const headings = [
    {depth: 2, value: "GENERAL CHARACTERS"},
    {depth: 3, value: "NAME"},
    {depth: 3, value: "LOOK"},
    {depth: 3, value: "DISPOSITION"},
    {depth: 3, value: "FIRST IMPRESSIONS"},
    {depth: 3, value: "PROFESSION / BACKGROUND"},
    {depth: 3, value: "REVEALED ASPECT"},
    {depth: 2, value: "INTIMATE DETAILS"},
    {depth: 3, value: "VICE / ADDICTION"},
    {depth: 3, value: "TATTOO"},
    {depth: 3, value: "SEXUAL ORIENTATION"},
    {depth: 3, value: "GENDER"},
    {depth: 2, value: "SPECIFIC CHARACTERS"},
    {depth: 3, value: "CORPORATE ARISTOCRAT"},
    {depth: 3, value: "GANGBANGER"},
    {depth: 3, value: "LAW ENFORCEMENT"},
    {depth: 3, value: "FIXER"},
    {depth: 3, value: "MERC"},
    {depth: 3, value: "HACKER"},
    {depth: 3, value: "STREET WALKER"},
    {depth: 3, value: "CABBIE"},
  ]

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    const oracleResult = characterOracleResults[desiredElementId][Math.floor(Math.random()*characterOracleResults[desiredElementId].length)];
    inputResult.classList.add("toggled");

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;

      if ( inputResult.textContent.length <= 26 ) {
        inputResult.style.fontSize = "1em";
      } else if ( inputResult.textContent.length <= 80 ) {
        inputResult.style.fontSize = "0.9em";
      } else if ( inputResult.textContent.length <= 100 ) {
        inputResult.style.fontSize = "0.7em";
      } else {
        inputResult.style.fontSize = "0.6em";
      }
    }, 500);

  }

  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />
      <div class="oracles-container">

        <h2 id="general-characters">GENERAL CHARACTERS</h2>
        <blockquote><p>Use these general oracles for any type of character.</p></blockquote>
        <h3 id="name">NAME</h3>
        <h4 id="character-name-male">⤷ MALE-SOUNDING</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-male-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-male-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-female">⤷ FEMALE-SOUNDING</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-female-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-female-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="character-name-lastname">⤷ LAST-NAME</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-name-lastname-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-name-lastname-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="look">LOOK</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-look-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-look-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="disposition">DISPOSITION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-disposition-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-disposition-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="first-impressions">FIRST IMPRESSIONS</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-first-impressions-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-first-impressions-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>

        <h3 id="profession--background">PROFESSION / BACKGROUND</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-profession-background-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-profession-background-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="revealed-aspect">REVEALED ASPECT</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-revealed-aspect-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-revealed-aspect-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <blockquote><p>Use this oracle (more than once, if necessary) as you get to know a character and discover more of their moods or personality quirks.</p></blockquote>
        <br/>

        <h2 id="intimate-details">INTIMATE DETAILS</h2>
        <blockquote><p>Use these oracles to generate intimate details for your character, or when you develop enough confidence or familiarity with another character in which these facts might get revealed.</p></blockquote>
        <h3 id="vice--addiction">VICE / ADDICTION</h3>
        <h4 id="vice-addiction-type">⤷ TYPE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-vice-addiction-type-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-vice-addiction-type-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="vice-addiction-level">⤷ LEVEL OF NEED</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-vice-addiction-level-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-vice-addiction-level-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="tattoo">TATTOO</h3>
        <h4 id="tattoo-design">⤷ DESIGN</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-design-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-design-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="tattoo-style">⤷ STYLE</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-style-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-style-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="tattoo-location">⤷ LOCATION</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-tattoo-location-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-tattoo-location-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <h3 id="sexual-orientation">SEXUAL ORIENTATION</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-sexual-orientation-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-sexual-orientation-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h3 id="gender">GENDER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-gender-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-gender-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        <br/>

        <h2 id="specific-characters">SPECIFIC CHARACTERS</h2>
        <blockquote><p>Use these oracles to generate a character of a more specific category.</p></blockquote>

        <h3 id="corporate-aristocrat">CORPORATE ARISTOCRAT</h3>
        <h4 id="corporate-aristocrat-personality-quirk">⤷ PERSONALITY QUIRK</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-personality-quirk-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-personality-quirk-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="corporate-aristocrat-position-assets">⤷ POSITION AND ASSETS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-position-assets-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-position-assets-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <h4 id="corporate-aristocrat-mannerisms-looks">⤷ MANNERISMS AND LOOKS</h4>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-corporate-aristocrat-mannerisms-looks-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-corporate-aristocrat-mannerisms-looks-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>

        <h3 id="gangbanger">GANGBANGER</h3>
        <div class="oracle-container">
          <span role="textbox" id="oracle-character-gangbanger-result" class="oracle-result"></span>
          <button type="button" id="oracle-character-gangbanger-button" class="randomize-button" onClick={handleOnClick}></button>
        </div>
        <br/>
        
        <h3 id="law-enforcement">LAW ENFORCEMENT</h3>

        <h3 id="fixer">FIXER</h3>

        <h3 id="merc">MERC</h3>

        <h3 id="hacker">HACKER</h3>

        <h3 id="street-walker">STREET WALKER</h3>

        <h3 id="cabbie">CABBIE</h3>

        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}