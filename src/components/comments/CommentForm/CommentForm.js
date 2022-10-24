/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
// import Card from '../../molecules/Card/Card';
import classes from './CommentForm.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import ZoneBottom from '../../UI/Zones/ZoneBottom';

const CommentForm = React.memo((props) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const [enteredName, setEnteredName] = useState('');
  const [enteredContents, setEnteredContents] = useState('');

  const submitHandler = (event) => {
    setDisabledInput(false);
    event.preventDefault();
    if (enteredName.trim() === '') {
      props.onAddComment({ name: 'anonim', contents: enteredContents });
      setEnteredName('');
      setEnteredContents('');
      return;
    }
    props.onAddComment({ name: enteredName, contents: enteredContents });
    setEnteredName('');
    setEnteredContents('');
  };

  return (
    <ZoneBottom>
      <section className={classes.wrapper}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.leftWrap}>
            <Input
              disabled={disabledInput}
              name="imie"
              maxlength="30"
              tabindex="7"
              autocomplete="off"
              bgk="commentBgk"
              class="commentWrap"
              className="comment"
              placeholder="Podaj Imię"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />

            <Button type="buttonFlex" tabindex="9" className="comment">
              Dodaj komentarz
            </Button>
          </div>
          <div className={classes.rightWrap}>
            <Textarea
              disabled={disabledInput}
              type="textarea"
              name="message"
              minlength="5"
              maxlength="320"
              tabindex="8"
              required
              bgk="commentBgk"
              wrap="commentWrap"
              className="comment"
              placeholder="Treść komentarza*"
              value={enteredContents}
              onChange={(event) => {
                setEnteredContents(event.target.value);
              }}

              // value={enteredMessage}
            />
          </div>
        </form>
      </section>
      {disabledInput && (
        <div className={classes.disabledForm}>
          <div className={classes.titleWrap}>
            <h3 className={classes.title}>
              <b> ///// </b>Aby dodawać i edytować komentarze zaloguj się<b> ///// </b>
            </h3>
          </div>
        </div>
      )}
    </ZoneBottom>
  );
});

export default CommentForm;
