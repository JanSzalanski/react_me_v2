import React, { useState } from 'react';
import classes from './Filter.module.css';
import ZoneTop from '../../UI/Zones/ZoneTop';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const Filter = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState('');
  return (
    <ZoneTop>
      <section className={classes.search}>
        <Button tabindex="10" type="submit" className="comment">
          Filtruj
        </Button>
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
          onChange={(event) => setEnteredFilter(event.target.value)}
        />
      </section>
    </ZoneTop>
  );
});

export default Filter;
