import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
// import Glow from '../../atoms/Glow/Glow';
import Button from '../../atoms/Button/Button';

const Menu = (props) => {
  return (
    <>
      <div className="borderMenuWrapper">
        <div className="topLine" />
        <div className="topLineCorner" />
        <div className="rightLineCornerA" />
        <div className="rightLineCornerB" />
        <div className="rightLine" />
        <div className="underLine" />
        <div className="underLineCornerB" />
        <div className="underLineCornerA" />
        
        <div className="backgroundMenu">
          <div className="scanline" />
        </div>

        <div className="cornerTopRight" />
        <div className="cornerBottomRight" />
        <div className="cornerMiddle" />
        <div className="cornerBottomLeft" />
        <div className="bottomLine" />
        <div className="borderMenu">

          <h3 className="titleMenu">Menu_Vers</h3>

          <nav className={classes.menu}>
            <ul className={classes.ulist}>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/news">
                  <Button onClick={props.newsPointer}>News</Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/articles">
                  <Button onClick={props.articlePointer}> Artykóły</Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/people">
                  <Button onClick={props.peoplePointer}>Ludzie</Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/nft">
                  <Button onClick={props.nftPointer}>#NFT</Button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
