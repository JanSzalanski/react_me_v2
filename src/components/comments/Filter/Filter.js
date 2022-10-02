/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useRef } from 'react';
import classes from './Filter.module.css';
import ZoneTop from '../../UI/Zones/ZoneTop';
import Input from '../../atoms/Input/Input';
// import Heading from '../../atoms/Heading/Heading';
// import Button from '../../atoms/Button/Button';

const Filter = React.memo((props) => {
  const { onLoadComments } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0 ? '' : `?orderBy="name"&equalTo="${enteredFilter}"`;
        fetch(
          'https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json' +
            query,
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedComments = [];
            for (const key in responseData) {
              loadedComments.push({
                id: key,
                name: responseData[key].name,
                contents: responseData[key].contents,
              });
            }
            onLoadComments(loadedComments);
          });
      }
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadComments, inputRef]);

  return (
    <ZoneTop>
      <section className={classes.search}>
        <div className={classes.inputWrap}>
          <Input
            type="text"
            name="imie"
            maxlength="30"
            tabindex="9"
            autocomplete="off"
            placeholder="Podaj nazwę"
            bgk="commentBgk"
            class="commentWrap"
            className="comment"
            value={enteredFilter}
            ref={inputRef}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
        <div className={classes.titleWrap}>
          <h2 className={classes.title}>
            Filtruj komentarze po imieniu <b>/////////////////////////</b>
          </h2>
        </div>
      </section>
    </ZoneTop>
  );
});

export default Filter;
