/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './Prywatnie.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import Background from '../../components/atoms/Background/Background';

const Prywatnie = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Prywatnie</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS"></Input>
      <Background />

      <div className={classes.wrapperGraphic}>
        <div className={classes.omnieGraphic} />
        <h2 className={classes.title}>// Kilka słów o mnie ///</h2>
      </div>

      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2023 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default Prywatnie;
