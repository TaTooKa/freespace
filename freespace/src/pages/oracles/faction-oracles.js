import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import factionOracleResults from '/src/datatables/faction-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function FactionOracles() {
  const headings = [
    {depth: 2, value: "FACTION TYPE"},
    {depth: 2, value: "FACTION CHARACTERISTICS"},
    {depth: 2, value: "SOCIETY"},

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


        <h2 id="faction-type">FACTION TYPE</h2>
        <Oracle oracleName="faction-type" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-interstellarsociety">INTERSTELLAR SOCIETY</h3>
        <Oracle oracleName="faction-interstellarsociety" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>A huge culture or commonality spanning multiple star systems.</p></blockquote>

        <h3 id="faction-dominion">DOMINION</h3>
        <Oracle oracleName="faction-dominion" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>The domain that this organization or power has influence over.</p></blockquote>

        <h4 id="faction-dominion-leadership">⤷ DOMINION LEADERSHIP</h4>
        <Oracle oracleName="faction-dominion-leadership" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-guild">GUILD</h3>
        <Oracle oracleName="faction-guild" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>An organization of specialists over a particular trade.</p></blockquote>

        <h3 id="faction-fringegroup">FRINGE GROUP</h3>
        <Oracle oracleName="faction-fringegroup" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>A band of outlaws, outcasts or rogues.</p></blockquote>

        <br/>
        <hr/>
        <h2 id="faction-characteristics">FACTION CHARACTERISTICS</h2>
        <h3 id="faction-name">FACTION NAME</h3>
        <Oracle oracleName="faction-name" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName} template/>

        <h3 id="faction-influence">FACTION INFLUENCE</h3>
        <Oracle oracleName="faction-influence" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-quirk">FACTION QUIRK</h3>
        <Oracle oracleName="faction-quirk" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-project">FACTION PROJECT</h3>
        <Oracle oracleName="faction-project" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="faction-relationship">FACTION RELATIONSHIP</h3>
        <Oracle oracleName="faction-relationship" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle to get a relationship with another faction or important group.</p></blockquote>

        <h3 id="faction-rumors">FACTION RUMORS</h3>
        <Oracle oracleName="faction-rumors" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h2 id="society">SOCIETY</h2>
        <h3 id="society-techlevel">SOCIETY TECH LEVEL</h3>
        <Oracle oracleName="society-techlevel" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="society-condition">SOCIETY CONDITION</h3>
        <Oracle oracleName="society-condition" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="society-politicalsystem">SOCIETY POLITICAL SYSTEM</h3>
        <Oracle oracleName="society-politicalsystem" oracleDatatable={factionOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}