import React from 'react';

const LOG_MAX_LINES = 40;

const Oracle = ({oracleName, oracleDatatable, oracleLogName, combined=false, joined=false, template=false}) => {

  const textboxId = "oracle-"+oracleName+"-result";

  if ( combined ) { 
    var textboxClass = "oracle-result combined";
  } else if ( template ) {
    var textboxClass = "oracle-result template";
  } else {
    var textboxClass = "oracle-result";
  }
  const buttonId = "oracle-"+oracleName+"-button";

  const windowGlobal = typeof window !== 'undefined' && window

  const handleOnClick = (event) => {
    var desiredElementId = event.target.id.split("-").slice(0, -1).join("-").concat("-result"); // get button id and infer input result id
    const inputResult = document.getElementById(desiredElementId);
    var oracleResult  = "";

    var combineChar = " ";
    if ( joined ) {
      combineChar = "";
    }

    if ( inputResult.classList.contains("combined") ) {
      // Result is built from multiple subtables
      var result = [];
      oracleDatatable[desiredElementId].forEach((subTable) => {
        result.push(subTable[Math.floor(Math.random()*subTable.length)]);
      });
      oracleResult = result.join(combineChar);

    } else if ( inputResult.classList.contains("template") ) {
      // Result is built using templates
      var template = oracleDatatable[desiredElementId].template[Math.floor(Math.random()*oracleDatatable[desiredElementId].template.length)];
      var params = {};

      for (const [key, value] of Object.entries(oracleDatatable[desiredElementId].tables)) {
        params[key] = oracleDatatable[desiredElementId].tables[key][Math.floor(Math.random()*oracleDatatable[desiredElementId].tables[key].length)];
      }
      var renderedText = renderTemplate(template, params);
      oracleResult = renderedText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      
    } else {
      // Result is built from a single table
      oracleResult = oracleDatatable[desiredElementId][Math.floor(Math.random()*oracleDatatable[desiredElementId].length)];
    }

    inputResult.classList.add("toggled");

    /* Oracle LOG */
    const titleElement = inputResult.parentElement.closest('div.oracle-container').previousElementSibling;
    const oraclesLog = document.getElementById('oracles-log');
    const log = "<span class=\"log-entry\"><b>"+titleElement.innerHTML+":</b> "+oracleResult+"</span><br/>";
    oraclesLog.innerHTML += log;
    oraclesLog.scrollTop = oraclesLog.scrollHeight;
    trimLog();
    windowGlobal.localStorage.setItem(oracleLogName, oraclesLog.innerHTML);

    setTimeout(()=> {
      inputResult.classList.remove("toggled");
      inputResult.innerHTML = oracleResult;
    }, 500);

  }

  const trimLog = () => {
    const oraclesLog = document.getElementById('oracles-log');
    while ( oraclesLog.childNodes.length > LOG_MAX_LINES ) {
      // because of <br> elements, log entry limit is half of LOG_MAX_LINES
      oraclesLog.removeChild(oraclesLog.firstChild);
    }
  }

  const renderTemplate = (string, obj) => {
    var s = string;
    for(var prop in obj) {
      s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
    }
    return s;
  }

  return (
    <div class="oracle-container">
      <span role="textbox" id={textboxId} class={textboxClass}></span>
      <button type="button" id={buttonId} class="randomize-button" onClick={handleOnClick}></button>
    </div>
  )
};

export default Oracle;