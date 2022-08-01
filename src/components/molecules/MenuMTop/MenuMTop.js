import React from 'react';
import classes from './MenuMTop.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const MenuMTop = (props) => {
  return (
    <>
      <nav className={classes.menu}>
        <ul className={classes.ulist}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/news">
              <Button type="menu" mobile="news" onClick={props.newsPointer}>
                Nowości
              </Button>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/articles">
              <Button type="menu" mobile="art" onClick={props.articlePointer}>
                Artykuły
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuMTop;
