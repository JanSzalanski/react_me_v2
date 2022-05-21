import React from 'react';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';
// import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Strona o ludziach</HeaderB>
      <Input className="search" placeholder="szukaj"></Input>
      <Background />
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default PeoplePage;
