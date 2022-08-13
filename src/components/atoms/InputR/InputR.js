import React from 'react';
import classes from './InputR.module.css';

const InputR = (props) => {
  const cssClasses = [classes.radio, classes[props.className]];
  return (
    <input
      className={cssClasses.join(' ')}
      defaultChecked={props.defaultChecked}
      type="radio"
      id={props.id}
      name={props.name}
    ></input>
  );
};

export default InputR;
