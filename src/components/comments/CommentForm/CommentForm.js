import React, { useState } from 'react';
// import Card from '../../molecules/Card/Card';
import classes from './CommentForm.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import ZoneBottom from '../../UI/Zones/ZoneBottom';

const CommentForm = React.memo((props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredContents, setEnteredContents] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
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
              type="text"
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

            <Button tabindex="9" type="submit" className="comment">
              Dodaj komentarz
            </Button>
          </div>
          <div className={classes.rightWrap}>
            <Textarea
              type="textarea"
              name="message"
              maxlength="500"
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
    </ZoneBottom>
  );
});

export default CommentForm;
