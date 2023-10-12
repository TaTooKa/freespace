import React, { useEffect } from 'react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import miscOracleResults from '/src/datatables/misc-oracles'
import Oracle from '/src/@rocketseat/gatsby-theme-docs/components/Oracle'

export default function MiscOracles() {
  const headings = [
    {depth: 2, value: "COMBAT ACTION"},
    {depth: 2, value: "NEWS FEED"},
    {depth: 2, value: "AR DISPLAY"},
    {depth: 3, value: "TYPE"},
    {depth: 3, value: "AESTHETIC"},
    {depth: 3, value: "STYLE"},
    {depth: 2, value: "BUG IN THE SYSTEM"},
    {depth: 2, value: "MUSIC GENRE / SUBCULTURE STYLE"},
    {depth: 2, value: "SOCIAL MEDIA POST CONTENT"},
    {depth: 2, value: "HOT NEW WEEKLY FAD"},
    {depth: 2, value: "VID SHOW"},

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
        <br/>
        <blockquote><p>Use this oracle when you need ideas to visualize beats of combat or to generate descriptive situations in an ongoing battle other than "attack" or "defend".</p></blockquote>
        <br/>

        <h2 id="news-feed">NEWS FEED</h2>
        <Oracle oracleName="news-feed" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="ar-display">AR DISPLAY</h2>

        <h3 id="type">AR DISPLAY - TYPE</h3>
        <Oracle oracleName="ar-display-type" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="aesthetic">AR DISPLAY - AESTHETIC</h3>
        <Oracle oracleName="ar-display-aesthetic" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>

        <h3 id="style">AR DISPLAY - STYLE</h3>
        <Oracle oracleName="ar-display-style" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="bug-in-the-system">BUG IN THE SYSTEM</h2>
        <Oracle oracleName="bug-in-the-system" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <blockquote><p>Use this oracle to generate errors or mishaps in a malfunctioning system or device, or when a netrunner makes a mistake in a hacking attempt.</p></blockquote>
        <br/>

        <h2 id="music-genre--subculture-style">MUSIC GENRE / SUBCULTURE STYLE</h2>
        <Oracle oracleName="music-subculture" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="social-media-post-content">SOCIAL MEDIA POST CONTENT</h2>
        <Oracle oracleName="social-media" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="hot-new-weekly-fad">HOT NEW WEEKLY FAD</h2>
        <Oracle oracleName="hot-new-fad" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>

        <h2 id="vid-show">VID SHOW</h2>
        <Oracle oracleName="vid-show" oracleDatatable={miscOracleResults} oracleLogName={oracleLogName}/>
        <br/>


        <br/>
        <br/>
        <br/>

      </div>
    </Layout>
  );
}