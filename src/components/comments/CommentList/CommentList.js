import React from 'react';
import classes from './CommentList.module.css';
import Button from '../../atoms/Button/Button';

const CommentList = (props) => {
  return (
    <>
      <ul className={classes.ul}>
        {props.comments.map((comment) => (
          <li className={classes.comment} key={comment.id}>
            <div className={classes.nameWrap}>
              <h2 className={classes.name}>{comment.name} :</h2>
            </div>
            <div className={classes.contentWrap}>
              <p className={classes.content}>{comment.contents}</p>
            </div>
            <div className={classes.btnWrap}>
              <Button type="buttonFlex" onClick={props.onRemoveItem.bind(this, comment.id)}>
                Usuń
              </Button>
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
