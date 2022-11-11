import React from 'react';
import classes from './Profile.module.css';
// import { UserAuth } from '../../../context/AuthContext';

const Profile = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.picWrapper}>
        <img src={localStorage.getItem('profilePic')} alt="profile pic" />
      </div>
      <h2 className={classes.name}>{localStorage.getItem('name')}</h2>
      <h3 className={classes.email}>{localStorage.getItem('email')}</h3>
    </div>
  );
};

export default Profile;
