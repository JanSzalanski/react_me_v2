import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.buttonWrapper}>
      <button
        className={classes[props.type] || classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>

      {props.type === 'button' && (
        <div className={classes.glow}>
          <div className={classes.copy}></div>
        </div>
      )}

      {props.type === 'kontakt' && (
        <div className={classes.glowKont}>
          <div className={classes.copyKont}></div>
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'secondary']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
