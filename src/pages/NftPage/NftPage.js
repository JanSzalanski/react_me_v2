import React from 'react';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './NftPage.module.css';
import Header from '../../components/molecules/Header/Header';
import Background from '../../components/atoms/Background/Background';

const NftPage = (props) => {
  return (
    <div className={classes[props.type] || 'page'}>
      <Header>Strona z NFT i o NFT...</Header>
      <Background />
      <Footer>Stopka</Footer>
    </div>
  );
};

export default NftPage;
