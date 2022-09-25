import React from 'react';
import classes from './CommentList.module.css';
import Button from '../../atoms/Button/Button';

const CommentList = (props) => {
  return (
    <section className={classes.commmentList}>
      {/* <h2>Ładowanie Komentarzy</h2> */}

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
    </section>
  );
};

export default CommentList;
