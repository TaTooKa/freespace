import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import spaceOracleResults from '/src/datatables/space-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function SpaceOracles() {
  const headings = [
    {depth: 2, value: "SPACE ENCOUNTERS"},
    {depth: 2, value: "STAR SECTORS"},
    {depth: 2, value: "SPACE SETTLEMENTS"},
    {depth: 2, value: "SPACEBORNE HAPPENSTANCES"},
    {depth: 2, value: "STARSHIPS"},
    {depth: 2, value: "DERELICTS"},
    {depth: 3, value: "DERELICT ZONES"},
  ]

  const oracleLogName = "spaceOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="SPACE ORACLES" headings={headings}>
      <Seo title="Space Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="space-encounters">SPACE ENCOUNTERS</h2>
        <blockquote><p>Use these oracles for things found in Space, or happenstances aboard a Spaceship while spaceborne.</p></blockquote>

        <h3 id="space-encounters">SPACE SIGHTING</h3>
        <Oracle oracleName="space-sighting" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="star">STAR</h4>
        <Oracle oracleName="star" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="celestial-phenomena">OTHER CELESTIAL PHENOMENA</h4>
        <Oracle oracleName="celestial-phenomena" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="debris-field">DEBRIS FIELD</h4>
        <Oracle oracleName="debris-field" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h2 id="star-sectors">STAR SECTORS</h2>

        <h3 id="sector-name">SECTOR NAME</h3>
        <Oracle oracleName="sector-name" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="sector-details">SECTOR DETAILS</h3>
        <Oracle oracleName="sector-details" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName} combined/>

        <h3 id="starsystem-details">STAR SYSTEM DETAILS</h3>
        <Oracle oracleName="starsystem-details" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName} combined/>

        <br/>
        <hr/>

        <h2 id="space-settlements">SPACE SETTLEMENTS</h2>

        <h3 id="settlement-location">SETTLEMENT LOCATION</h3>
        <Oracle oracleName="settlement-location" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-shape">SETTLEMENT SHAPE</h3>
        <Oracle oracleName="settlement-shape" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-name">SETTLEMENT NAME</h3>
        <Oracle oracleName="settlement-name" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-type">SETTLEMENT TYPE</h3>
        <Oracle oracleName="settlement-type" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-firstlook">SETTLEMENT FIRST LOOK</h3>
        <Oracle oracleName="settlement-firstlook" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-initialattitude">INITIAL ATTITUDE UPON CONTACT</h3>
        <Oracle oracleName="settlement-initialattitude" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-authority">AUTHORITY AND LAW</h3>
        <Oracle oracleName="settlement-authority" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-projects">TRADE AND PROJECTS</h3>
        <Oracle oracleName="settlement-projects" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-trouble">TROUBLE</h3>
        <Oracle oracleName="settlement-trouble" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h2 id="spaceborne-happenstances">SPACEBORNE HAPPENSTANCES</h2>

        <h3 id="spaceborne-peril">SPACEBORNE PERIL</h3>
        <Oracle oracleName="spaceborne-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle to generate trouble or setback while on a spaceship.</p></blockquote>

        <h3 id="spaceborne-opportunity">SPACEBORNE OPPORTUNITY</h3>
        <Oracle oracleName="spaceborne-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle to generate a lucky break or unexpected advantage while on a spaceship.</p></blockquote>

        <br/>
        <hr/>

        <h2 id="starships">STARSHIPS</h2>

        <h3 id="fleet-type">FLEET TYPE</h3>
        <Oracle oracleName="fleet-type" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle if you encounter a fleet and want to reveal its nature.</p></blockquote>

        <h3 id="starship">STARSHIP</h3>
        <blockquote><p>Use these oracles to randomly generate details for a starship.</p></blockquote>

        <h4 id="starship-type">STARSHIP TYPE</h4>
        <Oracle oracleName="starship-type" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="starship-name">STARSHIP NAME</h4>
        <Oracle oracleName="starship-name" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="starship-manufacturer">STARSHIP MANUFACTURER OR BRAND</h4>
        <Oracle oracleName="starship-manufacturer" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName} combined/>

        <h4 id="starship-initialattitude">INITIAL ATTITUDE OR STATE UPON CONTACT</h4>
        <Oracle oracleName="starship-initialattitude" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="starship-firstlook">FIRST LOOK</h4>
        <Oracle oracleName="starship-firstlook" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="starship-mission">STARSHIP MISSION OR CURRENT ACTIVITY</h4>
        <Oracle oracleName="starship-mission" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h2 id="derelicts">DERELICTS</h2>
        <blockquote><p>Use these oracles to randomly generate an abandoned/ruined spaceship, station or facility.</p></blockquote>

        <h3 id="derelict-location">LOCATION</h3>
        <Oracle oracleName="derelict-location" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="derelict-type">TYPE</h3>
        <Oracle oracleName="derelict-type" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="derelict-condition">CONDITION</h3>
        <Oracle oracleName="derelict-condition" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="derelict-outer-first-look">OUTER FIRST LOOK</h3>
        <Oracle oracleName="derelict-outer-first-look" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="derelict-inner-first-look">INNER FIRST LOOK</h3>
        <Oracle oracleName="derelict-inner-first-look" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h3 id="derelict-zones">DERELICT ZONES</h3>
        <blockquote><p>Use these oracles when exploring a derelict.<br/>
        You can create a <b>single Challenge</b> to explore the whole derelict (in which case you can transition into a new zone each time you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a>), or, if you want a longer exploration adventure, you can create a Challenge <b>for each zone inside it</b> (in which case you transition to a new zone when you completely explored the previous one and then <a href="/prompts/challenge-prompts#fulfill-a-challenge">FULFILL THE CHALLENGE</a>).<br/> 
        In any case, you usually begin with the access zone.</p></blockquote>

        <h3 id="derelict-zone-type">ZONE TYPE</h3>
        <Oracle oracleName="derelict-zone-type" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <br/>
        <h3 id="derelict-zone-access">ACCESS ZONE</h3>
        <h4 id="derelict-zone-access-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-access-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-access-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-access-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-access-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-access-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-access-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-access-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-community">COMMUNITY ZONE</h3>
        <h4 id="derelict-zone-community-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-community-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-community-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-community-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-community-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-community-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-community-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-community-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-engineering">ENGINEERING ZONE</h3>
        <h4 id="derelict-zone-engineering-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-engineering-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-engineering-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-engineering-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-engineering-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-engineering-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-engineering-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-engineering-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-living">LIVING ZONE</h3>
        <h4 id="derelict-zone-living-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-living-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-living-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-living-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-living-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-living-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-living-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-living-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-medical">MEDICAL ZONE</h3>
        <h4 id="derelict-zone-medical-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-medical-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-medical-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-medical-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-medical-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-medical-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-medical-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-medical-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-operations">OPERATIONS ZONE</h3>
        <h4 id="derelict-zone-operations-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-operations-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-operations-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-operations-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-operations-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-operations-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-operations-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-operations-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>


        <br/>
        <h3 id="derelict-zone-production">PRODUCTION ZONE</h3>
        <h4 id="derelict-zone-production-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-production-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-production-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-production-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-production-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-production-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-production-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-production-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="derelict-zone-research">RESEARCH ZONE</h3>
        <h4 id="derelict-zone-research-area">⤷ AREA</h4>
        <Oracle oracleName="derelict-zone-research-area" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-research-feature">⤷ FEATURE</h4>
        <Oracle oracleName="derelict-zone-research-feature" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-research-peril">⤷ PERIL</h4>
        <Oracle oracleName="derelict-zone-research-peril" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="derelict-zone-research-opportunity">⤷ OPPORTUNITY</h4>
        <Oracle oracleName="derelict-zone-research-opportunity" oracleDatatable={spaceOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>

      </div>
    </Layout>
  );
}