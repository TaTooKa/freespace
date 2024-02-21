import React, {useEffect} from 'react';
import reactTriggerChange from 'react-trigger-change';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';

const Challenge = ({challenge, index, challenges, setChallenges}) => {

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const chContainerId = "challenge-container-"+index;
  const chDescId = "chDesc"+index;
  const chProgressId = "chProgress"+index; 
  const chRankName = "chRank"+index;
  const chStateName = "chState"+index;
  var makeProgressButtonId = "makeProgressButton"+index;
  var revertProgressButtonId = "revertProgressButton"+index;
  var minimized = challenge["minimized"];
  var classes = "challenge-container challenge-indent-"+challenge['indent'];
  classes += minimized ? " minimized" : "";
  classes += " state-" + challenge['state'];
  var challengeDescription = challenge['state'] + " challenge";

  useEffect(() => {
    toggleBlockControls(challenge['state']);
  }, [challenges]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const key = target.name;

    let tempChallenges = [...challenges];
    tempChallenges[index][key] = value;
    setChallenges(tempChallenges);

    if ( target.name === "state" ) {
      toggleBlockControls(value);
    }
  }

  const makeProgress = (event, currentprogress, currentrank) => {
    event.preventDefault();

    var newProgress = null;
    var numberChange = 0;

    switch (currentrank) {
      case 'short':
        numberChange = 30;
        break;
      case 'medium':
        numberChange = 20;
        break;
      case 'long':
        numberChange = 10;
        break;
      case 'extreme':
        numberChange = 5;
        break;
      case 'epic':
        numberChange = 2;
        break;
    }

    newProgress = currentprogress + numberChange;
    spawnFloatingNumber(numberChange);

    if ( newProgress > 99 ) {
      newProgress = 99;
    }

    var buttonEl = document.getElementById(makeProgressButtonId);
    buttonEl.setAttribute("currentprogress", newProgress);

    var progressFieldEl = document.getElementById(chProgressId);
    progressFieldEl.value = newProgress;

    reactTriggerChange(progressFieldEl);
  }

  const revertProgress = (event, currentprogress, currentrank) => {
    event.preventDefault();

    var newProgress = null;
    var numberChange = 0;

    switch (currentrank) {
      case 'short':
        numberChange = -30;
        break;
      case 'medium':
        numberChange = -20;
        break;
      case 'long':
        numberChange = -10;
        break;
      case 'extreme':
        numberChange = -5;
        break;
      case 'epic':
        numberChange = -2;
        break;
    }

    newProgress = currentprogress + numberChange;
    spawnFloatingNumber(numberChange);

    if ( newProgress < 1 ) {
      newProgress = 1;
    }

    var buttonEl = document.getElementById(makeProgressButtonId);
    buttonEl.setAttribute("currentprogress", newProgress);

    var progressFieldEl = document.getElementById(chProgressId);
    progressFieldEl.value = newProgress;

    reactTriggerChange(progressFieldEl);
  }

  async function spawnFloatingNumber(number) {
    const challengeContainerEl = document.getElementById(chContainerId);
    const progressBarEl = challengeContainerEl.querySelectorAll('.progress-bar-inner')[0];
    const progressBarRect = progressBarEl.getBoundingClientRect();

    const topPos = progressBarRect.top + window.scrollY - 10;
    const leftPos = progressBarRect.right;

    const text = number < 0 ? `${number}%` : `+${number}%`; 
    const color = number < 0 ? "#ff0096ff" : "#0cffe1ff";

    const floatingNumberContainer = document.createElement("div");
    floatingNumberContainer.classList.add('floating-number-container');
    const floatingNumber = document.createTextNode(text);
    floatingNumberContainer.appendChild(floatingNumber);

    floatingNumberContainer.style.position = 'absolute';
    floatingNumberContainer.style.top = `${topPos}px`;
    floatingNumberContainer.style.left = `${leftPos}px`;
    floatingNumberContainer.style.color = color;

    document.body.appendChild(floatingNumberContainer);

    await delay(1000);
    floatingNumberContainer.remove();
  }

  const minimizeToggle = () => {
    let tempChallenges = [...challenges];
    tempChallenges[index]["minimized"] = minimized ? false : true;
    setChallenges(tempChallenges);
  }

  async function moveChallengeUp() {
    if ( index > 0 ) {
      hideWhileMoving(index-1, "up");
      await delay(250);
      let tempChallenges = [...challenges];
      [tempChallenges[index], tempChallenges[index-1]] = [tempChallenges[index-1], tempChallenges[index]];
      setChallenges(tempChallenges);
    }
  }

  async function moveChallengeDown() {
    if ( index < challenges.length-1 ) {
      hideWhileMoving(index+1, "down");
      await delay(250);
      let tempChallenges = [...challenges];
      [tempChallenges[index], tempChallenges[index+1]] = [tempChallenges[index+1], tempChallenges[index]];
      setChallenges(tempChallenges);
    }
  }

  async function hideWhileMoving(otherIndex, direction) {
    var movement = direction === "up" ? -100 : 100;
    var challengeEl = document.getElementById(chContainerId);
    var otherChallengeEl = document.getElementById("challenge-container-"+otherIndex);
    var challengeElorigMarginLeft = challengeEl.style.marginLeft;
    var otherChallengeElorigMarginLeft = otherChallengeEl.style.marginLeft;
    // challengeEl.style.opacity = 0;
    challengeEl.style.transform = "translate(0, "+movement+"px)";
    challengeEl.style.filter = "blur(25px) brightness(0)";
    challengeEl.style.marginLeft = "0";
    // otherChallengeEl.style.opacity = 0;
    otherChallengeEl.style.transform = "translate(0, "+(-movement)+"px)";
    otherChallengeEl.style.filter = "blur(25px) brightness(0)";
    otherChallengeEl.style.marginLeft = "0";
    await delay(700);
    // challengeEl.style.opacity = 1;
    challengeEl.style.transform = "translate(0, 0)";
    challengeEl.style.filter = "none";
    challengeEl.style.marginLeft = challengeElorigMarginLeft;
    // otherChallengeEl.style.opacity = 1;
    otherChallengeEl.style.transform = "translate(0, 0)";
    otherChallengeEl.style.filter = "none";
    otherChallengeEl.style.marginLeft = otherChallengeElorigMarginLeft;
  }

  const indentChallengeLeft = () => {
    if ( challenge['indent'] > 0 ) {
      let tempChallenges = [...challenges];
      tempChallenges[index]['indent'] -= 1;
      setChallenges(tempChallenges);
    }
  }

  const indentChallengeRight = () => {
    if ( challenge['indent'] < 2 ) {
      let tempChallenges = [...challenges];
      tempChallenges[index]['indent'] += 1;
      setChallenges(tempChallenges);
    }
  }

  async function deleteChallenge() {
    removeChallengeAnimation();
    let tempChallenges = [...challenges];
    tempChallenges.splice(index, 1);
    setChallenges(tempChallenges);
  }

  async function removeChallengeAnimation() {
    var challengeFormEl = document.getElementById("challenge-form");
    var challengeContainerEl = document.getElementById("challenge-container-"+index);
    var containerHeight = challengeContainerEl.getBoundingClientRect().height;
    var animEl = document.createElement("div");
    animEl.classList.add("challenge-deleted-anim");
    animEl.style.height = Math.round(containerHeight)+"px";

    challengeFormEl.insertBefore(animEl, challengeContainerEl);
    challengeContainerEl.style.border = "1px solid red !important";
    var deletingTextEl = document.createElement("span");
    deletingTextEl.innerText = "DELETING ...";
    animEl.appendChild(deletingTextEl);

    await delay(300);
    animEl.classList.add("phase1");
    await delay(300);
    animEl.classList.add("phase2");
    animEl.classList.remove("phase1");
    await delay(300);
    animEl.classList.add("phase3");
    animEl.classList.remove("phase2");
    await delay(300);
    animEl.classList.add("phase4");
    animEl.classList.remove("phase3");
    await delay(300);
    animEl.remove();
  }

  const toggleBlockControls = (state) => {
    var progressInputEl = document.getElementById(chProgressId);
    var makeProgressButtonEl = document.getElementById('makeProgressButton'+index);
    var revertProgressButtonEl = document.getElementById('revertProgressButton'+index);
    var rankSelectEl = document.getElementById(chRankName);

    if ( state === "active" ) {
      makeProgressButtonEl.disabled = false;
      revertProgressButtonEl.disabled = false;
      rankSelectEl.disabled = false;
      progressInputEl.disabled = false;
    } else {
      makeProgressButtonEl.disabled = true;
      revertProgressButtonEl.disabled = true;
      rankSelectEl.disabled = true;
      progressInputEl.disabled = true;
    }

  }

  return (
    <div class={classes} id={chContainerId}>

      <div class="challenge-inputs">

        <div class="minimize-button">
          <IconButton onClick={minimizeToggle} class="button" aria-label="minimize-button" component="span">
            {minimized && <UnfoldMoreIcon/> || <UnfoldLessIcon/>}
          </IconButton>
        </div>

        <div class="description-container">
          <label for={chDescId}>{challengeDescription}</label>
          <input id={chDescId} type="text" name="name" class="description" value={challenge['name']} onChange={handleChange} placeholder='CHALLENGE DESCRIPTION'/>
        </div>

        <div class="progress-container">
          <label for={chProgressId}>PROGRESS</label>
          <input id={chProgressId} type="number" name="progress" class="progress" value={challenge['progress']} onChange={handleChange} min="1" max="99"/>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar-outer">
            <div class="progress-bar-inner" style={{width: challenge['progress']+"%"}}></div>
          </div>
        </div>

      </div>

      <div class="challenge-controls">

        <div class="make-progress-container">
          <button class="progress-button make-progress-button" id={makeProgressButtonId} onClick={event => makeProgress(event, parseInt(challenge['progress']), challenge['rank'])}>MAKE PROGRESS</button>
          <button class="progress-button revert-progress-button" id={revertProgressButtonId} onClick={event => revertProgress(event, parseInt(challenge['progress']), challenge['rank'])}>REVERT</button>
        </div>

        <div class="selectors-container">

          <div class="ranks-container">
            <span class="rank-label">RANK:</span>
            <select name="rank" id={chRankName} onChange={handleChange}>
              <option value="short" selected={challenge['rank']==="short"} style={{fontFamily: "sans-serif"}}>SHORT: +30%; 2XP</option>
              <option value="medium" selected={challenge['rank']==="medium"} style={{fontFamily: "sans-serif"}}>MEDIUM: +20%; 5XP</option>
              <option value="long" selected={challenge['rank']==="long"} style={{fontFamily: "sans-serif"}}>LONG: +10%; 10XP</option>
              <option value="extreme" selected={challenge['rank']==="extreme"} style={{fontFamily: "sans-serif"}}>EXTREME: +5%; 20XP</option>
              <option value="epic" selected={challenge['rank']==="epic"} style={{fontFamily: "sans-serif"}}>EPIC: +2%; 50XP</option>
            </select>
          </div>

          <div class="state-container">
            <span class="state-label">STATE:</span>
            <select name="state" id={chStateName} onChange={handleChange}>
              <option value="active" selected={challenge['state']==="active"} style={{fontFamily: "sans-serif"}}>ACTIVE</option>
              <option value="fulfilled" selected={challenge['state']==="fulfilled"} style={{fontFamily: "sans-serif"}}>FULFILLED</option>
              <option value="failed" selected={challenge['state']==="failed"} style={{fontFamily: "sans-serif"}}>FAILED</option>
            </select>
          </div>

        </div>

        <div class="buttons-container">

          <IconButton onClick={moveChallengeUp} class="button" aria-label="moveup-button" component="span">
            <KeyboardArrowUpIcon/>
          </IconButton>

          <IconButton onClick={moveChallengeDown} class="button" aria-label="movedown-button" component="span">
            <KeyboardArrowDownIcon/>
          </IconButton>

          <IconButton onClick={indentChallengeLeft} class="button" aria-label="indentleft-button" component="span">
            <KeyboardArrowLeftIcon/>
          </IconButton>

          <IconButton onClick={indentChallengeRight} class="button" aria-label="indentright-button" component="span">
            <KeyboardArrowRightIcon/>
          </IconButton>

          <IconButton onClick={deleteChallenge} class="button delete" aria-label="erase-button" component="span">
            <DeleteForeverIcon/>
          </IconButton>

        </div>

      </div>

    </div>
  )
};

export default Challenge;