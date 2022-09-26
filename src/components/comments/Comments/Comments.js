import React, { useState, useEffect, useCallback } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';

const Comments = () => {
  const [commentArr, setCommentArr] = useState([]);

  //połaczenie z firebase tylko raz zaraz po wyrenderowaniu komponentu i to dzieki useEffect z pusta tablicą jako drugi argument - jeszcze bez catch & err

  useEffect(() => {
    console.log('RENDERING COMMENTS');
  });

  const filteredCommentsHandler = useCallback((filteredComments) => {
    setCommentArr(filteredComments);
  }, []);

  //połaczenie z firebase ustawienie metody przesyłu POST i przesłanie dodawanego komentarza jeszcze bez catch & err
  const addCommentHandler = (comment) => {
    fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
      });
  };

  const removeCommentHandler = (commentId) => {
    fetch(
      `https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
      {
        method: 'DELETE',
      },
    ).then((response) => {
      setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    });
  };

  return (
    <div className={classes.comments}>
      <Filter onLoadComments={filteredCommentsHandler} />
      <ZoneMiddle>
        <CommentList comments={commentArr} onRemoveItem={removeCommentHandler} />
      </ZoneMiddle>
      <CommentForm onAddComment={addCommentHandler} />
    </div>
  );
};

export default Comments;
