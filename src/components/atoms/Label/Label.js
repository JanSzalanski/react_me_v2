import React from 'react';
import './Label.css';
import Button from '../Button/Button';

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} id={props.id} className="customLabel" name={props.name}>
      {props.children}
      <Button type="secondary">Detale</Button>
    </label>
  );
};

export default Label;
