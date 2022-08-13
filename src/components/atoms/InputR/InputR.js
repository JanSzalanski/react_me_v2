import React from 'react';
import classes from './InputR.module.css';

const InputR = (props) => {
  return <input className={classes[props.className] || classes.radio} type="radio"></input>;
};

export default InputR;
