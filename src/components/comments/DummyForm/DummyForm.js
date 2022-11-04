/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// import Card from '../../molecules/Card/Card';
import classes from './DummyForm.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
// import ZoneBottom from '../../UI/Zones/ZoneBottom';

const DummyForm = React.memo((props) => {
  return (
    <>
      <section className={classes.wrapper}>
        <form className={classes.form}>
          <div className={classes.leftWrap}>
            <Input
              name="imie"
              maxlength="30"
              tabindex="7"
              autocomplete="off"
              bgk="commentBgk"
              class="commentWrap"
              className="comment"
              placeholder="Podaj Imię"
            />

            <Button type="buttonFlex" className="comment">
              Dodaj komentarz
            </Button>
          </div>
          <div className={classes.rightWrap}>
            <Textarea
              type="textarea"
              name="message"
              minlength="5"
              maxlength="320"
              tabindex="8"
              required
              bgk="commentBgk"
              wrap="commentWrap"
              className="comment"
              placeholder="Treść komentarza dummy*"
            />
          </div>
        </form>
      </section>
    </>
  );
});

export default DummyForm;
