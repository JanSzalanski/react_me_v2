import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <ul className={classes.ulist}>
        <li className={classes.li}>
          <NavLink activeClassName={classes.active} className={classes.navLink} to="/news">
            <Button>News</Button>
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink activeClassName={classes.active} className={classes.navLink} to="/articles">
            <Button> Artykóły</Button>
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink activeClassName={classes.active} className={classes.navLink} to="/people">
            <Button>ludzie</Button>
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink activeClassName={classes.active} className={classes.navLink} to="/nft">
            <Button>#NFT</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
