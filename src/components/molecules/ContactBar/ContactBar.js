import React from 'react';
import classes from './ContactBar.css';

const ContactBar = (props) => {
  return <div className={classes[props.className] || classes.contactWrapper}></div>;
};

export default ContactBar;
