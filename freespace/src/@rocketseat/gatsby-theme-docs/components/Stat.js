import React from 'react';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const Stat = ({name}) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
  const savedCharacter = JSON.parse(savedCharacterStr) || {}

  var statValue = 1;
  var classes = "stat-value";

  switch (name) {
    case 'INTELLECT':
      statValue = savedCharacter.intellect;
      break;
    case 'PHYSIQUE':
      statValue = savedCharacter.physique;
      break;
    case 'DEXTERITY':
      statValue = savedCharacter.dexterity;
      break;
    case 'CHARISMA':
      statValue = savedCharacter.charisma;
      break;
    case 'SUBTERFUGE':
      statValue = savedCharacter.subterfuge;
      break;
  }

  if ( !isNumeric(statValue) ) {
    statValue = "?";
  }

  if (statValue <= 30) {
      classes+=" bad";
  } else if (statValue > 30 && statValue < 60) {
      classes+=" normal";
  } else if (statValue >= 60) {
      classes+=" good";
  }
  
  return (
    <span>
      <span class="stat">{name}</span>
      <span class={classes} title="this value is defined in the character STATS page.">({statValue}%)</span>
    </span>
  )
};

export default Stat;