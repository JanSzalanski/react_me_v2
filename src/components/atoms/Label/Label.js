import React from 'react';
// import classes from './Label.module.css';
import Button from '../Button/Button';

const Label = (props) => {
  return (
    <label for={props.for} id={props.id}>
      <Button type="secondary">Detale</Button>
      {props.children}
    </label>
  );
};

export default Label;
