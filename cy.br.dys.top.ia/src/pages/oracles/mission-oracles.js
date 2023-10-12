import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import missionOracleResults from '/src/datatables/mission-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MissionOracles() {
  const headings = [
    {depth: 2, value: "MISSIONS"},
    {depth: 2, value: "PLOT HOOKS"},
    {depth: 3, value: "RUMORS ON THE STREET"},
  ]

  const oracleLogName = "missionOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="MISSION ORACLES" headings={headings}>
      <Seo title="Mission Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="missions">MISSIONS</h2>
        <blockquote><p>Usually, runners are contacted by a <a href="/oracles/character-oracles#fixer">Fixer</a> (for jobs of all kinds) or a <i>Mr. Johnson</i> (missions for Megacorps or other big players).</p></blockquote>

        <h3 id="mission-people">MISSION TARGET IS A PERSON</h3>
        <Oracle oracleName="mission-people" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="mission-thing">MISSION TARGET IS A THING</h3>
        <Oracle oracleName="mission-thing" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName} combined/>

        <h4 id="mission-problem">MISSION PROBLEM (OR WITHHELD INFORMATION)</h4>
        <Oracle oracleName="mission-problem" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="plot-hooks-and-twists">PLOT HOOKS AND TWISTS</h2>

        <h3 id="rumors-on-the-street">RUMORS ON THE STREET</h3>
        <Oracle oracleName="rumors-street" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <blockquote><p>Use this oracle when you need to generate chatter or get a job offer in a different way.</p></blockquote>
 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}