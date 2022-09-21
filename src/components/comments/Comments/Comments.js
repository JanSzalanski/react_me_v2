import React, { useState } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';

const Comments = () => {
  const [commentArr, setCommentArr] = useState([]);

  const addCommentHandler = (comment) => {
    setCommentArr((prevComments) => [
      ...prevComments,
      { id: Math.random().toString(), ...comment },
    ]);
  };

  const removeCommentHandler = (commentId) => {
    setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className={classes.comments}>
      <Filter />
      <ZoneMiddle>
        <CommentList comments={commentArr} onRemoveItem={removeCommentHandler} />
      </ZoneMiddle>
      <CommentForm onAddComment={addCommentHandler} />
    </div>
  );
};

export default Comments;
