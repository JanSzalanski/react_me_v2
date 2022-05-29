import React from 'react';
import Label from '../../components/atoms/Label/Label';
import classes from './NewsPage.module.css';
// import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
// import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
// import Card from '../../components/molecules/Card/Card';
// import Footer from '../../components/molecules/Footer/Footer';
import FooterB from '../../components/molecules/FooterB/FooterB';
// import { Link } from 'react-router-dom';
// import PerspectiveA from '../../components/organisms/PerspectiveA/PerspectiveA';
import Background from '../../components/atoms/Background/Background';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
// import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const NewsPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Aktułalności</HeaderB>
      <Input className="search" placeholder="szukaj"></Input>

      <Background />
      <div className={classes.overflowWrapper}>
        <div className={classes.slider}>
          <input type="radio" name="slider" id="s1" checked />
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <Label for="s1" id="slide1">
            1
          </Label>
        </div>
        {/* <Card
          className="hidden"
          path="a1"
          date="01/02/2022"
          title="Pierwszy news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
        voluptatibus minus totam eos accusamus dolores adipisci!"
        />

        <Card
          path="a2"
          date="02/04/2022"
          title="Drugi news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit"
        />

        <Card
          className="hidden"
          path="a3"
          date="25/04/2022"
          title="Trzeci news"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
        earum accusamus iste! Corrupti ut ea sint modi magnam !"
        /> */}
      </div>
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default NewsPage;
