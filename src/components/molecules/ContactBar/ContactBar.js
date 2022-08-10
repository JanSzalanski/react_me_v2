// i co dodanie nazwy klasy podobnej do contactWrapper tutaj i w input troszke sam siebie zmylilem... a to wygenerowalo nie oczekiwany blad!!! kuźwa jakie to potrafi byc przewrotne.

import React, { useState } from 'react';
import classes from './ContactBar.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';

const ContactBar = (props) => {
  const [animeKont, setAnimeKont] = useState(null);
  const [kolorKont, setKolorKont] = useState(null);

  const kontaktHandler = () => {
    if (animeKont === null || animeKont === 'contactHide') {
      setKolorKont('colorIn');
      setAnimeKont('contactSlide');
    } else if (animeKont === 'contactSlide') {
      setAnimeKont('contactHide');
      setKolorKont('colorOut');
    } else {
      setAnimeKont(null);
      setKolorKont(null);
    }
  };

  const cssClasses = [classes.contactWrapper, animeKont];
  const bgkClasses = [classes.background, kolorKont];
  return (
    <div className={cssClasses.join(' ')}>
      <div className={classes.bgkWrap}>
        <div className={bgkClasses.join(' ')} />
        <div className={classes.lines} />
        <div className={classes.scanline} />
      </div>
      <div className={classes.Top}>
        <h2>Kontakt</h2>
      </div>
      <form method="post" action="" className={classes.Middle}>
        <Input
          type="text"
          name="imie"
          maxlength="30"
          tabindex="1"
          autocomplete="off"
          bgk="contactBgk"
          class="contactWrap"
          className="contact"
          placeholder="Imię *"
        />
        <Input
          type="email"
          name="email"
          maxlength="40"
          tabindex="2"
          autocomplete="off"
          bgk="contactBgk"
          class="contactWrap"
          className="contact"
          placeholder="E-mail *"
        />
        <Input
          type="topic"
          name="temat"
          maxlength="30"
          autocomplete="off"
          tabindex="3"
          bgk="contactBgk"
          class="contactWrap"
          className="contact"
          placeholder="Temat *"
        />
        <Textarea
          type="textarea"
          name="message"
          maxlength="600"
          tabindex="4"
          cols="80"
          rows="5"
          bgk="contactBgk"
          class="contactWrap"
          className="contact"
          placeholder="Treść wiadomości *"
        />
        <Button>Wyślij</Button>
      </form>

      <div className={classes.lineRight} />
      <div className={classes.lineLeft} />
      <div className={classes.lineTop} />
      <div className={classes.lineBottom} />
      <div className={classes.line1} />
      <div className={classes.line2} />
      <div className={classes.line3} />
      <div className={classes.line4} />
      <div className={classes.line5} />
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
      <div className={classes.btnWrapperB}>
        <Button type="kontaktM" onClick={kontaktHandler}>
          {'>>>'}
        </Button>
      </div>
    </div>
  );
};

export default ContactBar;
