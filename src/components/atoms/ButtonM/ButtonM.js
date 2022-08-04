import React from 'react';
import classes from './ButtonM.module.css';

const ButtonM = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <button
        className={classes[props.className] || classes.buttonM}
        type={props.type || 'buttonM'}
        onClick={props.onClick}
      >
        <p>{props.children}</p>
      </button>
      {props.className === 'new' && (
        <div className={classes.glow}>
          <div className={classes.copy}></div>
        </div>
      )}

      {props.className === 'art' && (
        <div className={classes.glowA}>
          <div className={classes.copyA}></div>
        </div>
      )}
    </div>
  );
};

export default ButtonM;
