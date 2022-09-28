import React, { useState, useEffect, useCallback } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';
import LoadingSpiner from '../../UI/LoadingSpiner/LoadingSpiner';

const Comments = () => {
  const [commentArr, setCommentArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //połaczenie z firebase tylko raz zaraz po wyrenderowaniu komponentu i to dzieki useEffect z pusta tablicą jako drugi argument - jeszcze bez catch & err

  useEffect(() => {
    console.log('RENDERING COMMENTS');
  });

  const filteredCommentsHandler = useCallback((filteredComments) => {
    setCommentArr(filteredComments);
  }, []);

  //połaczenie z firebase ustawienie metody przesyłu POST i przesłanie dodawanego komentarza jeszcze bez catch & err
  const addCommentHandler = (comment) => {
    setIsLoading(true);
    fetch('https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setIsLoading(true);
        setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
        setIsLoading(false);
      });
  };

  const removeCommentHandler = (commentId) => {
    setIsLoading(true);
    fetch(
      `https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
      {
        method: 'DELETE',
      },
    ).then((response) => {
      setIsLoading(false);
      setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    });
  };

  return (
    <div className={classes.comments}>
      <Filter onLoadComments={filteredCommentsHandler} />
      <ZoneMiddle>
        <CommentList loading={isLoading} comments={commentArr} onRemoveItem={removeCommentHandler}>
          {isLoading && <LoadingSpiner />}
        </CommentList>
      </ZoneMiddle>
      <CommentForm onAddComment={addCommentHandler} />
    </div>
  );
};

export default Comments;
