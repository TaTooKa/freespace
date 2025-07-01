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
    {depth: 3, value: "DISPOSITION"},
    {depth: 3, value: "CLOTHING"},
    {depth: 3, value: "GENDER"},
    {depth: 3, value: "PROFESSION / BACKGROUND"},
    {depth: 3, value: "REVEALED ASPECT"},
    {depth: 3, value: "CHARACTER GOAL"},
    {depth: 2, value: "SPECIES"},
    {depth: 2, value: "CREATURES"},
    {depth: 2, value: "NEMESIS"},
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

  return (
    <Layout title="CHARACTER ORACLES" headings={headings}>
      <Seo title="Character Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="general-characters">GENERAL CHARACTERS</h2>
        <blockquote><p>Use these general oracles for any type of character.</p></blockquote>
        <h3 id="name">NAME</h3>
        <Oracle oracleName="character-name" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName} template/>

        <h3 id="name">CALLSIGN</h3>
        <Oracle oracleName="character-callsign" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="look">LOOK</h3>
        <Oracle oracleName="character-look" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="disposition">DISPOSITION</h3>
        <Oracle oracleName="character-disposition" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="clothing">CLOTHING</h3>
        <Oracle oracleName="character-clothing" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="gender">GENDER</h3>
        <Oracle oracleName="character-gender" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="profession--background">PROFESSION / BACKGROUND</h3>
        <Oracle oracleName="character-profession-background" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="revealed-aspect">REVEALED ASPECT</h3>
        <Oracle oracleName="character-revealed-aspect" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle (more than once, if necessary) as you get to know a character and discover more of their moods or personality quirks.</p></blockquote>

        <h3 id="character-goal">CHARACTER GOAL</h3>
        <Oracle oracleName="character-goal" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h2 id="species">SPECIES</h2>

        <h3 id="species-name">NAME</h3>
        <Oracle oracleName="species-name" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName} combined joined/>

        <h3 id="species-traits">TRAITS</h3>
        <Oracle oracleName="species-traits" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName} combined joined/>

        <h3 id="species-ability">SPECIAL ABILITY</h3>
        <Oracle oracleName="species-ability" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h2 id="creatures">CREATURES</h2>
        <blockquote><p>Use these oracles to get a randomly generated Creature.</p></blockquote>

        <h3 id="creature-environment">ENVIRONMENT OR HABITAT</h3>
        <Oracle oracleName="creature-environment" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="creature-scale">CREATURE SCALE</h3>
        <Oracle oracleName="creature-scale" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="creature-basicform">CREATURE BASIC FORM</h3>
        <Oracle oracleName="creature-basicform" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="creature-firstlook">CREATURE FIRST LOOK</h3>
        <Oracle oracleName="creature-firstlook" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="creature-behavior">CREATURE BEHAVIOR</h3>
        <Oracle oracleName="creature-behavior" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="creature-revealedaspect">CREATURE REVEALED ASPECT</h3>
        <Oracle oracleName="creature-revealedaspect" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle (more than once, if necessary) as you interact with the creature and discover more of its features and quirks.</p></blockquote>

        <br/>
        <hr/>
        <h2 id="nemesis">NEMESIS</h2>
        <blockquote><p>Use these oracles when you need to come up with an antagonistic boss or leader of a faction.</p></blockquote>

        <h3 id="nemesis-quirk">QUIRK</h3>
        <Oracle oracleName="nemesis-quirk" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="nemesis-boon">BOON</h3>
        <Oracle oracleName="nemesis-boon" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="nemesis-weakness">WEAKNESS</h3>
        <Oracle oracleName="nemesis-weakness" oracleDatatable={characterOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}