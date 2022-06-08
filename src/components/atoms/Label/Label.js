import React from 'react';
import './Label.css';

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} id={props.id} className="customLabel" name={props.name}>
      {props.children}
    </label>
  );
};

export default Label;
