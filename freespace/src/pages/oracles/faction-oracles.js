import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import factionOracleResults from '/src/datatables/faction-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function FactionOracles() {
  const headings = [
    {depth: 2, value: "MEGACORPS"},
    {depth: 2, value: "STREET GANGS"},

  ]

  const oracleLogName = "factionOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="FACTION ORACLES" headings={headings}>
      <Seo title="Faction Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="megacorps">MEGACORPS</h2>

        <h3 id="megacorp-name">MEGACORP NAME</h3>
        <Oracle oracleName="megacorp-name" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="megacorp-maneuvers">CORP BOARDROOM MANEUVERS</h3>
        <Oracle oracleName="megacorp-maneuvers" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle for whatever the corp might be planning or currently doing.</p></blockquote>

        <br/>

        <h3 id="megacorp-assets">CORP DENIABLE ASSETS</h3>
        <Oracle oracleName="megacorp-assets" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle for resources or unconventional tools a corporate aristocrat can bring to the table to get the job done.</p></blockquote>
        <br/>

        <h2 id="street-gangs">STREET GANGS</h2>

        <h3 id="gang-name">GANG NAME</h3>
        <Oracle oracleName="gang-name" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="gang-description">GANG DESCRIPTION</h3>
        <Oracle oracleName="gang-description" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="gang-main-trade">GANG MAIN TRADE</h3>
        <Oracle oracleName="gang-main-trade" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="gang-current-activity">GANG CURRENT ACTIVITY</h3>
        <Oracle oracleName="gang-current-activity" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="gang-rumors-hooks">GANG RUMORS AND HOOKS</h3>
        <Oracle oracleName="gang-rumors-hooks" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
 
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}