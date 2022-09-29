import React, { useReducer, useState, useEffect, useCallback } from 'react';
import classes from '../Comments/Comments.module.css';
import CommentList from '../CommentList/CommentList';
import Filter from '../Filter/Filter';
import CommentForm from '../CommentForm/CommentForm';
import ZoneMiddle from '../../UI/Zones/ZoneMiddle';
import LoadingSpiner from '../../UI/LoadingSpiner/LoadingSpiner';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const commentReducer = (currentComment, action) => {
  switch (action.type) {
    case 'SET':
      return action.comments;
    case 'ADD':
      return [...currentComment, action.comment];
    case 'DELETE':
      return currentComment.filter((com) => com.id !== action.id);
    default:
      throw new Error('Ten blad nie powinnen sie zdarzyc: def in reducer');
  }
};

const Comments = () => {
  const [commentArr, dispach] = useReducer(commentReducer, []);
  // const [commentArr, setCommentArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  //połaczenie z firebase tylko raz zaraz po wyrenderowaniu komponentu i to dzieki useEffect z pusta tablicą jako drugi argument - jeszcze bez catch & err

  useEffect(() => {
    console.log('RENDERING COMMENTS');
  });

  const filteredCommentsHandler = useCallback((filteredComments) => {
    dispach({ type: 'SET', comments: filteredComments });
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
        // setCommentArr((prevComments) => [...prevComments, { id: responseData.name, ...comment }]);
        dispach({ type: 'ADD', comment: { id: responseData.name, ...comment } });
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Ooo coś poszło nie tak przy połączeniu z bazą');
      });
  };

  const removeCommentHandler = (commentId) => {
    setIsLoading(true);
    fetch(
      `https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
      {
        method: 'DELETE',
      },
    )
      .then((response) => {
        setIsLoading(false);
        // setCommentArr((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
        dispach({ type: 'DELETE', id: commentId });
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Ooo coś poszło nie tak przy połączeniu z bazą');
      });
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <div className={classes.comments}>
        <Filter onLoadComments={filteredCommentsHandler} />
        <ZoneMiddle>
          <CommentList
            loading={isLoading}
            comments={commentArr}
            onRemoveItem={removeCommentHandler}
          >
            {isLoading && <LoadingSpiner />}
          </CommentList>
        </ZoneMiddle>
        <CommentForm onAddComment={addCommentHandler} />
      </div>
    </>
  );
};

export default Comments;
