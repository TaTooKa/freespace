import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import Chart from 'chart.js/auto';
import { useTheme, Global, css } from '@emotion/react';

function CharacterStats() {
  const theme = useTheme();
  const windowGlobal = typeof window !== 'undefined' && window
  var activeTraits = windowGlobal ? windowGlobal.localStorage.getItem("activeTraits") : "";

  const [randHeartbeatPoints, setRandHeartbeatPoints] = useState(0);

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {
      name: "",
      xpCurrent: "0",
      xpTotal: "0",
      state: "inControl",
      health: "5",
      psyche: "5",
      resources: "5",
      angleProgress: "1",
      intellect: "1",
      physique: "1",
      dexterity: "1",
      resolve: "1",
      subterfuge: "1",
    }
  })

  const handleChange = (event) => {
    if ( event.target.type == "number" ) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => saveCharacter(inputs), 500);
    const timeOutId2 = setTimeout(() => handleStatsChart(), 100);
    // Traits 
    var traitsContainerEl = document.getElementById('traits-container');
    if (!activeTraits) {
      activeTraits = "NONE YET. Pick 3 in the <a href=\"/character-traits\">TRAITS PAGE</a>.";
    }
    traitsContainerEl.innerHTML = "Your current <a href=\"/character-traits\">TRAITS</a>:<br/>"+activeTraits;

    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const saveCharacter = () => {
    if ( windowGlobal ) {
      windowGlobal.localStorage.setItem("character", JSON.stringify(inputs))
    }
  }

  function setAlpha(hexString, alpha) {
    return hexString.slice(0, -2) + alpha;
  }

  function getHighestStatValue(inputs) {
    let stats = [inputs.physique, inputs.dexterity, inputs.subterfuge, inputs.resolve, inputs.intellect].map(Number);
    return Math.max(...stats);
  }

  async function handleStatsChart() {
    const fontFamilyAndroid = "'Android101', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    const fontFamilyEuroStyle = "'EuroStyle', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    var highestStatValue = getHighestStatValue(inputs);
    const chartData = {
        labels: ['PHYSIQUE '+inputs.physique, 'DEXTERITY '+inputs.dexterity, 'SUBTERFUGE '+inputs.subterfuge, 'RESOLVE '+inputs.resolve, 'INTELLECT '+inputs.intellect],
        datasets: [{
          data: [inputs.physique, inputs.dexterity, inputs.subterfuge, inputs.resolve, inputs.intellect],
          borderWidth: 1,
          borderColor: theme.colors.fuchsia,
          backgroundColor: setAlpha(theme.colors.fuchsia, "33"),
          pointBackgroundColor: setAlpha(theme.colors.turquoise, "33"),
          pointBorderColor: theme.colors.turquoise,
          pointStyle: "rectRounded",
        }]
      };
      const chartOptions = {
        scales: {
          r: {
              angleLines: {
                display: true,
                color: setAlpha(theme.colors.turquoise, "22"),
                lineWidth: 2,
                borderDash: [5, 5],
              },
              pointLabels: {
                display: true,
                color: setAlpha(theme.colors.turquoise, "88"),
                font: {
                  family: fontFamilyAndroid,
                  size: 10,
                },
              },
              ticks: {
                display: false,
                showLabelBackdrop: false,
                z: 1,
                color: setAlpha(theme.colors.turquoise, "22"),
                stepSize: 20,
                maxTicksLimit: 6,
                font: {
                  family: fontFamilyEuroStyle,
                  size: 10,
                },
              },
              grid: {
                display: true,
                color: setAlpha(theme.colors.turquoise, "11"),
                circular: true,
                lineWidth: 1,
                font: {
                  family: fontFamilyEuroStyle,
                },
              },
              //suggestedMin: 0,
              //suggestedMax: 100,
              min: 5,
              max: highestStatValue+5,
              animate: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        animation: false,
        maintainAspectRatio: false,
      };

    const statsChartCanvas = document.getElementById("stats-chart");

    const statsChartObj = Chart.getChart("stats-chart");
    if (!statsChartObj) {
      const statsChartObj = new Chart(statsChartCanvas, {
        type: 'radar',
        data: chartData,
        options: chartOptions,
      });
    } else {
      statsChartObj.data = chartData;
      statsChartObj.options = chartOptions;
      statsChartObj.update();
    }
  }

  // Heartbeat Effect
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRandHeartbeatPoints(randHeartbeatPoints => " 0, \
             45 130, \
              \
             45 136, \
              "+getRandomInt(20, 40)+" 142, \
              45 149, \
              \
              45 154, \
              \
              "+getRandomInt(55, 80)+" 160, \
              "+getRandomInt(1, 30)+"  167, \
              "+getRandomInt(55, 80)+" 174, \
              \
              45 182, \
              \
              45 187, \
              "+getRandomInt(20, 40)+" 193, \
              45 337, \
              \
              45");
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="CHARACTER STATS">
      <Seo title="Character Stats" />
      <form class="character-stats">

        <div class="left-side">

          <div class="first-row">
            <div class="left-col">
              <label>NAME / ALIAS <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/></label>
            </div>
            <div class="right-col">
                <span class="xp-title">XP </span><span class="curtot">current / total</span>
                <div class="input-container">
                  <input type="number" id="xpCurrent" name="xpCurrent" value={inputs.xpCurrent || ""} onChange={handleChange} />
                  <input type="number" id="xpTotal" name="xpTotal" value={inputs.xpTotal || ""} onChange={handleChange} />
                </div>
            </div>
          </div>

          <div class="state-container">

            <div class="heart-rate">
              <svg version="1.0"  x="0px" y="0px" width="350px" height="73px" viewBox="0 0 350 73" enable-background="new 0 0 350 73">
                <polyline fill="none" stroke={inputs.state==="inControl" ? setAlpha(theme.colors.turquoise, "88") : setAlpha(theme.colors.fuchsia, "88")} stroke-width="2" stroke-miterlimit="10" points={randHeartbeatPoints} />
              </svg>
              <div class="fade-in"></div>
              <div class="fade-out"></div>
            </div>

            <div class="input-container">
              <input id="inControlInput" type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/><label for="inControlInput"> IN CONTROL</label>
              <input id="inABadSpotInput" type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/><label for="inABadSpotInput"> IN A BAD SPOT</label>
            </div>
          </div>

          <div class="stats-container">

            <div class="stat-container">
              <div class="label-n-input-container">
                <div class="stat-label">INTELLECT</div>
                <div class="stat-input"><input type="text" name="intellect" value={inputs.intellect || ""} onChange={handleChange} inputmode="numeric"/></div>
              </div>
              <div class="stat-desc-container"><span class="stat-desc">cunning and knowledge</span></div>
            </div>

            <div class="stat-container">
              <div class="label-n-input-container">
                <div class="stat-label">PHYSIQUE</div>
                <div class="stat-input"><input type="text" name="physique" value={inputs.physique || ""} onChange={handleChange} inputmode="numeric"/></div>
              </div>
              <div class="stat-desc-container"><span class="stat-desc">strength and endurance</span></div>
            </div>

            <div class="stat-container">
              <div class="label-n-input-container">
                <div class="stat-label">DEXTERITY</div>
                <div class="stat-input"><input type="text" name="dexterity" value={inputs.dexterity || ""} onChange={handleChange} inputmode="numeric"/></div>
              </div>
              <div class="stat-desc-container"><span class="stat-desc">speed and precision</span></div>
            </div>

            <div class="stat-container">
              <div class="label-n-input-container">
                <div class="stat-label">RESOLVE</div>
                <div class="stat-input"><input type="text" name="resolve" value={inputs.resolve || ""} onChange={handleChange} inputmode="numeric"/></div>
              </div>
              <div class="stat-desc-container"><span class="stat-desc">empathy and willpower</span></div>
            </div>

            <div class="stat-container">
              <div class="label-n-input-container">
                <div class="stat-label">SUBTERFUGE</div>
                <div class="stat-input"><input type="text" name="subterfuge" value={inputs.subterfuge || ""} onChange={handleChange} inputmode="numeric"/></div>
              </div>
              <div class="stat-desc-container"><span class="stat-desc">deception and stealth</span></div>
            </div>

          </div>

          <div id="stats-chart-container">
            <canvas id="stats-chart"></canvas>
          </div>

          <div class="stat-bar" id="health-stat-bar">
            <span class="title">HEALTH</span>
            <input type="radio" name="health" id="health0" value={inputs.health0 || "0"} onChange={handleChange} checked={inputs.health==="0"}/><label for="health0" class="stat-level-0">0</label>
            <input type="radio" name="health" id="health1" value={inputs.health1 || "1"} onChange={handleChange} checked={inputs.health==="1"}/><label for="health1" class="stat-level-1">1</label>
            <input type="radio" name="health" id="health2" value={inputs.health2 || "2"} onChange={handleChange} checked={inputs.health==="2"}/><label for="health2" class="stat-level-2">2</label>
            <input type="radio" name="health" id="health3" value={inputs.health3 || "3"} onChange={handleChange} checked={inputs.health==="3"}/><label for="health3" class="stat-level-3">3</label>
            <input type="radio" name="health" id="health4" value={inputs.health4 || "4"} onChange={handleChange} checked={inputs.health==="4"}/><label for="health4" class="stat-level-4">4</label>
            <input type="radio" name="health" id="health5" value={inputs.health5 || "5"} onChange={handleChange} checked={inputs.health==="5"}/><label for="health5" class="stat-level-5">5</label>
          </div>

          <div class="stat-bar" id="psyche-stat-bar">
            <span class="title">PSYCHE</span>
            <input type="radio" name="psyche" id="psyche0" value={inputs.psyche0 || "0"} onChange={handleChange} checked={inputs.psyche==="0"}/><label for="psyche0" class="stat-level-0">0</label>
            <input type="radio" name="psyche" id="psyche1" value={inputs.psyche1 || "1"} onChange={handleChange} checked={inputs.psyche==="1"}/><label for="psyche1" class="stat-level-1">1</label>
            <input type="radio" name="psyche" id="psyche2" value={inputs.psyche2 || "2"} onChange={handleChange} checked={inputs.psyche==="2"}/><label for="psyche2" class="stat-level-2">2</label>
            <input type="radio" name="psyche" id="psyche3" value={inputs.psyche3 || "3"} onChange={handleChange} checked={inputs.psyche==="3"}/><label for="psyche3" class="stat-level-3">3</label>
            <input type="radio" name="psyche" id="psyche4" value={inputs.psyche4 || "4"} onChange={handleChange} checked={inputs.psyche==="4"}/><label for="psyche4" class="stat-level-4">4</label>
            <input type="radio" name="psyche" id="psyche5" value={inputs.psyche5 || "5"} onChange={handleChange} checked={inputs.psyche==="5"}/><label for="psyche5" class="stat-level-5">5</label>
          </div>

          <div class="stat-bar" id="resources-stat-bar">
            <span class="title">RESOURCES</span>
            <input type="radio" name="resources" id="resources0" value={inputs.resources0 || "0"} onChange={handleChange} checked={inputs.resources==="0"}/><label for="resources0" class="stat-level-0">0</label>
            <input type="radio" name="resources" id="resources1" value={inputs.resources1 || "1"} onChange={handleChange} checked={inputs.resources==="1"}/><label for="resources1" class="stat-level-1">1</label>
            <input type="radio" name="resources" id="resources2" value={inputs.resources2 || "2"} onChange={handleChange} checked={inputs.resources==="2"}/><label for="resources2" class="stat-level-2">2</label>
            <input type="radio" name="resources" id="resources3" value={inputs.resources3 || "3"} onChange={handleChange} checked={inputs.resources==="3"}/><label for="resources3" class="stat-level-3">3</label>
            <input type="radio" name="resources" id="resources4" value={inputs.resources4 || "4"} onChange={handleChange} checked={inputs.resources==="4"}/><label for="resources4" class="stat-level-4">4</label>
            <input type="radio" name="resources" id="resources5" value={inputs.resources5 || "5"} onChange={handleChange} checked={inputs.resources==="5"}/><label for="resources5" class="stat-level-5">5</label>
          </div>

        </div>

        <div id="traits-container"></div>

        <div class="right-side">

          <div class="angle-container">
            <div class="angle-header">
              <span class="angle-title">ANGLE</span>
              <label class="angle-progress">PROGRESS <input type="number" name="angleProgress" value={inputs.angleProgress || ""} onChange={handleChange} min="1" max="99"/></label>
            </div>
            <div class="angle-options">
              <span>Choose One:</span>
              <div class="columns">
                <div class="col left-col">
                  <input id="angleInput1" type="radio" name="angle" value={inputs.angle1 || "Get Out"} onChange={handleChange} checked={inputs.angle==="Get Out"}/><label for="angleInput1"> Get Out</label>
                  <input id="angleInput2" type="radio" name="angle" value={inputs.angle2 || "Upgrade Life"} onChange={handleChange} checked={inputs.angle==="Upgrade Life"}/><label for="angleInput2"> Upgrade Life</label>
                  <input id="angleInput3" type="radio" name="angle" value={inputs.angle3 || "Learn The Truth"} onChange={handleChange} checked={inputs.angle==="Learn The Truth"}/><label for="angleInput3"> Learn The Truth</label>
                  <input id="angleInput4" type="radio" name="angle" value={inputs.angle4 || "Make'em Pay"} onChange={handleChange} checked={inputs.angle==="Make'em Pay"}/><label for="angleInput4"> Make'em Pay</label>
                </div>
                <div class="col right-col">
                  <input id="angleInput5" type="radio" name="angle" value={inputs.angle5 || "Look After Them"} onChange={handleChange} checked={inputs.angle==="Look After Them"}/><label for="angleInput5"> Look After Them</label>
                  <input id="angleInput6" type="radio" name="angle" value={inputs.angle6 || "Take A Stand"} onChange={handleChange} checked={inputs.angle==="Take A Stand"}/><label for="angleInput6"> Take A Stand</label>
                  <input id="angleInput7" type="radio" name="angle" value={inputs.angle7 || "Watch It All Burn"} onChange={handleChange} checked={inputs.angle==="Watch It All Burn"}/><label for="angleInput7"> Watch It All Burn</label>
                  <input id="angleInput8" type="radio" name="angle" value={inputs.angle8 || "Leave A Mark"} onChange={handleChange} checked={inputs.angle==="Leave A Mark"}/><label for="angleInput8"> Leave A Mark</label>
                </div>
              </div>
            </div>
          </div>

          <div class="notes-container">
            <label class="equipment_notes">EQUIPMENT + NOTES <textarea name="notes" value={inputs.notes || ""} onChange={handleChange} /></label>
          </div>

        </div>

        
      </form>
    </Layout>
  )
}

export default CharacterStats