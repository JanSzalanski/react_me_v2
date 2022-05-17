import React from 'react';
import video from '../../assets/earth.mp4';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './NftPage.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import Background from '../../components/atoms/Background/Background';
import ContactBar from '../../components/molecules/ContactBar/ContactBar';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <HeaderB>Strona z NFT i o NFT...</HeaderB>
      <Input className="search"></Input>
      <Background />
      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
      <ContactBar />
    </div>
  );
};

export default NftPage;
