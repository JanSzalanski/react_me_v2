import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './NftPage.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import Background from '../../components/atoms/Background/Background';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Słów kilka o NFT...</HeaderB>
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

export default NftPage;
