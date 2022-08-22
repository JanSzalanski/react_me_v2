import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let cssClasses = [classes[props.type] || classes.button];
  if (props.type === 'secondary') {
    return (
      <>
        <button
          className={cssClasses.join(' ')}
          type={props.type || 'button'}
          onClick={props.onClick}
        >
          <p>{props.children}</p>
        </button>
        <div className={classes.glowS}>
          <div className={classes.copyS}></div>
        </div>
      </>
    );
  }

  return (
    <div className={classes.buttonWrapper}>
      <button
        className={cssClasses.join(' ')}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        <p>{props.children}</p>
      </button>

      {props.type === 'button' && (
        <div className={classes.glow}>
          <div className={classes.copy}></div>
        </div>
      )}

      {props.type === 'submit' && (
        <div className={classes.glow}>
          <div className={classes.copy}></div>
        </div>
      )}

      {/* {props.type === 'secondary' && (
        <div className={classes.glowS}>
          <div className={classes.copyS}></div>
        </div>
      )} */}

      {props.type === 'wysylka' && (
        <div className={classes.glowWys}>
          <div className={classes.copy}></div>
        </div>
      )}

      {props.type === 'menu' && (
        <div className={classes.glow}>
          <div className={classes.copyMe}></div>
        </div>
      )}

      {props.type === 'kontakt' && (
        <div className={classes.glowKont}>
          <div className={classes.copyKont}></div>
        </div>
      )}

      {props.type === 'kontaktM' && (
        <div className={classes.glowKontM}>
          <div className={classes.copyKontM}></div>
        </div>
      )}
    </div>
  );
};

export default Button;
