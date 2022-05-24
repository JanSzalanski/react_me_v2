import React from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {
  return (
    <div className={classes[props.class] || classes.wrapperAll}>
      <div className={classes.backWrapper}>
        <div className={classes[props.bgk] || classes.background}></div>
      </div>
      <textarea
        className={classes[props.className] || classes.textarea}
        placeholder={props.placeholder || 'textarea'}
        rows={props.rows}
        cols={props.cols}
        name={props.name}
        autoComplete={props.autocomplete}
        tabIndex={props.tabindex}
        maxLength={props.maxlength}
        //   onClick={props.onClick}
      />
    </div>
  );
};

export default Textarea;
