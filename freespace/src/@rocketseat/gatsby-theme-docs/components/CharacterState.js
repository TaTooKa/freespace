import React from "react";

const CharacterState = () => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedCharacterStr = windowGlobal ? windowGlobal.localStorage.getItem("character") : "{}"
  const savedCharacter = JSON.parse(savedCharacterStr) || {}

  const characterState = savedCharacter.state || "inControl"

  var characterStateText = characterState == "inControl" ? "In Control" : "In A Bad Spot";
  var characterStateClass = characterState == "inControl" ? "in-control" : "in-a-bad-spot";

  return (
    <div class="character-state-container">
      <span class={`character-state ${characterStateClass}`}>You are <i>{characterStateText}</i></span>
    </div>
  )
};

export default CharacterState;