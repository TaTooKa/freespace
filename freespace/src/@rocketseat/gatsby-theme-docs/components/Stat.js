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
      statValue = parseInt(savedCharacter.intellect);
      break;
    case 'PHYSIQUE':
      statValue = parseInt(savedCharacter.physique);
      break;
    case 'DEXTERITY':
      statValue = parseInt(savedCharacter.dexterity);
      break;
    case 'RESOLVE':
      statValue = parseInt(savedCharacter.resolve);
      break;
    case 'SUBTERFUGE':
      statValue = parseInt(savedCharacter.subterfuge);
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