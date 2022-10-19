import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.name}>{localStorage.getItem('name')}</h2>
      <h3 className={classes.email}>{localStorage.getItem('email')}</h3>
      <div className={classes.picWrapper}>
        <img src={localStorage.getItem('profilePic')} alt="profile pic" />
      </div>
    </div>
  );
};

export default Profile;
