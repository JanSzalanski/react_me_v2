import React from 'react';
import classes from './CommentList.module.css';
import Button from '../../atoms/Button/Button';
import { UserAuth } from '../../../context/AuthContext';

const CommentList = (props) => {
  const { user } = UserAuth();

  const userID = user ? user.uid : null;

  return (
    <>
      <ul className={classes.ul}>
        {props.comments.map((comment) => (
          <li className={classes.comment} key={comment.id}>
            <div className={classes.nameWrap}>
              <img className={classes.pic} src={comment.picture} alt="profile pic" />
              <h2 className={classes.name}>{comment.name} :</h2>
            </div>
            <div className={classes.contentWrap}>
              <div className={classes.contentBgkBorder}>
                <div className={classes.contentBgk}>
                  <p className={classes.content}>{comment.content}</p>
                </div>
              </div>
            </div>
            <div className={classes.btnWrap}>
              <h2 className={classes.date}>{comment.date}</h2>
              {comment.userID === userID ? (
                <Button type="buttonFlex" onClick={props.onEditItem.bind(this, comment.id)}>
                  Edytuj
                </Button>
              ) : null}
              {comment.userID === userID ? (
                <Button type="buttonFlex" onClick={props.onRemoveItem.bind(this, comment.id)}>
                  Usuń
                </Button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      {props.children}
      {props.loading && <h2 className={classes.info}>Pobieranie</h2>}
    </>
  );
};

export default CommentList;
