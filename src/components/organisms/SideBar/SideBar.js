import React from 'react';
import classes from './SideBar.module.css';
import Menu from '../../molecules/Menu/Menu';

const SideBar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Menu />
    </div>
  );
};

export default SideBar;
