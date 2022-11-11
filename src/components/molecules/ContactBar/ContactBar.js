// i co dodanie nazwy klasy podobnej do contactWrapper tutaj i w input troszke sam siebie zmylilem... a to wygenerowalo nie oczekiwany blad!!! kuźwa jakie to potrafi byc przewrotne.

import React, { useState, useEffect } from 'react';
import classes from './ContactBar.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import { UserAuth } from '../../../context/AuthContext';

const ContactBar = (props) => {
  const { user } = UserAuth();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [flag, setFlag] = useState(false);
  // const [flagMessage, setFlagMessage] = useState('');
  const [animeKont, setAnimeKont] = useState(null);
  const [kolorKont, setKolorKont] = useState(null);

  useEffect(() => {
    if (user) {
      setEnteredName(user.displayName);
      setEnteredEmail(user.email);
    }
  }, [user]);

  let warrning = (
    <h1 className={classes.warning}>
      Na razie formularz kontaktowy nie działa na tej stronie, możesz skorzystać z formularza na
      stronie klasycznej
    </h1>
  );

  if (!flag) {
    warrning = null;
  } else if (
    flag &&
    enteredName.trim().length === 0 &&
    enteredEmail.trim().length === 0 &&
    enteredMessage.trim().length === 0
  ) {
    warrning = <h1 className={classes.warning}>Nie podałeś żadnych wymaganych danych</h1>;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const kontaktHandler = () => {
    if (animeKont === null || animeKont === 'contactHide') {
      setKolorKont('colorIn');
      setAnimeKont('contactSlide');
    } else if (animeKont === 'contactSlide') {
      setFlag(false);
      setAnimeKont('contactHide');
      setKolorKont('colorOut');
    } else {
      setAnimeKont(null);
      setKolorKont(null);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 &&
      enteredEmail.trim().length === 0 &&
      enteredMessage.trim().length === 0
    ) {
      setFlag(true);
      return;
    }

    const formData = {
      name: enteredName,
      email: enteredEmail,
      title: enteredTitle,
      message: enteredMessage,
    };
    // props.onSubmitForm(formData);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredTitle('');
    setEnteredMessage('');
    setFlag(true);

    console.log(formData);

    return;
  };

  const cssClasses = [classes.contactWrapper, animeKont];
  const bgkClasses = [classes.background, kolorKont];
  return (
    <div className={cssClasses.join(' ')}>
      <div className={classes.bgkWrap}>
        <div className={bgkClasses.join(' ')} />
        <div className={classes.lines} />
        {/* <div className={classes.scanline} /> */}
      </div>
      <div className={classes.Top}>
        <h2>Kontakt</h2>
      </div>
      <form onSubmit={submitHandler} className={classes.Middle}>
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
          onChange={nameChangeHandler}
          value={enteredName}
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
          onChange={emailChangeHandler}
          value={enteredEmail}
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
          placeholder="Temat"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <Textarea
          type="textarea"
          name="message"
          maxlength="600"
          tabindex="4"
          // bgk="contactBgk"
          // wrap="contactWrap"
          // className="contact"
          placeholder="Treść wiadomości *"
          onChange={messageChangeHandler}
          value={enteredMessage}
        />
        {warrning}
        <div className={classes.btnWrapperC}>
          <Button tabindex="5" type="submit">
            Wyślij
          </Button>
        </div>
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
        <Button tabindex="6" type="kontakt" onClick={kontaktHandler}>
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
