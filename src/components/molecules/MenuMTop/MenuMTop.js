import React from 'react';
import classes from './MenuMTop.module.css';
import { NavLink } from 'react-router-dom';
import ButtonM from '../../atoms/ButtonM/ButtonM';

const MenuMTop = (props) => {
  return (
    <>
      <nav className={classes.menu}>
        <ul className={classes.ulist}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/news">
              <ButtonM className="new">Nowości</ButtonM>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/articles">
              <ButtonM className="art">Artykuły</ButtonM>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuMTop;
