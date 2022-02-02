import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={classes[props.className] || classes.input}
      placeholder={props.placeholder || 'login'}
      type="text"
      //   onClick={props.onClick}
    />
  );
};

export default Input;