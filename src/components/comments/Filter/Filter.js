/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from 'react';
import classes from './Filter.module.css';
import ZoneTop from '../../UI/Zones/ZoneTop';
import Input from '../../atoms/Input/Input';
// import Heading from '../../atoms/Heading/Heading';
// import Button from '../../atoms/Button/Button';

const Filter = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  // const filteredData = () => {
  //   return enteredFilter;
  // }

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
            onChange={(event) => {
              setEnteredFilter(event.target.value);
              props.filter(enteredFilter);
            }}
          />
        </div>
        <div className={classes.titleWrap}>
          <h2 className={classes.title}>
            Filtruj komentarze po imieniu <b>/////////////////////////</b>
          </h2>
        </div>
      </section>
      {props.children}
    </ZoneTop>
  );
});

export default Filter;
