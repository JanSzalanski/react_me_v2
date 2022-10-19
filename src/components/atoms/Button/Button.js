import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let cssClasses = [classes[props.type] || classes.button];

  if (props.type === 'login') {
    return (
      <div className={classes.buttonLWrapper} tabIndex={props.tabindex}>
        <button
          className={cssClasses.join(' ')}
          type={props.type || 'button'}
          onClick={props.onClick}
        >
          <p>{props.children}</p>
        </button>
        <div className={classes.glowL}>
          <div className={classes.copyL}></div>
        </div>
      </div>
    );
  }

  if (props.type === 'secondary') {
    return (
      <div className={classes.buttonSWrapper} tabIndex={props.tabindex}>
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
      </div>
    );
  }

  if (props.type === 'buttonDetails') {
    return (
      <div className={classes.buttonDWrapper} tabIndex={props.tabindex}>
        <button className={classes[props.type]} onClick={props.onClick}>
          <p>{props.children}</p>
        </button>
        <div className={classes.glow}>
          <div className={classes.copy}></div>
        </div>
      </div>
    );
  }

  if (props.type === 'buttonFlex') {
    return (
      <div className={classes.buttonFlexWrapper} tabIndex={props.tabindex}>
        <button className={cssClasses.join(' ')} onClick={props.onClick} tabIndex={props.tabindex}>
          <p>{props.children}</p>
        </button>
        <div className={classes.glowComm}>
          <div className={classes.copyComm}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.buttonWrapper} tabIndex={props.tabindex}>
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

      {props.type === 'menu' && (
        <div className={classes.glowMe}>
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
