import React from 'react';
// import Card from '../../molecules/Card/Card';
import classes from './CommentForm.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';

const CommentForm = React.memo((props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
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
            placeholder="Imię"
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
            bgk="commentBgk"
            wrap="commentWrap"
            className="comment"
            placeholder="Treść komentarza*"
            // onChange={messageChangeHandler}
            // value={enteredMessage}
          />
        </div>
      </form>
    </section>
  );
});

export default CommentForm;
