import React from 'react';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const Stat = ({name}) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
  const savedCharacter = JSON.parse(savedCharacterStr) || {}

  var statValue = 1;

  switch (name) {
    case 'BRAIN':
      statValue = savedCharacter.brain;
      break;
    case 'CHROME':
      statValue = savedCharacter.chrome;
      break;
    case 'EDGE':
      statValue = savedCharacter.edge;
      break;
    case 'FLASH':
      statValue = savedCharacter.flash;
      break;
    case 'SHADE':
      statValue = savedCharacter.shade;
      break;
  }

  if ( !isNumeric(statValue) ) {
    statValue = "?";
  }
  
  return (
    <span>
      <span class="stat">{name}</span>
      <span class="stat-value" title="this value is defined in the character STATS page.">({statValue})</span>
    </span>
  )
};

export default Stat;