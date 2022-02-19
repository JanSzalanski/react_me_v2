import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
// import Glow from '../../atoms/Glow/Glow';
import Button from '../../atoms/Button/Button';

const Menu = (props) => {
  return (
    <>
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
    </>
  );
};

export default Menu;
