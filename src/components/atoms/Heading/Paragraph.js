import React from 'react';
import classes from './Paragraph.module.css';

const Pargraph = (props) => {
  return <p className={classes[props.className] || classes.paragraph}>{props.children}</p>;
};

export default Pargraph;
