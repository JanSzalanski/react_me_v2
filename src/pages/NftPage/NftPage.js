import React from 'react';
import Footer from '../../components/molecules/Footer/Footer';
import classes from './NftPage.module.css';
import Header from '../../components/molecules/Header/Header';

const NftPage = (props) => {
  return (
    <div div className={classes[props.type] || 'page'}>
      <Header>Strona z NFT i o NFT...</Header>
      <Footer>Stopka</Footer>
    </div>
  );
};

export default NftPage;
