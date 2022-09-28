import React from 'react';
import classes from './CommentList.module.css';
import Button from '../../atoms/Button/Button';

const CommentList = (props) => {
  return (
    <section className={classes.commmentList}>
      <ul className={classes.ul}>
        {props.comments.map((comment) => (
          <li className={classes.comment} key={comment.id}>
            <span className={classes.name}>{comment.name}:</span>
            <span className={classes.contents}>{comment.contents}</span>
            <Button type="secondaryC" onClick={props.onRemoveItem.bind(this, comment.id)}>
              Usuń
            </Button>
          </li>
        ))}
      </ul>
      {props.children}
      {props.loading && <h2 className={classes.info}>Pobieranie</h2>}
    </section>
  );
};

export default CommentList;
