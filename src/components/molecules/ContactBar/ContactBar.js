import React from 'react';
import classes from './ContactBar.module.css';

const ContactBar = (props) => {
  return (
    <div className={classes[props.className] || classes.contactWrapper}>
      <div className={classes.lineRight} />
      <div className={classes.lineLeft} />
    </div>
  );
};

export default ContactBar;
