import React from 'react';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './PeoplePage.module.css';
import Background from '../../components/atoms/Background/Background';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import CommentForm from '../../components/comments/CommentForm/CommentForm';
import ZoneTop from '../../components/UI/Zones/ZoneTop';
import ZoneBottom from '../../components/UI/Zones/ZoneBottom';
// import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const PeoplePage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Strona o ludziach</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS" tabindex="14"></Input>
      <Background />
      <div className="overflowWrapper">
        <ZoneTop>
          <p>
            W centrum mimo rozwoju całej otaczającej nas technologii dalej pozostaje człowiek.
            Odnoszę nawet wrażenie, że w niektórych dziedzinach nawet tych stricte informatycznych
            ten trend nawet się nasila. Dlatego ten dział będzie dla ludzi i o ludziach.
          </p>
        </ZoneTop>
        <ZoneBottom>
          <CommentForm />
        </ZoneBottom>
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
