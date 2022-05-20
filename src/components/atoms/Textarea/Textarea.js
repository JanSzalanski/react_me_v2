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
        rows="5"
        cols="33"
        //   onClick={props.onClick}
      />
    </div>
  );
};

export default Textarea;
