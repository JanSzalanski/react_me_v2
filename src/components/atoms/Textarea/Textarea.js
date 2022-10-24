import React from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {
  return (
    <div className={classes[props.wrap] || classes.wrapperAll}>
      <div className={classes.backWrapper}>
        <div className={classes[props.bgk] || classes.background}></div>
      </div>
      <textarea
        disabled={props.disabled}
        className={classes[props.className] || classes.textarea}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder || 'wpisz tekst'}
        rows={props.rows}
        cols={props.cols}
        maxLength={props.maxlength}
        minLength={props.minlength}
        autoComplete={props.autocomplete}
        autoCorrect={props.autocorrect}
        autoFocus={props.autofocus}
        form={props.form}
        tabIndex={props.tabindex}
        required={props.required}
        spellCheck={props.spellcheck}
        wrap={props.wrap}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Textarea;
