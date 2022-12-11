import React from 'react';
import classes from './HeaderB.module.css';
import Heading from '../../atoms/Heading/Heading';
import DecorOne from '../../atoms/Decors/DecorOne/DecorOne';
import DecorTwo from '../../atoms/Decors/DecorTwo/DecorTwo';
import Button from '../../atoms/Button/Button';
import { UserAuth } from '../../../context/AuthContext';
import Profile from '../Profile/Profile';

const HeaderB = (props) => {
  const { googleLogged, googleLogout, user, loged } = UserAuth();
  const expirationTime = new Date(new Date().getTime() + 25000);

  return (
    <header className={classes[props.className] || classes.wrapperHeader}>
      <DecorTwo></DecorTwo>
      {/* <DecorTwo className="decortwo2"></DecorTwo> */}

      <div className={classes.innerWrapper}>
        <DecorOne className="decorHeader"></DecorOne>

        <div className={classes.bgkWrap}>
          <div className={classes.background}></div>
          <div className={classes.lines}></div>
          <div className={classes.scanline}></div>
        </div>
        <div className={classes.lineA}></div>
        <div className={classes.lineC}></div>
        <div className={classes.lineB}></div>

        <div className={classes.lineD}></div>
        <div className={classes.lineE}></div>
        <div className={classes.lineF}></div>
        <div className={classes.lineG}></div>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line2A}></div>
        <div className={classes.line3}></div>
        <div className={classes.line3A}></div>
        <div className={classes.line4}></div>
        <div className={classes.line4A}></div>
        <div className={classes.line5}></div>
        <div className={classes.line6}></div>
        <div className={classes.line6A}></div>
        <div className={classes.line7}></div>
        <div className={classes.line7A}></div>
        <div className={classes.line8}></div>
        <div className={classes.line8A}></div>
        <div className={classes.line8B}></div>
        <div className={classes.line9}></div>
        <div className={classes.line9A}></div>
        <div className={classes.line10}></div>
        <div className={classes.line10A}></div>
        <Heading className="position">{props.children}</Heading>
        {user && loged && (
          <Button onClick={googleLogout} type="login">
            Wyloguj
          </Button>
        )}
        {!user && !loged && (
          <Button
            onClick={() => {
              googleLogged(expirationTime.toISOString());
            }}
            type="login"
          >
            Zaloguj
          </Button>
        )}
        {user && <Profile></Profile>}
        {user && <h2 className={classes.stat}>User jest true</h2>}
        {loged && <h2 className={classes.stat}>loged jest true</h2>}
      </div>
    </header>
  );
};

export default HeaderB;
