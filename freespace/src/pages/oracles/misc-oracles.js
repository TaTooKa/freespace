import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MiscOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
    {depth: 2, value: "TECHNOBABBLE"},
    {depth: 2, value: "RUMORS"},
    {depth: 2, value: "CARGO"},
    {depth: 2, value: "BACKGROUND STORY"},
  ]
  
  const oracleLogName = "miscOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="MISC ORACLES" headings={headings}>
      <Seo title="Misc Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="combat-action">COMBAT ACTION</h2>
        <Oracle oracleName="combat-action" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>

        <br/>
        <hr/>

        <h2 id="technobabble">TECHNOBABBLE</h2>
        <Oracle oracleName="technobabble" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName} combined/>

        <br/>
        <hr/>

        <h2 id="rumors">RUMORS AT THE CANTINA</h2>
        <Oracle oracleName="rumors" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h2 id="cargo">CARGO OF DUBIOUS LEGALITY</h2>
        <Oracle oracleName="illegalcargo" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h2 id="bacground-story">BACKGROUND STORY FRAMING</h2>
        <Oracle oracleName="background-story" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle if you need ideas for the overall happenstances, status-quo, or the big picture of the sector/zone/galaxy that your story will take place in.</p></blockquote>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}