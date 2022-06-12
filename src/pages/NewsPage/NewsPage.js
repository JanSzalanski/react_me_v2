import React from 'react';
import Label from '../../components/atoms/Label/Label';
import classes from './NewsPage.module.css';
// import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
// import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
// import Pargraph from '../../components/atoms/Paragraph/Paragraph';
import Card from '../../components/molecules/Card/Card';
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
        <section className={classes.slider}>
          <input type="radio" name="slider" id="s1" defaultChecked />
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <input type="radio" name="slider" id="s6" />
          <input type="radio" name="slider" id="s7" />

          <Label htmlFor="s1" id="slide1" name="slide1">
            <Card
              path="a1"
              date="01/02/2022"
              title="Pierwszy news"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
              earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit
              voluptatibus minus totam eos accusamus dolores adipisci!"
            />
          </Label>
          <Label htmlFor="s2" id="slide2" name="slide2">
            <Card
              path="a2"
              date="02/04/2022"
              title="Drugi news"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
               earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit"
            />
          </Label>
          <Label htmlFor="s3" id="slide3" name="slide3">
            <Card
              path="a3"
              date="25/04/2022"
              title="Trzeci news"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias
              earum accusamus iste! Corrupti ut ea sint modi magnam !"
            />
          </Label>
          <Label htmlFor="s4" id="slide4" name="slide4">
            <Card
              path="a4"
              date="25/05/2022"
              title="Czwarty news"
              content="To jest troche treści po polsku"
            />
          </Label>
          <Label htmlFor="s5" id="slide5" name="slide5">
            <Card
              path="a5"
              date="01/06/2022"
              title="Piąty news"
              content="To jest troche więcej treści po polsku... Tak aby było wiadomo co gdzie i jak."
            />
          </Label>
          <Label htmlFor="s6" id="slide6" name="slide6">
            <Card
              path="a6"
              date="03/06/2022"
              title="Szósty news"
              content="szósty zmysł - Psycholog dziecięcy próbuje pomóc ośmioletniemu chłopcu widzącemu zmarłych poradzić sobie z tym niezwykłym darem."
            />
          </Label>
          <Label htmlFor="s7" id="slide7" name="slide7">
            <Card
              path="a7"
              date="03/06/2022"
              title="Siódmy news"
              content="siedem - Dwóch policjantów stara się złapać seryjnego mordercę wybierającego swoje ofiary według specjalnego klucza - siedmiu grzechów głównych.Github jest git ;)"
            />
          </Label>
        </section>
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
