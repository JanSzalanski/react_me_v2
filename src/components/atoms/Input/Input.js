import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.wrapperAll}>
      <div className={classes.backWrapper}>
        <div className={classes.background}></div>
      </div>
      <input
        className={classes[props.className] || classes.input}
        placeholder={props.placeholder || 'search'}
        type="text"
        //   onClick={props.onClick}
      />
    </div>
  );
};

export default Input;
