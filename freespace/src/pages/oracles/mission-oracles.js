import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import missionOracleResults from '/src/datatables/mission-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MissionOracles() {
  const headings = [
    {depth: 2, value: "MISSIONS"},
    {depth: 3, value: "MISSION TYPE"},
    {depth: 3, value: "MISSION OBJECTIVE"},
    {depth: 3, value: "MISSION CLIENT"},
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

        <h3 id="mission-type">MISSION TYPE</h3>
        <Oracle oracleName="mission-type" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="mission-objective">MISSION OBJECTIVE OR TARGET</h3>
        <Oracle oracleName="mission-objective" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="mission-client">MISSION CLIENT OR SPONSOR</h3>
        <Oracle oracleName="mission-client" oracleDatatable={missionOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}