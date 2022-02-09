import React from 'react';
import classes from './SideBar.module.css';
import Menu from '../../molecules/Menu/Menu';
import PropTypes from 'prop-types';

const SideBar = ({ pageType }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.background}></div>
      {pageType === 'news' && <div className={classes.glow}></div>}
      {pageType === 'article' && <div className={classes.glowA}></div>}
      {pageType === 'people' && <div className={classes.glowB}></div>}
      {pageType === 'nft' && <div className={classes.glowC}></div>}
      <div className={classes.sidebar}></div>
      <Menu />
    </div>
  );
};

SideBar.propTypes = {
  pageType: PropTypes.oneOf(['news', 'article', 'people', 'nft']),
};

SideBar.defaultProps = {
  pageType: 'news',
};

export default SideBar;
