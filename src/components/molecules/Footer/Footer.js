import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer class={classes[props.className] || classes.wrapperFooter}>
      <h2 className={classes.footerTitle}>{props.children}</h2>
    </footer>
  );
};

export default Footer;
