import React, { useState } from 'react';
import classes from './SideBar.module.css';
import Menu from '../../molecules/Menu/Menu';
import Button from '../../atoms/Button/Button';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const [animeA, setAnimeA] = useState(false);
  const [animeB, setAnimeB] = useState(false);
  const [animeC, setAnimeC] = useState(false);
  const [animeD, setAnimeD] = useState(false);

  const classesGlow = [
    'glow',
    animeA ? 'animeA' : null,
    animeB ? 'animeB' : null,
    animeC ? 'animeC' : null,
    animeD ? 'animeD' : null,
  ];

  const newsHandler = () => {
    setAnimeA(true);
    setAnimeB(false);
    setAnimeC(false);
    setAnimeD(false);
  };
  const articleHandler = () => {
    setAnimeA(false);
    setAnimeB(true);
    setAnimeC(false);
    setAnimeD(false);
  };
  const peopleHandler = () => {
    setAnimeA(false);
    setAnimeB(false);
    setAnimeC(true);
    setAnimeD(false);
  };
  const nftHandler = () => {
    setAnimeA(false);
    setAnimeB(false);
    setAnimeC(false);
    setAnimeD(true);
  };
  return (
    <div className="wrapper">
      <ul className={classes.ulistM}>
        <li className={classes.li}>
          <NavLink activeClassName={classes.active} className="routeLink" to="/news">
            <Button type="menu" onClick={props.newsPointer}>
              Nowości
            </Button>
          </NavLink>
        </li>
      </ul>
      <div className="background"></div>
      <div className="glowWrapper">
        <div className={classesGlow.join(' ')} />
      </div>
      <div className="sidebar"></div>
      {/* <div className="helper" /> */}
      <Menu
        newsPointer={newsHandler}
        articlePointer={articleHandler}
        peoplePointer={peopleHandler}
        nftPointer={nftHandler}
      />
    </div>
  );
};

export default SideBar;
