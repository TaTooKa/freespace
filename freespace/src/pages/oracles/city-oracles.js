import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import cityOracleResults from '/src/datatables/city-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function CityOracles() {
  const headings = [
    {depth: 2, value: "SENSES"},
    {depth: 3, value: "SMELL"},
    {depth: 3, value: "SOUND"},
    {depth: 3, value: "SIGHT"},
    {depth: 2, value: "BUILDINGS"},
    {depth: 3, value: "BUILDING TYPE"},
    {depth: 3, value: "BUILDING FEATURE"},
    {depth: 3, value: "BUILDING INTERIOR"},
    {depth: 2, value: "CITY DETAILS"},
    {depth: 3, value: "UPCYCLED STUFF"},
    {depth: 3, value: "LEGACY INFRASTRUCTURE"},
    {depth: 3, value: "NIGHTLIFE"},
    {depth: 3, value: "SCREEN CONTENT"},
    {depth: 3, value: "ADVERTAINMENT"},
    {depth: 2, value: "VEHICLES"},
    {depth: 3, value: "TERRESTRIAL VEHICLE"},
    {depth: 3, value: "AERIAL VEHICLE"},
    {depth: 3, value: "AQUATIC VEHICLE"},
    {depth: 2, value: "OMINOUS OCCURRENCES"},
    {depth: 3, value: "STRANGE SICKNESS"},
    {depth: 3, value: "LOCAL CONFLICT"},
    {depth: 3, value: "ATYPICAL WEATHER"},
  ]

  const oracleLogName = "cityOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  function openAIGeneratedExterior(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-building-type-result').innerText;
    const feature = document.getElementById('oracle-building-feature-result').innerText;
    const architecture = document.getElementById('oracle-building-architecture-result').innerText;

    const url = "https://perchance.org/cyberpunk-city-exterior?type="+type+"&feature="+feature+"&architecture="+architecture;
    window.open(url, '_blank');
  }
  
  function openAIGeneratedInterior(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-building-type-result').innerText;
    const style = document.getElementById('oracle-building-interior-style-result').innerText;
    const state = document.getElementById('oracle-building-interior-state-result').innerText;
    const feature = document.getElementById('oracle-building-interior-feature-result').innerText;

    const url = "https://perchance.org/cyberpunk-city-interior?type="+type+"&style="+style+"&state="+state+"&feature="+feature;
    window.open(url, '_blank');
  }

  function openAIGeneratedNightclub(e) {
    e.preventDefault();
    const type = document.getElementById('oracle-bar-club-vibe-result').innerText + " nightclub";
    const style = "modern";
    const state = "security: "+ encodeURIComponent(document.getElementById('oracle-bar-club-security-result').innerText);
    const feature = "patrons and bystanders. "+encodeURIComponent(document.getElementById('oracle-bar-club-status-result').innerText);

    const url = "https://perchance.org/cyberpunk-city-interior?type="+type+"&style="+style+"&state="+state+"&feature="+feature;
    window.open(url, '_blank');
  }

  return (
    <Layout title="CITY ORACLES" headings={headings}>
      <Seo title="City Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="senses">SENSES</h2>
        <blockquote><p>Use these oracles for first impressions or sensory details.</p></blockquote>
        <h3 id="smell">SMELL</h3>
        <Oracle oracleName="smell" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="sound">SOUND</h3>
        <Oracle oracleName="sound" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="sight">SIGHT</h3>
        <Oracle oracleName="sight" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="buildings">BUILDINGS</h2>
        <blockquote><p>Use these oracles to generate a building with varying levels of detail.</p></blockquote>

        <h3 id="building-feature">BUILDING TYPE</h3>
        <Oracle oracleName="building-type" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="building-feature">BUILDING FEATURE</h3>
        <Oracle oracleName="building-feature" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="building-architecture">BUILDING ARCHITECTURAL STLYE</h3>
        <Oracle oracleName="building-architecture" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="city-exterior-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedExterior}>⤷ Get AI generated exterior image for these results</a></span>
        </div>
        <br/>

        <h3 id="building-interior">BUILDING INTERIOR</h3>
        <h4 id="building-interior-style">⤷ INTERIOR STYLE</h4>
        <Oracle oracleName="building-interior-style" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="building-interior-state">⤷ INTERIOR STATE</h4>
        <Oracle oracleName="building-interior-state" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="building-interior-feature">⤷ INTERIOR FEATURE</h4>
        <Oracle oracleName="building-interior-feature" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="building-interior-secret">⤷ INTERIOR SECRET</h4>
        <Oracle oracleName="building-interior-secret" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <div id="city-interior-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedInterior}>⤷ Get AI generated interior image for these results</a></span>
        </div>
        <br/>
        <br/>

        <h2 id="city-details">CITY DETAILS</h2>
        <blockquote><p>Use these oracles to generate nuanced descriptions for more specific contexts.</p></blockquote>

        <h3 id="upcycled-stuff">UPCYCLED STUFF</h3>
        <Oracle oracleName="upcycled-stuff" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="legacy-infrastructure">LEGACY INFRASTRUCTURE</h3>
        <Oracle oracleName="legacy-infrastructure" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="nightlife">NIGHTLIFE</h3>
        <h4 id="bar-club-name">⤷ BAR / CLUB NAME</h4>
        <Oracle oracleName="bar-club-name" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="bar-club-status">⤷ BAR / CLUB STATUS</h4>
        <Oracle oracleName="bar-club-status" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="bar-club-security">⤷ BAR / CLUB SECURITY</h4>
        <Oracle oracleName="bar-club-security" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="bar-club-vibe">⤷ BAR / CLUB VIBE</h4>
        <Oracle oracleName="bar-club-vibe" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <div id="nightclub-image-container">
          <span><a href="" target="_blank" onClick={openAIGeneratedNightclub}>⤷ Get AI generated nightclub image for these results</a></span>
        </div>
        <br/>

        <h3 id="nightclub-encounters">NIGHTCLUB ENCOUNTER</h3>
        <Oracle oracleName="nightclub-encounter" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle when on a nightclub and you want to generate a complication, plot hook, or both.</p></blockquote>
        <br/>

        <h3 id="screen-content">SCREEN CONTENT</h3>
        <Oracle oracleName="screen-content" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use the following oracles to generate what's on the always-present screens, holos and AR displays everywhere.</p></blockquote>
        <br/>

        <h3 id="advertainment">ADVERTAINMENT</h3>

        <h4 id="advertainment-brand">⤷ ADVERTAINMENT - BRAND</h4>
        <Oracle oracleName="advertainment-brand" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="advertainment-product-name">⤷ ADVERTAINMENT - PRODUCT NAME</h4>
        <Oracle oracleName="advertainment-product-name" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="advertainment-product-line">⤷ ADVERTAINMENT - PRODUCT LINE</h4>
        <Oracle oracleName="advertainment-product-line" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="advertainment-marketing-style">⤷ ADVERTAINMENT - MARKETING STYLE</h4>
        <Oracle oracleName="advertainment-marketing-style" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>

        <h2 id="vehicles">VEHICLES</h2>
        <blockquote><p>Use these oracles to generate vehicles with varying levels of detail.</p></blockquote>

        <h3 id="terrestrial-vehicle">TERRESTRIAL VEHICLE</h3>

        <h4 id="terrestrial-vehicle-type">⤷ VEHICLE - GENERAL TYPE</h4>
        <Oracle oracleName="terrestrial-vehicle-type" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="terrestrial-vehicle-car">⤷ VEHICLE - BRAND, TYPE AND PAINTJOB</h4>
        <Oracle oracleName="terrestrial-vehicle-car" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName} combined/>

        <h4 id="terrestrial-vehicle-activity">⤷ VEHICLE - ACTIVITY</h4>
        <Oracle oracleName="terrestrial-vehicle-activity" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="terrestrial-vehicle-feature">⤷ VEHICLE - FEATURE</h4>
        <Oracle oracleName="terrestrial-vehicle-feature" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="terrestrial-vehicle-condition">⤷ VEHICLE - CONDITION</h4>
        <Oracle oracleName="terrestrial-vehicle-condition" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="aerial-vehicle">AERIAL VEHICLE</h3>

        <h4 id="aerial-vehicle-type">⤷ AERIAL VEHICLE - TYPE</h4>
        <Oracle oracleName="aerial-vehicle-type" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="aerial-vehicle-activity">⤷ AERIAL VEHICLE - ACTIVITY</h4>
        <Oracle oracleName="aerial-vehicle-activity" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="aquatic-vehicle">AQUATIC VEHICLE</h3>
        <Oracle oracleName="aquatic-vehicle" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>

        <h2 id="ominous-occurrences">OMINOUS OCCURRENCES</h2>
        <blockquote><p>Use these oracles to generate things that are background color now, but might mean trouble later.</p></blockquote>

        <h3 id="strange-sickness">STRANGE SICKNESS</h3>

        <h4 id="strange-sickness-symptoms">⤷ STRANGE SICKNESS - SYMPTOMS</h4>
        <Oracle oracleName="strange-sickness-symptoms" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="strange-sickness-cause">⤷ STRANGE SICKNESS - CAUSE</h4>
        <Oracle oracleName="strange-sickness-cause" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <h3 id="local-conflict">LOCAL CONFLICT</h3>

        <h4 id="conflict-group">⤷ CONFLICT GROUP</h4>
        <Oracle oracleName="conflict-group" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="conflict-source">⤷ CONFLICT SOURCE</h4>
        <Oracle oracleName="conflict-source" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="conflict-adversary-group">⤷ ADVERSARY GROUP</h4>
        <Oracle oracleName="conflict-adversary-group" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        
        <h3 id="atypical-weather">ATYPICAL WEATHER</h3>
        <Oracle oracleName="atypical-weather" oracleDatatable={cityOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}