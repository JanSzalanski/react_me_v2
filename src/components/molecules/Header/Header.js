import React from 'react';
import classes from './Header.module.css';
import Heading from '../../atoms/Heading/Heading';

const Header = (props) => {
  return (
    <header class={classes[props.className] || classes.wrapperHeader}>
      <Heading>{props.children}</Heading>
    </header>
  );
};

export default Header;
