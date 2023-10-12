import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import coreOracleResults from '/src/datatables/core-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function CoreOracles() {
  const headings = [
    {depth: 2, value: "ACTION"},
    {depth: 2, value: "THEME"},
    {depth: 2, value: "DESCRIPTOR"},
    {depth: 2, value: "FOCUS"},
    {depth: 2, value: "STORY COMPLICATION"},
    {depth: 2, value: "STORY CLUE"},
  ]

  const oracleLogName = "coreOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="CORE ORACLES" headings={headings}>
      <Seo title="Core Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">
        <h2 id="action">ACTION</h2>
        <Oracle oracleName="action" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>

        <h2 id="theme">THEME</h2>
        <Oracle oracleName="theme" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use ACTION + THEME to get a result of something that's happening, the desire or objective of someone, the need or purpose of a challenge, etc.</p></blockquote>
        <br/>

        <h2 id="descriptor">DESCRIPTOR</h2>
        <Oracle oracleName="descriptor" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>

        <h2 id="focus">FOCUS</h2>
        <Oracle oracleName="focus" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use DESCRIPTOR + FOCUS to get a result of a particular thing or happenstance, a finding, a revealed entity or phenomenon, etc.</p></blockquote>

        <br/>
        <h2 id="story-complication">STORY COMPLICATION</h2>
        <Oracle oracleName="story-complication" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use this oracle when you suffer a negative consequence and you are not sure what to come up with or need some inspiration.</p></blockquote>

        <h2 id="story-clue">STORY CLUE</h2>
        <Oracle oracleName="story-clue" oracleDatatable={coreOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <blockquote><p>Use this oracle when you find a clue or lead and want to get inspiration on its nature.</p></blockquote>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}