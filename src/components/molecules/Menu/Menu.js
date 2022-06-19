import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
// import Glow from '../../atoms/Glow/Glow';
import Button from '../../atoms/Button/Button';

const Menu = (props) => {
  return (
    <>
      <div className={classes.borderMenuWrapper}>
        <div className={classes.topLine} />
        <div className={classes.topLineCorner} />
        <div className={classes.rightLineCornerA} />
        <div className={classes.rightLineCornerB} />
        <div className={classes.rightLine} />
        <div className={classes.underLine} />
        <div className={classes.underLineCornerB} />
        <div className={classes.underLineCornerA} />

        <div className={classes.backgroundMenu}>
          <div className={classes.scanline} />
        </div>

        <div className={classes.cornerTopRight} />
        <div className={classes.cornerBottomRight} />
        <div className={classes.cornerMiddle} />
        <div className={classes.cornerBottomLeft} />
        <div className={classes.bottomLine} />
        <div className={classes.borderMenu}>
          <h3 className={classes.titleMenu}>Menu_Vers</h3>

          <nav className={classes.menu}>
            <ul className={classes.ulist}>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/news">
                  <Button type="menu" onClick={props.newsPointer}>
                    News
                  </Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/articles">
                  <Button type="menu" onClick={props.articlePointer}>
                    Artykóły
                  </Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/people">
                  <Button type="menu" onClick={props.peoplePointer}>
                    Ludzie
                  </Button>
                </NavLink>
              </li>
              <li className={classes.li}>
                <NavLink activeClassName={classes.active} className="routeLink" to="/nft">
                  <Button type="menu" onClick={props.nftPointer}>
                    #NFT
                  </Button>
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
