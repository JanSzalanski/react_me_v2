import React from 'react';
import classes from './CommentList.module.css';

const CommentList = (props) => {
  return (
    <section className={classes.commmentList}>
      <h2>Ładowanie Komentarzy</h2>

      <ul>
        {props.comments.map((comment) => (
          <li key={comment.id} onClick={props.onRemoveItem.bind(this, comment.id)}>
            <span>{comment.name}</span>
            <span>{comment.contents}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentList;
