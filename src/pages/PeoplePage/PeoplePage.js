import React from 'react';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';
import Comments from '../../components/comments/Comments/Comments';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
// import ZoneTop from '../../components/UI/Zones/ZoneTop';

// import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Strona o ludziach</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS" tabindex="14"></Input>
      <Background />
      <div className="overflowWrapper">
        <Comments />
      </div>

      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default PeoplePage;
