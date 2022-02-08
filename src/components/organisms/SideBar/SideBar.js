import React from 'react';
import classes from './SideBar.module.css';
import Menu from '../../molecules/Menu/Menu';

const SideBar = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.background}></div>
      <div className={classes.glow}></div>
      <div className={classes.sidebar}></div>
      <Menu />
    </div>
  );
};

export default SideBar;
