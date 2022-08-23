import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes[props.class] || classes.wrapperAll}>
      <div className={props.bgk === 'bgkS' ? classes.backWrapper : classes.backWrapperB}>
        <div className={classes[props.bgk] || classes.background}></div>
      </div>
      <input
        name={props.name}
        maxLength={props.maxlength}
        autoComplete={props.autocomplete}
        tabIndex={props.tabindex}
        className={classes[props.className] || classes.input}
        placeholder={props.placeholder || 'input'}
        type={classes[props.type] || 'text'}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        //   onClick={props.onClick}
      />
    </div>
  );
};

export default Input;
