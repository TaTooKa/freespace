import React from 'react';
import { promptAffectingTraits, traits } from '/src/pages/character-traits.js';

const AffectingTraits = ({ promptName }) => {

  const windowGlobal = typeof window !== 'undefined' && window

  const savedTraitsStr = windowGlobal ? windowGlobal.localStorage.getItem("traits") : "{}"
  const savedTraits = JSON.parse(savedTraitsStr) || {}

  var affectingTraits = {};

  if (promptAffectingTraits[promptName] !== undefined) {
    promptAffectingTraits[promptName].forEach(traitKey => {
      if (savedTraits[traitKey] !== undefined && savedTraits[traitKey] == true) {
        affectingTraits[traitKey] = traits[traitKey];
      }
    });
  }

  if (Object.keys(affectingTraits).length > 0) {
    return (
      <div class="affecting_traits">
        <span class="descriptive_text" title="Some of your TRAITS reference this PROMPT under specific circumstances; check to see if they apply to the current situation.">Active <b>TRAITS</b> affecting this <b>PROMPT</b>: </span>
        {Object.entries(affectingTraits).map(([key, value], index) => (
            <span class="trait_link">{ index ? ', ' : ''}<a href={"/character-traits#" + key}>{value}</a></span>
          ))}
      </div>
    );
  } else {
    return null;
  }

};

export default AffectingTraits;