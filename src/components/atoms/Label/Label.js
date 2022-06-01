import React from 'react';
import classes from './Label.module.css';
import Button from '../Button/Button';

const Label = (props) => {
  return (
    <label for={props.for} id={props.id} className={classes.customLabel}>
      {props.children}
      <Button type="secondary">Detale</Button>
    </label>
  );
};

export default Label;
