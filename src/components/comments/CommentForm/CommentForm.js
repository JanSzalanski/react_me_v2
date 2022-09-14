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
          <div className={classes.formControl}>
            <Input
              type="text"
              name="imie"
              maxlength="30"
              tabindex="1"
              autocomplete="off"
              bgk="contactBgk"
              class="contactWrap"
              className="contact"
              placeholder="Imię"
            />
          </div>

          <div className={classes.formActions}>
            <Button type="submit">Dodaj komentarz</Button>
          </div>
        </div>
        <div className={classes.rightWrap}>
          <Textarea
            name="message"
            maxlength="600"
            tabindex="4"
            cols="80"
            rows="3"
            bgk="commentBgk"
            class="commentWrap"
            className="comment"
            placeholder="Treść komentarza"
          />
        </div>
      </form>
    </section>
  );
});

export default CommentForm;
