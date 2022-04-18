import React from 'react';
import FooterB from '../../components/molecules/FooterB/FooterB';
import classes from './NftPage.module.css';
import HeaderB from '../../components/molecules/HeaderB/HeaderB';
import Background from '../../components/atoms/Background/Background';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <HeaderB>Strona z NFT i o NFT...</HeaderB>
      <Background />
      <FooterB>Stopka</FooterB>
    </div>
  );
};

export default NftPage;
