import React from 'react';

const Challenge = ({challengeIndex, inputs, setInputs}) => {

  const chDescId = "chDesc"+challengeIndex;
  const chProgressId = "chProgress"+challengeIndex; 
  const chStateId = "chState"+challengeIndex;
  const chRankName = "chRank"+challengeIndex;

  const handleChange = (event) => {
    if ( event.target.type == "checkbox" ) {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
    } else if ( event.target.type == "number" ) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } else {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
  }

  return (
    <div class="challenge-container">

      <div class="challenge-inputs">
        <div class="description-container">
          <label for={chDescId}>CHALLENGE DESCRIPTION</label>
          <input id={chDescId} type="text" name={chDescId} class="description" value={inputs[chDescId]} onChange={handleChange}/>
        </div>
        <div class="progress-container">
          <label for={chProgressId}>PROGRESS</label>
          <input id={chProgressId} type="number" name={chProgressId} class="progress" value={inputs[chProgressId]? inputs[chProgressId]: 1} onChange={handleChange} min="1" max="99"/>
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-outer">
          <div class="progress-bar-inner" style={{width: inputs[chProgressId]? inputs[chProgressId]: 1+"%"}}></div>
        </div>
      </div>

      <div class="ranks-container">
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_1"} value={inputs[chRankName+"_1"] || "1"} onChange={handleChange} checked={inputs[chRankName]==="1"}/>
          <label for={chRankName+"_1"}><span class="rank-type">SHORT:</span> +30%; 2XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_2"} value={inputs[chRankName+"_2"] || "2"} onChange={handleChange} checked={inputs[chRankName]==="2"}/>
          <label for={chRankName+"_2"}><span class="rank-type">MEDIUM:</span> +20%; 5XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_3"} value={inputs[chRankName+"_3"] || "3"} onChange={handleChange} checked={inputs[chRankName]==="3"}/>
          <label for={chRankName+"_3"}><span class="rank-type">LONG:</span> +10%; 10XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_4"} value={inputs[chRankName+"_4"] || "4"} onChange={handleChange} checked={inputs[chRankName]==="4"}/>
          <label for={chRankName+"_4"}><span class="rank-type">EXTREME:</span> +5%; 20XP</label>
        </div>
        <div class="rank-button">
          <input type="radio" name={chRankName} id={chRankName+"_5"} value={inputs[chRankName+"_5"] || "5"} onChange={handleChange} checked={inputs[chRankName]==="5"}/>
          <label for={chRankName+"_5"}><span class="rank-type">EPIC:</span> +2%; 50XP</label>
        </div>
      </div>

      <div class="state-buttons-container">
        <div class="state-button state-button-active">
          <input type="radio" name={chStateId} id={chStateId+"_1"} value={inputs[chStateId+"_1"] || "1"} onChange={handleChange} checked={inputs[chStateId]==="1"}/>
          <label for={chStateId+"_1"}><span class="rank-state-active">ACTIVE</span></label>
        </div>
        <div class="state-button state-button-fulfilled">
          <input type="radio" name={chStateId} id={chStateId+"_2"} value={inputs[chStateId+"_2"] || "2"} onChange={handleChange} checked={inputs[chStateId]==="2"}/>
          <label for={chStateId+"_2"}><span class="rank-state-fulfilled">FULFILLED</span></label>
        </div>
        <div class="state-button state-button-failed">
          <input type="radio" name={chStateId} id={chStateId+"_3"} value={inputs[chStateId+"_3"] || "3"} onChange={handleChange} checked={inputs[chStateId]==="3"}/>
          <label for={chStateId+"_3"}><span class="rank-state-failed">FAILED</span></label>
        </div>
      </div>

    </div>
  )
};

export default Challenge;