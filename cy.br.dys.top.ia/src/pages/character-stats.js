import React, { useState, useEffect, Component } from "react"
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import Chart from 'chart.js/auto';
import { useTheme, Global, css } from '@emotion/react';

function CharacterStats() {
  const theme = useTheme();
  const windowGlobal = typeof window !== 'undefined' && window
  var activeTraits = windowGlobal ? windowGlobal.localStorage.getItem("activeTraits") : "";

  const [inputs, setInputs] = useState(() => {
    const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
    const savedCharacter = JSON.parse(savedCharacterStr)
    return savedCharacter || {
      name: "",
      xpCurrent: "0",
      xpTotal: "0",
      state: "inControl",
      grit: "5",
      psyche: "5",
      gear: "5",
      angleProgress: "1",
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
    // Traits 
    var traitsContainerEl = document.getElementById('traits-container');
    if (!activeTraits) {
      activeTraits = "NONE YET. Pick 3 in the <a href=\"/character-traits\">TRAITS PAGE</a>.";
    }
    traitsContainerEl.innerHTML = "Your current <a href=\"/character-traits\">TRAITS</a>:<br/>"+activeTraits;

    handleStatsChart();

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

  async function handleStatsChart() {
    const chartData = {
        labels: ['BRAIN', 'CHROME', 'EDGE', 'FLASH', 'SHADE'],
        datasets: [{
          data: [inputs.brain, inputs.chrome, inputs.edge, inputs.flash, inputs.shade],
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
                color: setAlpha(theme.colors.turquoise, "11"),
                lineWidth: 2,
                borderDash: [5, 5],
              },
              pointLabels: {
                display: true,
                color: setAlpha(theme.colors.turquoise, "88"),
                font: {
                  family: "Android101",
                  size: 15,
                },
              },
              ticks: {
                display: true,
                showLabelBackdrop: false,
                z: 1,
                color: setAlpha(theme.colors.turquoise, "22"),
                stepSize: 20,
                maxTicksLimit: 6,
                font: {
                  family: "EuroStyle",
                  size: 10,
                },
              },
              grid: {
                display: true,
                color: setAlpha(theme.colors.turquoise, "11"),
                circular: true,
                lineWidth: 1,
                font: {
                  family: "EuroStyle",
                },
              },
              suggestedMin: 0,
              suggestedMax: 100,
              min: 0,
              max: 100,
              animate: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleFont: {
              family: "Android101",
            },
            titleAlign: "center",
            bodyFont: {
              family: "EuroStyle",
              weight: "bold",
              size: 15,
            },
            bodyAlign: "center",
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
      statsChartObj.update();
    }
  }

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
            <div class="input-container">
              <input id="inControlInput" type="radio" name="state" value={inputs.inControl || "inControl"} onChange={handleChange} checked={inputs.state==="inControl"}/><label for="inControlInput"> IN CONTROL</label>
              <input id="inABadSpotInput" type="radio" name="state" value={inputs.inABadSpot || "inABadSpot"} onChange={handleChange} checked={inputs.state==="inABadSpot"}/><label for="inABadSpotInput"> IN A BAD SPOT</label>
            </div>
          </div>

          <div class="stats-container">
            <div class="stat-container">
              <div class="left-col">
                <label class="stat">BRAIN <input type="number" name="brain" value={inputs.brain || ""} onChange={handleChange} min="1" max="99" /></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">cunning and knowledge</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">CHROME <input type="number" name="chrome" value={inputs.chrome || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">strength and endurance</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">EDGE <input type="number" name="edge" value={inputs.edge || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">speed and precision</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">FLASH <input type="number" name="flash" value={inputs.flash || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">personality and empathy</span>
              </div>
            </div>

            <div class="stat-container">
              <div class="left-col">
                <label class="stat">SHADE <input type="number" name="shade" value={inputs.shade || ""} onChange={handleChange} min="1" max="99"/></label>
              </div>
              <div class="right-col">
                <span class="stat-desc">deception and stealth</span>
              </div>
            </div>
          </div>

          <div id="stats-chart-container">
            <canvas id="stats-chart"></canvas>
          </div>

          <div class="stat-bar" id="grit-stat-bar">
            <span class="title">GRIT</span>
            <input type="radio" name="grit" id="grit0" value={inputs.grit0 || "0"} onChange={handleChange} checked={inputs.grit==="0"}/><label for="grit0" class="stat-level-0">0</label>
            <input type="radio" name="grit" id="grit1" value={inputs.grit1 || "1"} onChange={handleChange} checked={inputs.grit==="1"}/><label for="grit1" class="stat-level-1">1</label>
            <input type="radio" name="grit" id="grit2" value={inputs.grit2 || "2"} onChange={handleChange} checked={inputs.grit==="2"}/><label for="grit2" class="stat-level-2">2</label>
            <input type="radio" name="grit" id="grit3" value={inputs.grit3 || "3"} onChange={handleChange} checked={inputs.grit==="3"}/><label for="grit3" class="stat-level-3">3</label>
            <input type="radio" name="grit" id="grit4" value={inputs.grit4 || "4"} onChange={handleChange} checked={inputs.grit==="4"}/><label for="grit4" class="stat-level-4">4</label>
            <input type="radio" name="grit" id="grit5" value={inputs.grit5 || "5"} onChange={handleChange} checked={inputs.grit==="5"}/><label for="grit5" class="stat-level-5">5</label>
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

          <div class="stat-bar" id="gear-stat-bar">
            <span class="title">GEAR</span>
            <input type="radio" name="gear" id="gear0" value={inputs.gear0 || "0"} onChange={handleChange} checked={inputs.gear==="0"}/><label for="gear0" class="stat-level-0">0</label>
            <input type="radio" name="gear" id="gear1" value={inputs.gear1 || "1"} onChange={handleChange} checked={inputs.gear==="1"}/><label for="gear1" class="stat-level-1">1</label>
            <input type="radio" name="gear" id="gear2" value={inputs.gear2 || "2"} onChange={handleChange} checked={inputs.gear==="2"}/><label for="gear2" class="stat-level-2">2</label>
            <input type="radio" name="gear" id="gear3" value={inputs.gear3 || "3"} onChange={handleChange} checked={inputs.gear==="3"}/><label for="gear3" class="stat-level-3">3</label>
            <input type="radio" name="gear" id="gear4" value={inputs.gear4 || "4"} onChange={handleChange} checked={inputs.gear==="4"}/><label for="gear4" class="stat-level-4">4</label>
            <input type="radio" name="gear" id="gear5" value={inputs.gear5 || "5"} onChange={handleChange} checked={inputs.gear==="5"}/><label for="gear5" class="stat-level-5">5</label>
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
                </div>
                <div class="col right-col">
                  <input id="angleInput4" type="radio" name="angle" value={inputs.angle4 || "Make'em Pay"} onChange={handleChange} checked={inputs.angle==="Make'em Pay"}/><label for="angleInput4"> Make'em Pay</label>
                  <input id="angleInput5" type="radio" name="angle" value={inputs.angle5 || "Look After Them"} onChange={handleChange} checked={inputs.angle==="Look After Them"}/><label for="angleInput5"> Look After Them</label>
                  <input id="angleInput6" type="radio" name="angle" value={inputs.angle6 || "Take A Stand"} onChange={handleChange} checked={inputs.angle==="Take A Stand"}/><label for="angleInput6"> Take A Stand</label>
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