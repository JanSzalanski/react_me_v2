import React from 'react';
// import classes from './MainLayout.module.css';
import SideBar from '../../components/organisms/SideBar/SideBar';

const MainLayout = (props) => {
  return (
    <>
      <SideBar />
      <main>{props.children}</main>
    </>
  );
};

export default MainLayout;
