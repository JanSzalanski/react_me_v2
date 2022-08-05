import React from 'react';
import classes from './ButtonM.module.css';

const ButtonM = (props) => {
  return (
    <div className={props.type === 'top' ? classes.buttonWrapper : classes.buttonWrapperB}>
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

      {props.className === 'lud' && (
        <div className={classes.glowB}>
          <div className={classes.copyB}></div>
        </div>
      )}

      {props.className === 'nft' && (
        <div className={classes.glowC}>
          <div className={classes.copyC}></div>
        </div>
      )}
    </div>
  );
};

export default ButtonM;
