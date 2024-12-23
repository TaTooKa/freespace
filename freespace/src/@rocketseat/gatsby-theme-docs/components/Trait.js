import React from 'react';

const Trait = (props) => {

  const traitId = props.type+props.name;
  const value = props.inputs[traitId];
  const anchorName = encodeURIComponent(props.title).replace('%20','-').toLowerCase();

  const baseClasses = value === true ? "trait active" : "trait inactive";
  const classes = baseClasses + " " + props.type;

  return (
    <div class={classes} id={anchorName}>
        <input id={traitId} type="checkbox" name={traitId} value={value} onChange={props.handleChange} defaultChecked={value}/>
        <label for={traitId}> <span class="trait-name">{props.title}</span>: {props.children}</label>
        <img src={props.art} class="art"/>
    </div>
  );

};

export default Trait;