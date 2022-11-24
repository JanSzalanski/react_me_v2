/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
// import Card from '../../molecules/Card/Card';
import classes from './CommentForm.module.css';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import ZoneBottom from '../../UI/Zones/ZoneBottom';
import { UserAuth } from '../../../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

const CommentForm = React.memo((props) => {
  const { user, loged } = UserAuth();
  const [enteredName, setEnteredName] = useState(user ? user.displayName : '');
  const [enteredContents, setEnteredContents] = useState('');

  const userID = user.uid;
  const userMail = user.email;
  const profilePic = user.photoURL;

  const Today = new Date();
  const year = Today.getFullYear();
  const month = Today.toLocaleString('pl-PL', { month: 'short' });
  const day = Today.toLocaleString('pl-PL', { day: '2-digit' });

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredName('anonim');
      return;
    }
    setEnteredName(enteredName);
    createComment(event);
    setEnteredName('');
    setEnteredContents('');
  };

  const createComment = async (event) => {
    event.preventDefault(event);
    if (loged) {
      try {
        await addDoc(collection(db, 'comments'), {
          userID: userID,
          name: enteredName,
          mail: userMail,
          content: enteredContents,
          picture: profilePic,
          date: `${day} ${month} ${year}`,
        });
      } catch (error) {
        new Error('Nie dodano komntarza do bazy');
        console.log('catch komentarz add' + error);
      }
    } else {
      alert('Trzeba być zalogowanym do wykonania tej akcji');
    }
  };

  console.log('User ' + user);

  return (
    <ZoneBottom>
      <section className={classes.wrapper}>
        <form onSubmit={submitHandler} className={classes.form}>
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
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />

            <Button type="buttonFlex" tabindex="9" className="comment">
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
