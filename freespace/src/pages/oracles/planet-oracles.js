import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import planetOracleResults from '/src/datatables/planet-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function PlanetOracles() {
  const headings = [
    {depth: 2, value: "PLANET"},
    {depth: 2, value: "PLANETSIDE SETTLEMENTS"},
    {depth: 2, value: "PLANETSIDE LOCATIONS"},

  ]

  const oracleLogName = "planetOraclesLog";

  const windowGlobal = typeof window !== 'undefined' && window
  const savedOracleLog = windowGlobal ? windowGlobal.localStorage.getItem(oracleLogName) : ""

  useEffect(() => {
    // on load...
    const oraclesLog = document.getElementById('oracles-log');
    oraclesLog.innerHTML = savedOracleLog;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
  }, []);

  return (
    <Layout title="PLANET ORACLES" headings={headings}>
      <Seo title="Planet Oracles" />

      <div id="oracles-log"></div>

      <div class="oracles-container">

        <h2 id="planet">PLANET</h2>
        <blockquote><p>Use these oracles to randomly generate a Planet.</p></blockquote>

        <h3 id="planet-type">PLANET TYPE</h3>
        <Oracle oracleName="planet-type" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="planet-name">PLANET NAME</h3>
        <Oracle oracleName="planet-name" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName} combined joined/>

        <h3 id="planet-atmosphere">PLANET ATMOSPHERE</h3>
        <Oracle oracleName="planet-atmosphere" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Breathability is rated according to human standard; nonhuman species may be able to survive in atmospheres deemed toxic to humans.</p></blockquote>

        <h3 id="planet-life">PLANET LIFE</h3>
        <Oracle oracleName="planet-life" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="planetside-peril">PLANETSIDE PERIL</h3>
        <Oracle oracleName="planetside-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="planetside-opportunity">PLANETSIDE OPPORTUNITY</h3>
        <Oracle oracleName="planetside-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="planet-features">PLANET FEATURES BY TYPE</h3>
        <blockquote><p>Use the following oracles to generate extra features for a specific type of planet.</p></blockquote>

        <h3 id="vital-world">VITAL WORLD</h3>
        <h4 id="vital-world-biome">BIOME</h4>
        <Oracle oracleName="vital-world-biome" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="vital-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="vital-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="vital-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="vital-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="ocean-world">OCEAN WORLD</h3>
        <h4 id="ocean-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="ocean-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="ocean-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="ocean-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="rocky-world">ROCKY WORLD</h3>
        <h4 id="rocky-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="rocky-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="rocky-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="rocky-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="desert-world">DESERT WORLD</h3>
        <h4 id="desert-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="desert-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="desert-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="desert-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="jungle-world">JUNGLE WORLD</h3>
        <h4 id="jungle-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="jungle-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="jungle-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="jungle-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="ice-world">ICE WORLD</h3>
        <h4 id="ice-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="ice-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="ice-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="ice-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="furnace-world">FURNACE WORLD</h3>
        <h4 id="furnace-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="furnace-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="furnace-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="furnace-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="jovian-world">JOVIAN WORLD</h3>
        <h4 id="jovian-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="jovian-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="jovian-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="jovian-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="tainted-world">TAINTED WORLD</h3>
        <h4 id="tainted-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="tainted-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="tainted-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="tainted-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="shattered-world">SHATTERED WORLD</h3>
        <h4 id="shattered-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="shattered-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="shattered-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="shattered-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>

        <h3 id="grave-world">GRAVE WORLD</h3>
        <h4 id="grave-world-observed">OBSERVED FROM SPACE</h4>
        <Oracle oracleName="grave-world-observed" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h4 id="grave-world-feature">PLANETSIDE FEATURE</h4>
        <Oracle oracleName="grave-world-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>

        <h2 id="planetside-settlements">PLANETSIDE SETTLEMENTS</h2>

        <h3 id="settlement-name">SETTLEMENT NAME</h3>
        <Oracle oracleName="settlement-name" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-firstlook">FIRST LOOK</h3>
        <Oracle oracleName="settlement-firstlook" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-initialattitude">INITIAL ATTITUDE UPON CONTACT</h3>
        <Oracle oracleName="settlement-initialattitude" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-authority">AUTHORITY AND LAW</h3>
        <Oracle oracleName="settlement-authority" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-projects">TRADE AND PROJECTS</h3>
        <Oracle oracleName="settlement-projects" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="settlement-trouble">TROUBLE</h3>
        <Oracle oracleName="settlement-trouble" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <br/>
        <hr/>

        <h2 id="planetside-locations">PLANETSIDE LOCATIONS</h2>
        <blockquote><p>Use these oracles when exploring a strange, perilous or uncharted planetside location.<br/>
        You can create a <b>single Challenge</b> to explore the whole location (in which case you can transition into a new area each time you <a href="/prompts/challenge-prompts#make-progress">MAKE PROGRESS</a>).</p></blockquote>

        <h3 id="location-theme">LOCATION THEME</h3>
        <Oracle oracleName="location-theme" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="chaotic-location">CHAOTIC LOCATION</h3>
        <p>Reality is corrupted or warped in this place.</p>
        <h4 id="chaotic-location-feature">FEATURE</h4>
        <Oracle oracleName="chaotic-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="chaotic-location-peril">PERIL</h4>
        <Oracle oracleName="chaotic-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="chaotic-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="chaotic-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="fortified-location">FORTIFIED LOCATION</h3>
        <p>Enemies defend this place against intruders.</p>
        <h4 id="fortified-location-feature">FEATURE</h4>
        <Oracle oracleName="fortified-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="fortified-location-peril">PERIL</h4>
        <Oracle oracleName="fortified-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="fortified-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="fortified-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="haunted-location">HAUNTED LOCATION</h3>
        <p>Restless spirits are bound to this place.</p>
        <h4 id="haunted-location-feature">FEATURE</h4>
        <Oracle oracleName="haunted-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="haunted-location-peril">PERIL</h4>
        <Oracle oracleName="haunted-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="haunted-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="haunted-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="infested-location">INFESTED LOCATION</h3>
        <p>Foul creatures have overrun this place.</p>
        <h4 id="infested-location-feature">FEATURE</h4>
        <Oracle oracleName="infested-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="infested-location-peril">PERIL</h4>
        <Oracle oracleName="infested-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="infested-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="infested-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="inhabited-location">INHABITED LOCATION</h3>
        <p>People have built a community in this place.</p>
        <h4 id="inhabited-location-feature">FEATURE</h4>
        <Oracle oracleName="inhabited-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="inhabited-location-peril">PERIL</h4>
        <Oracle oracleName="inhabited-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="inhabited-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="inhabited-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="mechanical-location">MECHANICAL LOCATION</h3>
        <p>Machines and technology hold sway in this place.</p>
        <h4 id="mechanical-location-feature">FEATURE</h4>
        <Oracle oracleName="mechanical-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="mechanical-location-peril">PERIL</h4>
        <Oracle oracleName="mechanical-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="mechanical-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="mechanical-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="ruined-location">RUINED LOCATION</h3>
        <p>Time, disaster, or war have ravaged this place.</p>
        <h4 id="ruined-location-feature">FEATURE</h4>
        <Oracle oracleName="ruined-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="ruined-location-peril">PERIL</h4>
        <Oracle oracleName="ruined-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="ruined-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="ruined-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>

        <br/>
        <hr/>
        <h3 id="sacred-location">SACRED LOCATION</h3>
        <p>Worshipers glorify strange powers in this place.</p>
        <h4 id="sacred-location-feature">FEATURE</h4>
        <Oracle oracleName="sacred-location-feature" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="sacred-location-peril">PERIL</h4>
        <Oracle oracleName="sacred-location-peril" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
        <h4 id="sacred-location-opportunity">OPPORTUNITY</h4>
        <Oracle oracleName="sacred-location-opportunity" oracleDatatable={planetOracleResults} oracleLogName={oracleLogName}/>
   
        <br/>
        <br/>

      </div>
    </Layout>
  );
}