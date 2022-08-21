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
// import InputR from '../../components/atoms/InputR/InputR';
import InputRList from '../../components/molecules/InputRList/InputRList';

const DUMMY_NEWS = [
  {
    path: 'a1',
    date: new Date(2022, 1, 2),
    title: 'Pierwszy news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestiasearum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderitvoluptatibus minus totam eos accusamus dolores adipisci!',
  },
  {
    path: 'a2',
    date: new Date(2022, 3, 10),
    title: 'Drugi news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit',
  },
  {
    path: 'a3',
    date: new Date(2022, 4, 2),
    title: 'Trzeci news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam !',
  },
  {
    path: 'a4',
    date: new Date(2022, 4, 10),
    title: 'Czwarty news',
    content: 'To jest troche treści po polsku',
  },
  {
    path: 'a5',
    date: new Date(2022, 5, 10),
    title: 'Piąty news',
    content: 'Coś wyjątkowego sobie sprezentowałem',
  },
  {
    path: 'a6',
    date: new Date(2022, 6, 1),
    title: 'Szósty news',
    content: 'A terz kolejny prezent',
  },
  {
    path: 'a7',
    date: new Date(2022, 6, 10),
    title: 'Siódmy news',
    content: 'Ale z tym zabawy jedno sie zyskuje cos innego traci w tym react',
  },
];

const NewsPage = (props) => {
  // const [records, setRecords] = useState(DUMMY_NEWS);

  // const addRecord = (record) => {
  //   setRecords((prevRecords) => {
  //     return [record, ...prevRecords];
  //   });
  // };

  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>

      <HeaderB>Tu i teraz...</HeaderB>

      <Input className="search" placeholder="szukaj" bgk="bgkS"></Input>

      <Background />
      <div className="overflowWrapper">
        <section className={classes.slider}>
          <InputRList items={DUMMY_NEWS}></InputRList>
          {DUMMY_NEWS.map((record, index) => {
            return (
              <>
                <Label
                  key={record.title}
                  htmlFor={`s${index + 1}`}
                  id={`slide${index + 1}`}
                  name={`slide${index + 1}`}
                >
                  <Card
                    // key={index.toString()}
                    path={record.path}
                    date={record.date}
                    title={record.title}
                    content={record.content}
                  ></Card>
                </Label>
              </>
            );
          })}
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

///backup
/* <InputR className="first" name="slider" id="s1" defaultChecked></InputR>
          <InputR name="slider" id="s2"></InputR>
          <InputR name="slider" id="s3"></InputR>
          <InputR name="slider" id="s4"></InputR>
          <InputR name="slider" id="s5"></InputR>
          <InputR name="slider" id="s6"></InputR>
          <InputR className="last" name="slider" id="s7"></InputR> 

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
          </Label>  */
