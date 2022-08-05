import React from 'react';
import classes from './MenuMBottom.module.css';
import { NavLink } from 'react-router-dom';
import ButtonM from '../../atoms/ButtonM/ButtonM';

const MenuMBottom = (props) => {
  return (
    <>
      <nav className={classes.menu}>
        <ul className={classes.ulist}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/people">
              <ButtonM className="lud" type="bottom">
                Ludzie
              </ButtonM>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} className="routeLink" to="/nft">
              <ButtonM className="nft" type="bottom">
                NFT
              </ButtonM>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuMBottom;
