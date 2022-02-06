import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <button
        className={classes[props.className] || classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>

      <div className={classes.glow}>
        <div className={classes.copy}></div>
      </div>
    </div>
  );
};

export default Button;
