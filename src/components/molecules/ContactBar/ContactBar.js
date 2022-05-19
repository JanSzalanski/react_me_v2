import React, { useState } from 'react';
import classes from './ContactBar.module.css';
import Button from '../../atoms/Button/Button';

const ContactBar = (props) => {
  const [animeKont, setAnimeKont] = useState(null);

  const kontaktHandler = () => {
    if (animeKont === null || animeKont === 'contactHide') {
      setAnimeKont('contactSlide');
    } else if (animeKont === 'contactSlide') {
      setAnimeKont('contactHide');
    } else {
      setAnimeKont(null);
    }
  };

  const cssClasses = [classes.contactWrapper, animeKont];
  return (
    <div className={cssClasses.join(' ')}>
      <div className={classes.Top}>
        <h2>Kontakt</h2>
      </div>
      <div className={classes.bgkWrap}>
        <div className={classes.background} />
        <div className={classes.lines} />
        <div className={classes.scanline} />
      </div>

      <div className={classes.lineRight} />
      <div className={classes.lineLeft} />
      <div className={classes.lineTop} />
      <div className={classes.lineBottom} />
      <div className={classes.line1} />
      <div className={classes.line2} />
      <div className={classes.line3} />
      <div className={classes.line4} />
      <div className={classes.line5} />
      {/*  */}
      <div className={classes.line6} />
      <div className={classes.line7} />
      <div className={classes.line8} />
      <div className={classes.line9} />
      <div className={classes.line10} />
      <div className={classes.btnWrapper}>
        <Button type="kontakt" onClick={kontaktHandler}>
          Kontakt
        </Button>
      </div>
    </div>
  );
};

export default ContactBar;
