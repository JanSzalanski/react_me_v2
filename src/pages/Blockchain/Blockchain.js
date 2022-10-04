/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './Blockchain.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Input from '../../components/atoms/Input/Input';
import Background from '../../components/atoms/Background/Background';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <div className="overlay"></div>
      <HeaderB>Blockchain & AI</HeaderB>
      <Input className="search" placeholder="szukaj" bgk="bgkS"></Input>
      <Background />

      <div className={classes.wrapperGraphic}>
        <div className={classes.nftGraphic} />
        <h2 className={classes.title}>// Kilka słów o #NFT /////</h2>
      </div>

      <FooterB>
        Jan Szałański <br />
        Polityka prywatności
        <br /> © 2022 Wszystkie prawa zastrzeżone
      </FooterB>
    </div>
  );
};

export default NftPage;
