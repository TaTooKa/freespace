import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import characterOracleResults from '/src/datatables/character-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function CharacterOracles() {
  const headings = [
    {depth: 2, value: "GENERAL CHARACTERS"},
    {depth: 3, value: "NAME"},
    {depth: 3, value: "LOOK"},
    {depth: 3, value: "ETHNICITY"},
    {depth: 3, value: "GENDER"},
    {depth: 3, value: "DISPOSITION"},
    {depth: 3, value: "FIRST IMPRESSIONS"},
    {depth: 3, value: "PROFESSION / BACKGROUND"},
    {depth: 3, value: "REVEALED ASPECT"},
    {depth: 2, value: "INTIMATE DETAILS"},
    {depth: 3, value: "VICE / ADDICTION"},
    {depth: 3, value: "TATTOO"},
    {depth: 3, value: "SEXUAL ORIENTATION"},
    {depth: 3, value: "FLASHY CYBERWARE"},
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

  const oracleLogName = "characterOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  function openAIGeneratedPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const look = document.getElementById('oracle-character-look-result').innerText;
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const profession = document.getElementById('oracle-character-profession-background-result').innerText;
    const impressions = document.getElementById('oracle-character-first-impressions-result').innerText;

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedCorporatePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Corporate Aristocrat"
    const look = "wealthy"
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = document.getElementById('oracle-character-corporate-aristocrat-mannerisms-looks-result').innerText;

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedFixerPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const trade = document.getElementById('oracle-character-fixer-profession-result').innerText;
    const profession = "Fixer ("+trade+")";
    const look = "smart"
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-fixer-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedMercPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Mercenary";
    const look = "tough"
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-merc-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedHackerPortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Hacker";
    const look = "wired"
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-hacker-mannerisms-looks-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }
  
  function openAIGeneratedProstitutePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Prostitute";
    const look = "sexy"
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-street-walker-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }

  function openAIGeneratedCabbiePortrait(e) {
    e.preventDefault();
    const gender = document.getElementById('oracle-character-gender-result').innerText;
    const profession = "Cabbie";
    const look = document.getElementById('oracle-character-cabbie-nationality-result').innerText;
    const ethnicity = document.getElementById('oracle-character-ethnicity-result').innerText;
    const impressions = encodeURIComponent(document.getElementById('oracle-character-cabbie-appearance-result').innerText);

    const url = "https://perchance.org/cyberpunk-portrait?gender="+gender+"&look="+look+"&ethnicity="+ethnicity+"&profession="+profession+"&impressions="+impressions;
    window.open(url, '_blank');
  }  

  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="general-characters">GENERAL CHARACTERS</h2>
        <blockquote><p>Use these general oracles for any type of character.</p></blockquote>

        <h3 id="name">NAME</h3>

        <h4 id="character-name-male">⤷ MALE-SOUNDING NAME</h4>
        <Oracle oracleName="character-name-male" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="character-name-female">⤷ FEMALE-SOUNDING NAME</h4>
        <Oracle oracleName="character-name-female" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="character-name-lastname">⤷ LAST-NAME</h4>
        <Oracle oracleName="character-name-lastname" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="look">LOOK</h3>
        <Oracle oracleName="character-look" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="look">ETHNICITY</h3>
        <Oracle oracleName="character-ethnicity" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="gender">GENDER</h3>
        <Oracle oracleName="character-gender" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="disposition">DISPOSITION</h3>
        <Oracle oracleName="character-disposition" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="first-impressions">FIRST IMPRESSIONS</h3>
        <Oracle oracleName="character-first-impressions" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="profession--background">PROFESSION / BACKGROUND</h3>
        <Oracle oracleName="character-profession-background" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="revealed-aspect">REVEALED ASPECT</h3>
        <Oracle oracleName="character-revealed-aspect" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use this oracle (more than once, if necessary) as you get to know a character and discover more of their moods or personality quirks.</p></blockquote>
        <br/>

        <h2 id="intimate-details">INTIMATE DETAILS</h2>
        <blockquote><p>Use these oracles to generate intimate details for your character, or when you develop enough confidence or familiarity with another character in which these facts might get revealed.</p></blockquote>

        <h3 id="vice--addiction">VICE / ADDICTION</h3>

        <h4 id="vice-addiction-type">⤷ VICE / ADDICTION - TYPE</h4>
        <Oracle oracleName="character-vice-addiction-type" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="vice-addiction-level">⤷ VICE / ADDICTION - LEVEL OF NEED</h4>
        <Oracle oracleName="character-vice-addiction-level" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="tattoo">TATTOO</h3>

        <h4 id="tattoo-design">⤷ TATTOO: DESIGN</h4>
        <Oracle oracleName="character-tattoo-design" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="tattoo-style">⤷ TATTOO: STYLE</h4>
        <Oracle oracleName="character-tattoo-style" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="tattoo-location">⤷ TATTOO: LOCATION</h4>
        <Oracle oracleName="character-tattoo-location" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="sexual-orientation">SEXUAL ORIENTATION</h3>
        <Oracle oracleName="character-sexual-orientation" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h2 id="flashy-cyberware">FLASHY CYBERWARE</h2>
        <blockquote><p>If the character sports cyberware, these oracles will give them some aesthetic flavor.</p></blockquote>

        <h4 id="flashy-cyberware-type">⤷ CYBERWARE - TYPE OF UPGRADES</h4>
        <Oracle oracleName="flashy-cyberware-type" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="flashy-cyberware-cybereyes">⤷ CYBERWARE - CYBEREYES</h4>
        <Oracle oracleName="flashy-cyberware-cybereyes" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="flashy-cyberware-cyberarms">⤷ CYBERWARE - CYBERARMS</h4>
        <Oracle oracleName="flashy-cyberware-cyberarms" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="flashy-cyberware-cyberlegs">⤷ CYBERWARE - CYBERLEGS</h4>
        <Oracle oracleName="flashy-cyberware-cyberlegs" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="flashy-cyberware-blades">⤷ CYBERWARE - BLADES (MOLLIES OR LOGANS)</h4>
        <Oracle oracleName="flashy-cyberware-blades" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="flashy-cyberware-plugs">⤷ CYBERWARE - PLUGS (DATA JACK)</h4>
        <Oracle oracleName="flashy-cyberware-plugs" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="specific-characters">SPECIFIC CHARACTERS</h2>
        <blockquote><p>Use these oracles to generate a character of a more specific category.</p></blockquote>

        <h3 id="corporate-aristocrat">CORPORATE ARISTOCRAT</h3>

        <h4 id="corporate-aristocrat-personality-quirk">⤷ CORPO - PERSONALITY QUIRK</h4>
        <Oracle oracleName="character-corporate-aristocrat-personality-quirk" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="corporate-aristocrat-position-assets">⤷ CORPO - POSITION AND ASSETS</h4>
        <Oracle oracleName="character-corporate-aristocrat-position-assets" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="corporate-aristocrat-mannerisms-looks">⤷ CORPO - MANNERISMS AND LOOKS</h4>
        <Oracle oracleName="character-corporate-aristocrat-mannerisms-looks" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="corporate-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedCorporatePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="gangbanger">GANGBANGER</h3>
        <Oracle oracleName="character-gangbanger" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        
        <h3 id="law-enforcement">LAW ENFORCEMENT</h3>

        <h4 id="law-enforcement-type">⤷ LAW ENFORCEMENT - TYPE</h4>
        <Oracle oracleName="character-law-enforcement-type" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="law-enforcement-activity">⤷ LAW ENFORCEMENT - ACTIVITY</h4>
        <Oracle oracleName="character-law-enforcement-activity" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="law-enforcement-backup">⤷ LAW ENFORCEMENT - BACKUP</h4>
        <Oracle oracleName="character-law-enforcement-backup" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h3 id="fixer">FIXER</h3>

        <h4 id="fixer-known-callsign">⤷ FIXER - KNOWN CALLSIGN</h4>
        <Oracle oracleName="character-fixer-known-callsign" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="fixer-personality-quirk">⤷ FIXER - PERSONALITY QUIRK</h4>
        <Oracle oracleName="character-fixer-personality-quirk" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="fixer-profession">⤷ FIXER - MAIN TRADE</h4>
        <Oracle oracleName="character-fixer-profession" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="fixer-mannerisms-looks">⤷ FIXER - MANNERISMS AND LOOKS</h4>
        <Oracle oracleName="character-fixer-mannerisms-looks" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="fixer-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedFixerPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="merc">MERC</h3>

        <h4 id="merc-personality-quirk">⤷ MERC - PERSONALITY QUIRK</h4>
        <Oracle oracleName="character-merc-personality-quirk" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="merc-tools">⤷ MERC - TOOLS OF THE TRADE</h4>
        <Oracle oracleName="character-merc-tools" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="merc-mannerisms-looks">⤷ MERC - MANNERISMS AND LOOKS</h4>
        <Oracle oracleName="character-merc-mannerisms-looks" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="merc-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedMercPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="hacker">HACKER</h3>

        <h4 id="hacker-callsign">⤷ HACKER - CALLSIGN</h4>
        <Oracle oracleName="character-hacker-callsign" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="hacker-personality-quirk">⤷ HACKER - PERSONALITY QUIRK</h4>
        <Oracle oracleName="character-hacker-personality-quirk" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="hacker-obscure-fact">⤷ HACKER - OBSCURE FACT</h4>
        <Oracle oracleName="character-hacker-obscure-fact" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="hacker-mannerisms-looks">⤷ HACKER - MANNERISMS AND LOOKS</h4>
        <Oracle oracleName="character-hacker-mannerisms-looks" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="hacker-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedHackerPortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="street-walker">STREET WALKER</h3>
        <Oracle oracleName="character-street-walker" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="street-walker-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedProstitutePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>

        <h3 id="cabbie">CABBIE</h3>

        <h4 id="cabbie-appearance">⤷ CABBIE APPEARANCE</h4>
        <Oracle oracleName="character-cabbie-appearance" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="cabbie-nationality">⤷ CABBIE NATIONALITY</h4>
        <Oracle oracleName="character-cabbie-nationality" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="cabbie-conversation-topic">⤷ CABBIE CONVERSATION TOPIC</h4>
        <Oracle oracleName="character-cabbie-conversation-topic" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="cabbie-portrait-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedCabbiePortrait}>⤷ Get AI generated portrait for these results</a></span>
        </div>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}