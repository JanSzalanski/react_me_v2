import React from 'react';
import video from '../../assets/earth.mp4';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './NftPage.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Background from '../../components/atoms/Background/Background';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <HeaderB>Strona z NFT i o NFT...</HeaderB>
      <Background />
      <FooterB>Stopka</FooterB>
    </div>
  );
};

export default NftPage;
