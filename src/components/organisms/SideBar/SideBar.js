import React from 'react';
import classes from './SideBar.module.css';
import Menu from '../../molecules/Menu/Menu';
import Glow from '../../atoms/Glow/Glow';
import PropTypes from 'prop-types';

const SideBar = ({ pageType }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.background}></div>
      {pageType === 'news' && <Glow />}
      {pageType === 'article' && <Glow class="glowA" />}
      {pageType === 'people' && <Glow class="glowB" />}
      {pageType === 'nft' && <Glow class="glowC" />}
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
